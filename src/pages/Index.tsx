import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { ShoppingCart, Link2, Database, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const features = [
  { icon: Link2, title: "Paste & Go", desc: "Just paste the product link. We handle the rest." },
  { icon: ShoppingCart, title: "Multi-Store", desc: "Track products from any e-commerce." },
  { icon: Database, title: "Auto-Extract", desc: "Price, images, details — all captured instantly." },
  { icon: Bell, title: "Stay Updated", desc: "Get notified when prices drop." },
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list! We'll be in touch.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16 overflow-hidden relative">
      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8 max-w-2xl text-center relative z-10"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="TrackToBuy logo"
          className="w-24 h-24 invert brightness-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        {/* Headline */}
        <div>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Coming Soon george george george george
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Your wishlist,
            <br />
            <span className="text-primary">everywhere.</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            Paste any product link from any store. We extract the details, track the price, and keep it all in one place.
          </p>
        </div>

        {/* Email signup */}
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
          <Input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            required
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shrink-0">
            Notify Me
          </Button>
        </form>

        {/* Features */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2 text-center">
              <f.icon className="w-6 h-6 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-6 text-muted-foreground text-xs tracking-wide">
        © 2026 TrackToBuy. All rights reserved.
      </p>
    </div>
  );
};

export default Index;
