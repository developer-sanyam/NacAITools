"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brands = [
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Google", logo: "/placeholder.png" },
    { name: "Harvard University", logo: "/placeholder.png" },
    { name: "Stanford", logo: "/placeholder.png" },
    { name: "MIT", logo: "/placeholder.png" },
    { name: "IBM", logo: "/placeholder.png" },
]

const AffiliatedBrands = () => {
    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Trusted by Leading Organizations</h2>
                    <p className="mt-2 text-muted-foreground">
                        Our platform is used by top educational institutions and companies worldwide
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={brand.logo || "/placeholder.png"}
                                alt={brand.name}
                                width={120}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AffiliatedBrands
