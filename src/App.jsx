
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function Portfolio() {
  const [image, setImage] = useState(null);
  const [dark, setDark] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className={dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}>
      <div className="min-h-screen p-6 transition-all duration-500">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Mon Portfolio 🚀</h1>
            <Button onClick={() => setDark(!dark)}>
              {dark ? "Mode clair" : "Mode sombre"}
            </Button>
          </div>

          {/* PROFILE */}
          <div className="flex flex-col items-center mb-10">
            <input type="file" onChange={handleImageUpload} className="mb-4" />
            {image && (
              <motion.img
                src={image}
                className="w-44 h-44 rounded-full object-cover shadow-2xl border-4 border-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            )}
            <h2 className="text-2xl font-semibold mt-4">Ousséni Ouédraogo</h2>
            <p className="text-gray-400">Développeur logiciel & systèmes embarqués</p>
          </div>

          {/* ABOUT + SKILLS */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">À propos</h2>
                <p>
                  Passionné par le développement C, Arduino et les systèmes intelligents.
                  Je crée des applications performantes et innovantes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Compétences</h2>
                <div className="flex flex-wrap gap-2">
                  {["C", "React", "SQLite", "Arduino", "Réseaux"].map((s) => (
                    <span key={s} className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PROJECTS */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Projets</h2>
            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  title: "Gestion de stock",
                  desc: "Application GTK + SQLite avec facturation"
                },
                {
                  title: "Robot Arduino",
                  desc: "Robot autonome avec détection d'obstacles"
                },
                {
                  title: "Radar intelligent",
                  desc: "Visualisation temps réel avec Processing"
                }
              ].map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-4 rounded-2xl shadow-lg"
                >
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-400">{p.desc}</p>
                </motion.div>
              ))}

            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex flex-col gap-3">
                <input placeholder="Nom" className="p-2 rounded bg-gray-800" />
                <input placeholder="Email" className="p-2 rounded bg-gray-800" />
                <textarea placeholder="Message" className="p-2 rounded bg-gray-800" />
                <Button className="bg-blue-500">Envoyer</Button>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <div className="flex items-center gap-2"><Mail /> email@example.com</div>
                <div className="flex items-center gap-2"><Github /> github.com/tonprofil</div>
                <div className="flex items-center gap-2"><Linkedin /> linkedin.com/in/tonprofil</div>

                <Button className="mt-4 flex items-center gap-2">
                  <Download /> Télécharger mon CV
                </Button>
              </div>

            </div>
          </div>

          {/* FOOTER */}
          <div className="text-center text-gray-500 text-sm mt-10">
            © 2026 - Portfolio moderne
          </div>

        </div>
      </div>
    </div>
  );
}

