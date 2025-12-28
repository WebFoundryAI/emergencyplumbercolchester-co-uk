CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql" WITH SCHEMA "pg_catalog";
CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: app_role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.app_role AS ENUM (
    'admin',
    'user'
);


--
-- Name: check_sitemap_stale(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.check_sitemap_stale() RETURNS boolean
    LANGUAGE sql STABLE
    SET search_path TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.blog_posts bp
    CROSS JOIN public.sitemap_status ss
    WHERE bp.updated_at > ss.last_generated_at
    LIMIT 1
  );
$$;


--
-- Name: has_role(uuid, public.app_role); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;


--
-- Name: update_ai_content_updated_at(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_ai_content_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


--
-- Name: update_sitemap_status_on_blog_change(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_sitemap_status_on_blog_change() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- Update or insert sitemap status to mark regeneration needed
  INSERT INTO public.sitemap_status (id, last_generated_at, url_count, generated_by)
  VALUES (gen_random_uuid(), now() - interval '1 day', 0, 'trigger')
  ON CONFLICT (id) DO UPDATE SET
    last_generated_at = now() - interval '1 day';
  
  RETURN COALESCE(NEW, OLD);
END;
$$;


SET default_table_access_method = heap;

--
-- Name: ai_content; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ai_content (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    key text NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    how_created text DEFAULT 'AI-assisted'::text,
    why_created text,
    human_reviewed boolean DEFAULT false,
    reviewed_by text,
    reviewed_at timestamp with time zone
);


--
-- Name: blog_posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blog_posts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    slug text NOT NULL,
    title text NOT NULL,
    excerpt text NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    how_created text DEFAULT 'AI-assisted'::text,
    why_created text,
    human_reviewed boolean DEFAULT false,
    reviewed_by text,
    reviewed_at timestamp with time zone,
    indexable boolean DEFAULT false
);


--
-- Name: dismissed_health_issues; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.dismissed_health_issues (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    issue_key text NOT NULL,
    issue_title text NOT NULL,
    dismissed_by text,
    dismissed_at timestamp with time zone DEFAULT now() NOT NULL,
    reason text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.leads (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL,
    postcode text NOT NULL,
    service text NOT NULL,
    location text NOT NULL,
    message text,
    source_page text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: sitemap_status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sitemap_status (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    last_generated_at timestamp with time zone DEFAULT now() NOT NULL,
    url_count integer DEFAULT 0 NOT NULL,
    generated_by text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    role public.app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: ai_content ai_content_key_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ai_content
    ADD CONSTRAINT ai_content_key_key UNIQUE (key);


--
-- Name: ai_content ai_content_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ai_content
    ADD CONSTRAINT ai_content_pkey PRIMARY KEY (id);


--
-- Name: blog_posts blog_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_pkey PRIMARY KEY (id);


--
-- Name: blog_posts blog_posts_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_slug_key UNIQUE (slug);


--
-- Name: dismissed_health_issues dismissed_health_issues_issue_key_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dismissed_health_issues
    ADD CONSTRAINT dismissed_health_issues_issue_key_key UNIQUE (issue_key);


--
-- Name: dismissed_health_issues dismissed_health_issues_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dismissed_health_issues
    ADD CONSTRAINT dismissed_health_issues_pkey PRIMARY KEY (id);


--
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


--
-- Name: sitemap_status sitemap_status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sitemap_status
    ADD CONSTRAINT sitemap_status_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_user_id_role_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);


--
-- Name: idx_ai_content_key; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ai_content_key ON public.ai_content USING btree (key);


--
-- Name: idx_ai_content_unreviewed; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ai_content_unreviewed ON public.ai_content USING btree (human_reviewed) WHERE (human_reviewed = false);


--
-- Name: idx_blog_posts_indexable; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_indexable ON public.blog_posts USING btree (indexable);


--
-- Name: idx_blog_posts_unreviewed; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_unreviewed ON public.blog_posts USING btree (human_reviewed) WHERE (human_reviewed = false);


--
-- Name: blog_posts blog_posts_sitemap_delete; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER blog_posts_sitemap_delete AFTER DELETE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_sitemap_status_on_blog_change();


--
-- Name: blog_posts blog_posts_sitemap_insert; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER blog_posts_sitemap_insert AFTER INSERT ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_sitemap_status_on_blog_change();


--
-- Name: blog_posts blog_posts_sitemap_update; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER blog_posts_sitemap_update AFTER UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_sitemap_status_on_blog_change();


--
-- Name: ai_content update_ai_content_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_ai_content_updated_at BEFORE UPDATE ON public.ai_content FOR EACH ROW EXECUTE FUNCTION public.update_ai_content_updated_at();


--
-- Name: blog_posts update_blog_posts_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_ai_content_updated_at();


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: blog_posts Admins can create blog posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can create blog posts" ON public.blog_posts FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: ai_content Admins can delete ai_content; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can delete ai_content" ON public.ai_content FOR DELETE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: blog_posts Admins can delete blog posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can delete blog posts" ON public.blog_posts FOR DELETE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: dismissed_health_issues Admins can delete dismissed issues; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can delete dismissed issues" ON public.dismissed_health_issues FOR DELETE USING ((EXISTS ( SELECT 1
   FROM public.user_roles
  WHERE ((user_roles.user_id = auth.uid()) AND (user_roles.role = 'admin'::public.app_role)))));


--
-- Name: ai_content Admins can insert ai_content; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can insert ai_content" ON public.ai_content FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: dismissed_health_issues Admins can insert dismissed issues; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can insert dismissed issues" ON public.dismissed_health_issues FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM public.user_roles
  WHERE ((user_roles.user_id = auth.uid()) AND (user_roles.role = 'admin'::public.app_role)))));


--
-- Name: ai_content Admins can update ai_content; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update ai_content" ON public.ai_content FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: blog_posts Admins can update blog posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update blog posts" ON public.blog_posts FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: sitemap_status Admins can update sitemap status; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update sitemap status" ON public.sitemap_status USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: user_roles Admins can view all roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all roles" ON public.user_roles FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: dismissed_health_issues Admins can view dismissed issues; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view dismissed issues" ON public.dismissed_health_issues FOR SELECT USING ((EXISTS ( SELECT 1
   FROM public.user_roles
  WHERE ((user_roles.user_id = auth.uid()) AND (user_roles.role = 'admin'::public.app_role)))));


--
-- Name: sitemap_status Admins can view sitemap status; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view sitemap status" ON public.sitemap_status FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: blog_posts Anyone can read blog posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can read blog posts" ON public.blog_posts FOR SELECT USING (true);


--
-- Name: ai_content Anyone can read cached content; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can read cached content" ON public.ai_content FOR SELECT USING (true);


--
-- Name: leads Anyone can submit a lead; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT WITH CHECK (true);


--
-- Name: leads Authenticated users can view leads; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Authenticated users can view leads" ON public.leads FOR SELECT USING ((auth.role() = 'authenticated'::text));


--
-- Name: user_roles Users can view their own roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: ai_content; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.ai_content ENABLE ROW LEVEL SECURITY;

--
-- Name: blog_posts; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

--
-- Name: dismissed_health_issues; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.dismissed_health_issues ENABLE ROW LEVEL SECURITY;

--
-- Name: leads; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

--
-- Name: sitemap_status; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.sitemap_status ENABLE ROW LEVEL SECURITY;

--
-- Name: user_roles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;