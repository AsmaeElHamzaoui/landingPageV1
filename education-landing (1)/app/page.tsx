"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  Star,
  GraduationCap,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Quote,
} from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export default function EducationLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduPrime Academy
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors">
              Courses
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-slate-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
                    🎓 Premium Education Platform
                  </Badge>
                </motion.div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-slate-900">Transform Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Future Today
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Join thousands of students who have unlocked their potential with our world-class education programs.
                  Expert instructors, cutting-edge curriculum, and personalized learning paths.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-6 bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center space-x-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">50K+</div>
                  <div className="text-sm text-slate-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="/images/Studient1.jpg"
                  alt="Students learning"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Award className="w-12 h-12 text-white" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-32 h-20 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-xs text-slate-600">+2.5k online</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-blue-100 text-blue-700 mb-4">Why Choose Us</Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Excellence in Every Lesson
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven teaching methods to deliver an unparalleled learning
              experience.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: BookOpen,
                title: "Expert Curriculum",
                description: "Industry-leading courses designed by top educators and professionals",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Live Mentorship",
                description: "One-on-one guidance from experienced mentors and industry experts",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Globe,
                title: "Global Community",
                description: "Connect with learners worldwide and build lasting professional networks",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Clock,
                title: "Flexible Learning",
                description: "Study at your own pace with 24/7 access to all course materials",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Award,
                title: "Certified Programs",
                description: "Earn recognized certificates that boost your career prospects",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: CheckCircle,
                title: "Guaranteed Results",
                description: "98% of our students achieve their learning goals within 6 months",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-orange-100 text-orange-700 mb-6">Our Story</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Empowering Minds Since 2010</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded by a team of passionate educators and technologists, EduPrime Academy has been at the forefront
                of educational innovation. We believe that quality education should be accessible to everyone,
                everywhere.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Personalized learning paths for every student",
                  "Industry partnerships for real-world experience",
                  "Cutting-edge technology integration",
                  "Continuous curriculum updates",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/studient2.jpg"
                    alt="Students collaborating"
                    width={250}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                  className="mt-8"
                >
                  <Image
                    src="/images/studient3.jpg"
                    alt="Teacher explaining"
                    width={250}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </motion.div>
              </div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-100 text-purple-700 mb-4">Success Stories</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What Our Students Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our students have to say about their transformative learning
              experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Software Developer",
                content:
                  "EduPrime Academy completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job at a top tech company.",
                rating: 5,
                image: "/images/Studient1.jpg",
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                content:
                  "The curriculum is incredibly comprehensive and up-to-date. I gained practical skills that I use every day in my current role.",
                rating: 5,
                image: "/images/studient2.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                content:
                  "The flexibility of the program allowed me to learn while working full-time. The support from instructors was exceptional throughout my journey.",
                rating: 5,
                image: "/images/studient3.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-purple-400 mb-4" />
                    <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>

                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-blue-100 text-blue-700 mb-4">FAQ</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about our programs and services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What makes EduPrime Academy different from other online schools?",
                  answer:
                    "We combine personalized learning paths, live mentorship, and industry partnerships to provide a comprehensive educational experience. Our curriculum is constantly updated to reflect current industry standards, and we maintain a 98% student success rate.",
                },
                {
                  question: "How long does it take to complete a program?",
                  answer:
                    "Program duration varies depending on the course and your learning pace. Most of our certificate programs can be completed in 3-6 months with 10-15 hours of study per week. We offer flexible scheduling to accommodate your lifestyle.",
                },
                {
                  question: "Do you offer job placement assistance?",
                  answer:
                    "Yes! We provide comprehensive career support including resume reviews, interview preparation, portfolio development, and direct connections with our industry partners. Our career services team works with you throughout your program and beyond.",
                },
                {
                  question: "What kind of support do students receive?",
                  answer:
                    "Students receive 24/7 access to course materials, weekly live sessions with instructors, one-on-one mentorship, peer collaboration opportunities, and dedicated student success coordinators who monitor your progress and provide guidance.",
                },
                {
                  question: "Are the certificates recognized by employers?",
                  answer:
                    "Our certificates are industry-recognized and valued by top employers. We maintain partnerships with leading companies who actively recruit our graduates. Many of our students receive job offers before completing their programs.",
                },
                {
                  question: "What if I need to pause my studies?",
                  answer:
                    "We understand that life happens. You can pause your studies for up to 6 months without penalty. When you're ready to return, you'll pick up exactly where you left off with full access to updated course materials and continued support.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-slate-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of successful students who have already started their journey. Your dream career is just
              one click away.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent"
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-blue-100"
            >
              <p className="text-sm">✨ No commitment required • Free trial available • Money-back guarantee</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">EduPrime Academy</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering minds and transforming futures through world-class education and innovative learning
                experiences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UX/UI Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} EduPrime Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
