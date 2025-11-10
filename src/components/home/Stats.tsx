"use client"

import { motion } from "framer-motion"
import { Users, Calendar, Award, Heart } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: Calendar,
    value: "9+",
    label: "Years of Teaching Experience",
    color: "text-sage-600",
    bgColor: "bg-sage-50",
  },
  {
    id: 2,
    icon: Users,
    value: "500+",
    label: "Clients Supported",
    color: "text-terracotta",
    bgColor: "bg-terracotta-light/30",
  },
  {
    id: 3,
    icon: Award,
    value: "MA",
    label: "Clinical Psychology",
    color: "text-soft-blue-600",
    bgColor: "bg-soft-blue-100",
  },
  {
    id: 4,
    icon: Heart,
    value: "100%",
    label: "Confidential & Safe",
    color: "text-lavender-600",
    bgColor: "bg-lavender-100",
  },
]

export function Stats() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`mb-2 font-serif text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-charcoal/70 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
