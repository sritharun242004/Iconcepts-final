import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { contactInquirySchema, type ContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { FadeIn, MagneticElement } from "@/components/animations";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactInquiry>({
    resolver: zodResolver(contactInquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      requirement: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactInquiry) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
  });

  const onSubmit = (data: ContactInquiry) => {
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <FadeIn>
        <div className="py-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8"
          >
            <CheckCircle className="w-10 h-10 text-primary" />
          </motion.div>
          <h3
            className="font-heading text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-form-success"
          >
            Thank you<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed mb-8">
            We've received your inquiry and will get back to you shortly. Our
            team typically responds within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] hover:underline font-mono"
            data-testid="button-send-another"
          >
            Send another inquiry →
          </button>
        </div>
      </FadeIn>
    );
  }

  return (
    <div>
      <FadeIn>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] font-mono">
            Send a Message
          </span>
        </div>
      </FadeIn>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono">
                Name *
              </label>
              <input
                {...form.register("name")}
                type="text"
                placeholder="Your name"
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/50 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                data-testid="input-name"
              />
              {form.formState.errors.name && (
                <p className="text-primary text-xs mt-2">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono">
                Company
              </label>
              <input
                {...form.register("company")}
                type="text"
                placeholder="Company name"
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/50 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                data-testid="input-company"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono">
                Email *
              </label>
              <input
                {...form.register("email")}
                type="email"
                placeholder="your@email.com"
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/50 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                data-testid="input-email"
              />
              {form.formState.errors.email && (
                <p className="text-primary text-xs mt-2">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono">
                Phone
              </label>
              <input
                {...form.register("phone")}
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/50 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                data-testid="input-phone"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono">
              Your Requirement *
            </label>
            <textarea
              {...form.register("requirement")}
              rows={4}
              placeholder="Tell us about your project, campaign or requirement..."
              className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/50 text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40"
              data-testid="input-requirement"
            />
            {form.formState.errors.requirement && (
              <p className="text-primary text-xs mt-2">
                {form.formState.errors.requirement.message}
              </p>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="pt-4">
            <MagneticElement strength={0.15}>
              <motion.button
                type="submit"
                disabled={mutation.isPending}
                className="micro-cta inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full disabled:opacity-60 font-mono"
                whileHover={{ scale: 1.05, gap: "16px" }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-submit-contact"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </motion.button>
            </MagneticElement>
            {mutation.isError && (
              <p className="text-primary text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </FadeIn>
      </form>
    </div>
  );
}
