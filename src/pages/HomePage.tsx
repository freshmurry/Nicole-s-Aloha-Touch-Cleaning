import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Toaster, toast } from '@/components/ui/sonner';
import { api } from '@/lib/api-client';
import { BroomIcon, BucketIcon, SparkleIcon } from '@/components/icons';
import { CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { useEffect } from 'react';
const leadFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  zip: z.string().regex(/^\d{5}$/, { message: 'Please enter a valid 5-digit ZIP code.' }),
});
type LeadFormValues = z.infer<typeof leadFormSchema>;
const HeroSection = () => (
  <section id="hero" className="relative overflow-hidden bg-white pt-12 sm:pt-24 lg:pt-32">
    <div className="absolute inset-0 bg-aloha-50/50 [mask-image:radial-gradient(100%_50%_at_50%_0%,white,transparent)]"></div>
    <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="font-great-vibes text-4xl text-aloha">Nicole’s Aloha Touch Cleaning</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Trusted Local Cleaning in Northwest Indiana
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Serving St. John, Munster, Highland, Schererville & Crown Point with personalized cleaning, the Aloha way.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="hero-form"
        >
          <LeadForm />
        </motion.div>
      </div>
    </div>
  </section>
);
const LeadForm = () => {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { name: '', email: '', phone: '', zip: '' },
  });
  const onSubmit = async (data: LeadFormValues) => {
    try {
      await api('/api/leads', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      toast.success('Thank you!', {
        description: "We've received your quote request and will be in touch shortly.",
      });
      form.reset();
    } catch (error) {
      toast.error('Submission Failed', {
        description: error instanceof Error ? error.message : 'Please try again later.',
      });
    }
  };
  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-gray-800">Get Your Free Quote Today!</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl><Input placeholder="(555) 123-4567" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="zip" render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl><Input placeholder="e.g., 46373" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" size="lg" className="w-full bg-aloha text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-aloha-600 active:scale-95" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Sending...' : 'Get My Free Quote'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
const ServicesSection = () => {
  const services = [
    { icon: BroomIcon, title: 'Standard Cleaning', description: 'Our regular service keeps your home consistently fresh and tidy. Perfect for busy families.' },
    { icon: BucketIcon, title: 'Deep Cleaning', description: 'A thorough top-to-bottom clean that tackles dirt and grime in every corner of your home.' },
    { icon: SparkleIcon, title: 'Add-On Services', description: 'Customize your clean with extras like oven cleaning, window washing, laundry, and more.' },
  ];
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">What We Offer</h2>
          <p className="mt-4 text-lg text-gray-600">Tailored cleaning solutions for your home.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center shadow-lg transition-transform hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aloha-100 text-aloha">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const WhyChooseUsSection = () => {
  const features = [
    { icon: ShieldCheck, title: 'Bonded & Insured', description: 'Your peace of mind is our priority. We are fully bonded and insured.' },
    { icon: CheckCircle, title: 'Satisfaction Guaranteed', description: 'We stand by our work. If you\'re not happy, we\'ll make it right.' },
    { icon: Star, title: 'Locally Owned & Operated', description: 'Proudly serving our neighbors in Northwest Indiana with a personal touch.' },
  ];
  const testimonials = [
    { quote: "Nicole's team is fantastic! They are reliable, thorough, and my house has never been cleaner. Highly recommend!", author: "Sarah K.", location: "St. John, IN" },
    { quote: "The deep clean was worth every penny. It felt like moving into a brand new home. Incredible attention to detail.", author: "Mike R.", location: "Munster, IN" },
  ];
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Why Choose Aloha Clean?</h2>
          <p className="mt-4 text-lg text-gray-600">We bring the warmth and care of Aloha to every home.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto h-12 w-12 text-aloha" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-gray-900">- {testimonial.author}, <span className="font-normal text-gray-600">{testimonial.location}</span></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
const ServiceAreaSection = () => (
  <section id="service-area" className="py-16 md:py-24 bg-aloha-50/50">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Our Service Area</h2>
          <p className="mt-4 text-lg text-gray-600">
            We proudly provide exceptional cleaning services to homes in the following Northwest Indiana communities:
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-lg text-gray-700">
            <li><CheckCircle className="mr-2 inline h-5 w-5 text-aloha" />St. John</li>
            <li><CheckCircle className="mr-2 inline h-5 w-5 text-aloha" />Munster</li>
            <li><CheckCircle className="mr-2 inline h-5 w-5 text-aloha" />Highland</li>
            <li><CheckCircle className="mr-2 inline h-5 w-5 text-aloha" />Schererville</li>
            <li><CheckCircle className="mr-2 inline h-5 w-5 text-aloha" />Crown Point</li>
          </ul>
          <p className="mt-4 text-gray-600">If you live in these towns or nearby, you're covered!</p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-xl">
          <img src="https://i.imgur.com/2vG2E0s.png" alt="Map of service area including St. John, Munster, Highland, Schererville, and Crown Point in Indiana" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);
export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aloha Clean NWI",
    "description": "Professional home cleaning services in St. John, Munster, Highland, Schererville, and Crown Point, Indiana.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St. John",
      "addressRegion": "IN",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567",
    "areaServed": [
      { "@type": "City", "name": "St. John" },
      { "@type": "City", "name": "Munster" },
      { "@type": "City", "name": "Highland" },
      { "@type": "City", "name": "Schererville" },
      { "@type": "City", "name": "Crown Point" }
    ],
    "serviceType": "Home Cleaning"
  };
  return (
    <>
      <Seo
        title="Home Cleaning Services in St. John, IN & NWI"
        description="Aloha Clean NWI offers trusted, personalized home cleaning services in St. John, Munster, Highland, Schererville, and Crown Point. Get your free quote today!"
        keywords="home cleaning st john, house cleaning munster, maid service schererville, deep cleaning crown point, northwest indiana cleaning service"
        schema={homePageSchema}
      />
      <div className="bg-white">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ServiceAreaSection />
        <Toaster richColors closeButton />
      </div>
    </>
  );
}