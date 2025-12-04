import { motion } from 'framer-motion';
import { MapPin, Users, Award, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '500+', label: 'Products' },
    { value: '50+', label: 'Brands' },
    { value: '15', label: 'Years Experience' },
  ];

  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
    { name: 'Sarah Miller', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
    { name: 'James Wilson', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  ];

  return (
    <main className="pt-24 md:pt-28 pb-20">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium mb-4 block">OUR STORY</span>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              PASSION FOR
              <br />
              <span className="text-gradient">CYCLING</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Founded in 2009, VeloCycle started with a simple mission: to provide cyclists 
              with the best gear at fair prices. What began in a small garage has grown into 
              a trusted destination for riders worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="font-display text-5xl md:text-6xl text-primary block mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium mb-4 block">OUR MISSION</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                GEAR THAT PERFORMS
              </h2>
              <p className="text-muted-foreground mb-6">
                We believe every cyclist deserves access to high-quality accessories that 
                enhance their riding experience. Our team tests every product we sell, 
                ensuring it meets our rigorous standards for performance, durability, and value.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Quality First</h4>
                  <p className="text-muted-foreground text-sm">Every product tested and approved</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Expert Curation</h4>
                  <p className="text-muted-foreground text-sm">Handpicked by cycling enthusiasts</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800"
                  alt="Cycling action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-xl flex items-center justify-center">
                <span className="font-display text-4xl text-primary-foreground">15+</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium mb-4 block">OUR TEAM</span>
            <h2 className="font-display text-4xl md:text-5xl">MEET THE CREW</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium mb-4 block">VISIT US</span>
            <h2 className="font-display text-4xl md:text-5xl">OUR STORES</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { city: 'Portland', address: '123 Cycle Street, OR 97201', hours: 'Mon-Sat: 9AM-7PM' },
              { city: 'San Francisco', address: '456 Bike Lane, CA 94102', hours: 'Mon-Sat: 10AM-8PM' },
              { city: 'Seattle', address: '789 Pedal Ave, WA 98101', hours: 'Mon-Sat: 9AM-6PM' },
            ].map((store, index) => (
              <motion.div
                key={store.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-2xl mb-2">{store.city}</h3>
                <p className="text-muted-foreground text-sm mb-2">{store.address}</p>
                <p className="text-sm text-primary">{store.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
