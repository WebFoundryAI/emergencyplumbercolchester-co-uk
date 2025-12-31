import { lazy, Suspense } from "react";

// Lazy load the form to defer react-hook-form, zod, and @radix-ui/react-select
const LeadForm = lazy(() =>
  import("@/components/forms/LeadForm").then((m) => ({ default: m.LeadForm }))
);

interface LazyLeadFormProps {
  sourcePage: string;
  defaultService?: string;
  defaultLocation?: string;
}

function FormPlaceholder() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 bg-muted rounded-md" />
      <div className="h-10 bg-muted rounded-md" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-10 bg-muted rounded-md" />
        <div className="h-10 bg-muted rounded-md" />
      </div>
      <div className="h-10 bg-muted rounded-md" />
      <div className="h-10 bg-muted rounded-md" />
      <div className="h-20 bg-muted rounded-md" />
      <div className="h-12 bg-primary/20 rounded-md" />
    </div>
  );
}

export function LazyLeadForm(props: LazyLeadFormProps) {
  return (
    <Suspense fallback={<FormPlaceholder />}>
      <LeadForm {...props} />
    </Suspense>
  );
}
