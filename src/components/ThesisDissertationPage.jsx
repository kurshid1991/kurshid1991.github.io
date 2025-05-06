import { useState } from "react";

export default function ThesisDissertationPage() {
  const [openThesis, setOpenThesis] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const thesisData = [
    {
      level: "M.Tech Thesis",
      title: "Inhibition of AcrB Efflux Protein: An Electrostatic Approach",
      summary:
        "Investigated the AcrB efflux pump's role in multidrug resistance...",
      abstract:
        "AcrB, a membrane protein in gram-negative bacteria like Escherichia coli and Pseudomonas aeruginosa, functions as a multidrug efflux pump, expelling cytotoxic substances and contributing to antibiotic resistance by transporting diverse compounds. This impacts the efficacy of existing antibiotics and hinders the discovery of new drugs. The research aims to block the AcrB protein tunnel (PDB ID: 1T9Y) through which drugs are expelled, using an electrostatic approach. The study identifies amino acids lining the inner cavity of the tunnel, calculates the potential gradient created by the induced Proton Motive Force (PMF), and visualizes it graphically. Using tools like DelPhi, the electrostatic properties of binding sites and amino acids were analyzed. Molecular dynamics simulations revealed electrostatic interactions between ligands and the protein binding surface, highlighting their critical role in efflux mechanism resistance.",
      tools: [
        "Delphi",
        "GROMACS",
        "Schrodinger Desmond",
        "Schrodinger Maestro",
        "PyMOL",
        "Chimera",
      ],
      images: [
        {
          url: "/images/Screenshot2025-04-14104841.png",
          description: "Visualizing surface potential of AcrB protein tunnel using DelPhi"
        },
        {
          url: "/images/Screenshot2025-04-14104918.png",
          description: "Contact map of idebtified AcrB protein tunnel with potential gradient"
        },
        {
          url: "/images/Screenshot2025-04-14104928.png",
          description: "Visualizing the electrostatic field of AcrB protein tunnel using DelPhi"
        },
        {
          url: "/images/Screenshot2025-04-14104940.png",
          description: "Binding of MC-201 (ligand) on periplasmic domain of AcrB protein"
        },
        {
          url: "/images/Screenshot2025-04-14104950.png",
          description: "Binding of MC-201 (ligand) on central cavity of AcrB protein"
        },
        {
          url: "/images/Screenshot2025-04-14105029.png",
          description: "Visualizing sufrace contacts with ligands at 0 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105036.png",
          description: "Visualizing sufrace contacts with ligands at 0 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105043.png",
          description: "Visualizing sufrace contacts with ligands at 25 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105051.png",
          description: "Visualizing sufrace contacts with ligands at 25 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105057.png",
          description: "Visualizing sufrace contacts with ligands at 50 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105103.png",
          description: "Visualizing sufrace contacts with ligands at 50 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105109.png",
          description: "Visualizing sufrace contacts with ligands at 75 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105114.png",
          description: "Visualizing sufrace contacts with ligands at 75 ns"
        },
        {
          url: "/images/Screenshot2025-04-14111929.png",
          description: "Visualizing sufrace contacts with ligands at 100 ns"
        },
        {
          url: "/images/Screenshot2025-04-14105126.png",
          description: "Visualizing sufrace contacts with ligands at 100 ns"
        },
        {
          url: "/images/Screenshot2025-04-14104907.png",
          description: "Amino acid residue liningthe central pore"
        },
        {
          url: "/images/Screenshot2025-04-14105004.png",
          description: "Energies of priplasmic region and central cavity of AcrB protein"
        }
      ],
    },
    {
      level: "B.Tech Thesis",
      title: "Inhibition of NDM-1 in Superbugs by Phytochemicals: An Insilico Approach",
      summary:
        "Used molecular docking to identify phytochemicals that inhibit the NDM1 enzyme...",
      abstract:
        "NDM-1 or New Delhi MetalloBeta Lactamase 1 is a novel β-lactamase enzyme that contains zinc as a cofactor produced by certain strains of gram negative bacteria, especially members of Enterbactriaceae family. The common microorganisms involved in the NDM-1 production are E.coli, Klebsiella and Pseudomonas. The enzyme NDM-1 provides bacterial resistance by its hydrolytic activity against the β-lactam ring of antibiotics. Inhibition of NDM-1 may prevent the hydrolysis of β-lactam ring of the antibiotics, and therefore, plays an important role against antibacterial resistance. Here we made an attempt to design suitable inhibitors against NDM-1 from different natural antibacterial compounds using molecular docking approach. The study was done by molecular docking with Schrödinger Maestro 9.3. Punicafolin showed the best inhibition activity towards zinc ions and seemed to be directly interacting with the active site residues and the zinc.",
      tools: [
        "AutoDock",
        "Chem Sketch",
        "PubChem",
        "Ligplot",
        "Chimera",
        "PyMOL",
        "VMD",
      ],
      images: [
        {
          url: "/images/Screenshot_2025-04-13_172339.png",
          description: "a. NDM-1 enzyme structure with bound ligand\nb. Superimposition of NDM-1 and related structures"
        },
        {
          url: "/images/Screenshot_2025-04-13_172648.png",
          description: "3DStructures of different classes of beta-lactamase enzymes"
        },
        {
          url: "/images/Screenshot_2025-04-13_172705.png",
          description: "Visualizing VIM4 and VIM2 mutations in PyMol"
        },
      {
          url: "/images/Screenshot_2025-04-13_172830.png",
          description: "Interaction of L-Captopril with NDM-1"
        },
        {
          url: "/images/Screenshot_2025-04-13_172845.png",
          description: "Interaction of D-Captopril with NDM-1"
        },
        {
          url: "/images/Screenshot_2025-04-13_172916.png",
          description: "Interaction of Punicafolin with NDM-1"
        },
        {
          url: "/images/Screenshot2025-04-13172929.png",
          description: "Interaction of Imipenem with NDM-1"
        },
        {
          url: "/images/Screenshot2025-04-13172941.png",
          description: "Interaction of Cephalexin with NDM-1"
        }
      ]
    },
  ];

  const handleToggle = (index) => {
    setOpenThesis(openThesis === index ? null : index);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-extrabold mb-8 text-left text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        Thesis & Dissertation
      </h1>

      <div className="space-y-10">
        {thesisData.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2
              onClick={() => handleToggle(index)}
              className="cursor-pointer font-bold text-xl text-orange-600 transition-all duration-300 hover:text-teal-500"
            >
              {item.level}:
            </h2>

            <p className="text-lg font-semibold ml-4">{item.title}</p>

            {openThesis === index && (
              <div className="ml-6 space-y-3">
                <p className="text-base">{item.summary}</p>

                <p>
                  <span className="font-bold">Abstract: </span>
                  <span className="block text-justify whitespace-normal break-words">
                    {item.abstract}
                  </span>
                </p>

                <p>
                  <span className="font-bold">Tools: </span>
                  {item.tools.join(", ")}
                </p>

                {/* ✅ Scrollable Image Section Fixed */}
                <div className="mt-4 py-2 border border-gray-400 rounded-md overflow-x-auto">
                  <div className="flex flex-nowrap space-x-4">
                    {item.images.map((img, i) => (
                      <div key={i} className="min-w-[12rem]">
                        <img
                          src={img.url}
                          alt={img.description}
                          className="w-full h-32 object-cover rounded-md cursor-pointer hover:opacity-90 transition"
                          onClick={() => setSelectedImage(img)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🖼 Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-red-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <img
              src={selectedImage.url}
              alt="Thesis Preview"
              className="w-full h-auto rounded-md"
            />
            <p className="mt-4 text-gray-800 dark:text-gray-200 text-lg">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
