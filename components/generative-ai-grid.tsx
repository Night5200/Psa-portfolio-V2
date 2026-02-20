"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Neural Dreamscapes",
    description: "AI-generated surreal environments that blur the boundary between real and imagined worlds.",
    tag: "Image Generation",
    gradient: "from-purple-800 to-indigo-900",
    icon: "🌌",
  },
  {
    title: "Synthetic Portraits",
    description: "Hyper-realistic AI portraits exploring identity, culture, and the human condition.",
    tag: "Portrait AI",
    gradient: "from-blue-900 to-cyan-900",
    icon: "🧬",
  },
  {
    title: "Motion Synthesis",
    description: "Generative video sequences crafted frame-by-frame using diffusion models and custom prompting pipelines.",
    tag: "Video Generation",
    gradient: "from-violet-900 to-fuchsia-900",
    icon: "🎞️",
  },
  {
    title: "Prompt Architecture",
    description: "The art and science behind crafting prompts that direct AI toward cinematic, emotionally resonant outputs.",
    tag: "Prompt Engineering",
    gradient: "from-slate-800 to-purple-900",
    icon: "✍️",
  },
]

const capabilities = [
  { label: "Text-to-Image", desc: "Midjourney, DALL·E, Stable Diffusion" },
  { label: "Text-to-Video", desc: "Sora, Runway, Pika Labs" },
  { label: "AI Upscaling", desc: "Topaz, Real-ESRGAN" },
  { label: "Voice & Audio AI", desc: "ElevenLabs, Suno, Udio" },
  { label: "3D Generation", desc: "Luma Dream Machine, Meshy" },
  { label: "Workflow Automation", desc: "ComfyUI, n8n, custom pipelines" },
]

export default function GenerativeAIGrid() {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} p-8 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/5`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)"
                }}
              />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{project.icon}</div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-3 border border-white/20 rounded-full px-3 py-1">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Tools & Capabilities
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            We harness the latest AI tools to push the boundaries of visual production.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors duration-200"
              >
                <p className="text-white font-semibold mb-1">{cap.label}</p>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-12 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(139,92,246,0.6) 0%, transparent 60%),
                                radial-gradient(circle at 70% 50%, rgba(59,130,246,0.6) 0%, transparent 60%)`
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to create something extraordinary?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Let's explore the intersection of human vision and artificial intelligence together.
            </p>
            <a
              href="mailto:hello@psastudios.com"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
