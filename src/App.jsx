import React from "react";
import { motion } from "framer-motion";
//import { Mail, GitHub, Linkedin, Download } from "lucide-react";
import "./App.css"; // Assure-toi que ce fichier existe

// Composants simples pour remplacer shadcn/ui
const Card = ({ children }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-sm mx-auto my-4">
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, ...props }) => (
  <button
    className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
    {...props}
  >
    {children}
  </button>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mon Portfolio
      </motion.h1>

      <motion.div
        className="flex space-x-6 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href="mailto:tonemail@example.com" target="_blank" rel="noopener noreferrer">
          <Mail size={32} />
        </a>
        <a href="https://github.com/O2SIdark" target="_blank" rel="noopener noreferrer">
          <GitHub size={32} />
        </a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">
          <Linkedin size={32} />
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Download size={32} />
        </a>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Projet 1</h2>
            <p className="text-gray-300">
              Description de ton premier projet. Tu peux ajouter une image ici.
            </p>
            <Button className="mt-4">Voir Projet</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Projet 2</h2>
            <p className="text-gray-300">
              Description de ton deuxième projet. Ajoute des liens et images facilement.
            </p>
            <Button className="mt-4">Voir Projet</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default App;
