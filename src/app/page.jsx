"use client";

import React, { useState } from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeTag, setActiveTag] = useState("all");
  const [pubTag, setPubTag] = useState("all");
  const [expandedPosters, setExpandedPosters] = useState({});
  const projects = [
    {
      title: "Biophysically Detailed Model of Rat Hippocampus CA1 Region",
      description: "Analysis framework for detailed neuron models",
      tags: ["Python", "Neuroscience","High Performance Computing","Graph Theory"],
      image:
        "https://ucarecdn.com/c98fb837-ec9c-4c58-bace-fe820b3e7b62/-/format/auto/",
    },
    {
      title: "Neo4j-3D-VR",
      description: "A 3D force graph visualization in VR using WebXR and Neo4j",
      tags: ["Neo4J", "HTML", "VR"],
      image:
      "https://raw.githubusercontent.com/BlueBrain/citation-graph/main/images/force_3d_graph.png",
    },
    {
      title: "Neuroagent",
      description: "Explore, Simulate and Analyze Neuron Models using AI Agents",
      tags: ["Python", "LLM", "Agents", "RAG", "Neuroscience"],
      image:
        "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/neuroagent.jpeg", // Updated image URL
    },
  ];
  const publications = [
    {
      title:
        "Characterizing subtypes of projecting axons in mice using topological data analysis and machine learning",
      authors: "Kurban K., Kanari L.",
      year: "2024",
      type: "Poster",
      venue: "Society for Neuroscience, San Diego, CA, USA",
      tags: ["machine-learning", "neuroscience"],
      image:
        "https://ucarecdn.com/723e5f11-4cc6-4e30-9092-1ecabccc1487/-/format/auto/",
    },
    {
      title:
        "A connectome manipulation framework for the systematic and reproducible study of structure–function relationships through simulations",
      authors:
        "Pokorny, C., Awile, O., Isbister, J. B., Kurban, K., Wolf, M., & Reimann, M. W.",
      year: "2024",
      type: "Journal",
      venue: "bioRxiv",
      doi: "10.1101/2024.05.24.593860",
      tags: ["simulation", "neuroscience"],
    },
    {
      title: "A deep dive into CA1 network: Insights from Network Science",
      authors: "Kurban K, Romani A., Markram H.",
      year: "2023",
      type: "Poster",
      venue: "32th Computational Neuroscience Society",
      tags: ["network-science", "neuroscience"],
      image:
        "https://ucarecdn.com/c35e14c6-6d31-44e6-aca7-7e615c0ecb2a/-/format/auto/",
    },
    {
      title:
        "Community-based Reconstruction and Simulation of a Full-scale Model of Region CA1 of Rat Hippocampus",
      authors: "Romani, A., et al.",
      year: "2023",
      type: "Preprint",
      venue: "Cold Spring Harbor Laboratory",
      doi: "10.1101/2023.05.17.541167",
      tags: ["simulation", "neuroscience"],
    },
    {
      title:
        "Resting-state network dysconnectivity in ADHD: A system-neuroscience-based meta-analysis",
      authors:
        "Sutcubasi B, Metin B, Kurban MK, Metin ZE, Beser B, Sonuga-Barke E",
      year: "2020",
      type: "Journal",
      venue: "World J Biol Psychiatry",
      doi: "10.1080/15622975.2020.1775889",
      tags: ["meta-analysis", "neuroscience"],
    },
  ];
  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));
  const filteredPubs =
    pubTag === "all"
      ? publications
      : publications.filter((p) => p.tags.includes(pubTag));
  const pubTags = ["all", ...new Set(publications.flatMap((p) => p.tags))];
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://raw.githubusercontent.com/KeremKurban/portfolio/17bf5168e27ac5cf80baff26090d4ca00ac164c4/resumes/CV_11_2024.pdf";
    link.setAttribute("download", "Kerem_Kurban_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadPublications = () => {
    const link = document.createElement("a");
    link.href =
      "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/Publications_10_2024.pdf";
    link.setAttribute("download", "Publications_10_2024.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-roboto">
      <nav className="fixed w-full bg-[#121212] p-4 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">
            Machine Learning Engineer | MLOps & LLM Specialist
          </h1>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection("about")}
              className={`${activeSection === "about" ? "text-[#64ffda]" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection("projects")}
              className={`${
                activeSection === "projects" ? "text-[#64ffda]" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection("publications")}
              className={`${
                activeSection === "publications" ? "text-[#64ffda]" : ""
              }`}
            >
              Publications
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className={`${
                activeSection === "contact" ? "text-[#64ffda]" : ""
              }`}
            >
              Contact
            </button>
            <button
              onClick={handleDownloadCV}
              className="bg-[#64ffda] text-[#112240] px-4 py-1 rounded hover:bg-[#4fd1b5]"
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-32 px-4">
        <section
          className={`${activeSection === "about" ? "block" : "hidden"}`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Hi, I'm Kerem</h2>
              <p className="text-[#8892b0] mb-4">
                Machine Learning Engineer at EPFL Blue Brain Project,
                specializing in MLOps and LLM development. I bridge the gap
                between artificial intelligence and neuroscience.
              </p>
              <div className="flex flex-wrap gap-3 my-6">
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  Multi-Agentic LLMs
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  Neo4j
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  GraphRAG
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  MLOps
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://ucarecdn.com/fb725b0a-aac9-4b8e-bece-1366d27e6df1/-/format/auto/"
                alt="Profile photo of Kerem Kurban"
                className="w-[300px] h-[300px] rounded-full object-cover"
              />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-8">
              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Machine Learning Engineer
                    </h3>
                    <p className="text-[#64ffda]">EPFL Blue Brain Project</p>
                  </div>
                  <span className="text-[#8892b0]">04/2024 - Present</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Led projects on semantic analysis of databases using Neo4j
                    and Python
                  </li>
                  <li>
                    Maintained and productionized AI software projects including
                    LLM agents and GraphRAG
                  </li>
                  <li>
                    Productionized AI chatbots with GraphRAG for unstructured
                    data and graph databases
                  </li>
                  <li>Deployed AI software suite on Kubernetes and AWS</li>
                  <li>
                    Developed front-end applications for chat interfaces using
                    React
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Scientific Software Developer
                    </h3>
                    <p className="text-[#64ffda]">EPFL Blue Brain Project</p>
                  </div>
                  <span className="text-[#8892b0]">04/2021 - 04/2024</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Lead projects on building and analyzing large-scale brain
                    region models
                  </li>
                  <li>
                    Published research papers on Spiking Neural Networks and
                    Graph Theory
                  </li>
                  <li>
                    Maintained and productionized software using CI/CD pipelines
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Student Ambassador in AI
                    </h3>
                    <p className="text-[#64ffda]">Intel Nervana</p>
                  </div>
                  <span className="text-[#8892b0]">2018</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Designed machine learning models for analyzing fMRI data
                  </li>
                  <li>
                    Showcased neuroscience research on Intel's AI platform
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Software Engineer Intern
                    </h3>
                    <p className="text-[#64ffda]">Neurolize</p>
                  </div>
                  <span className="text-[#8892b0]">06/2016 - 09/2016</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Performed marketing research using EEG and eye tracking
                  </li>
                  <li>
                    Analyzed online shopping interactions using classification
                    techniques
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Neo4j Certified Professional
                </h3>
                <p className="text-[#8892b0]">Neo4j GraphAcademy</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">LLMOps</h3>
                <p className="text-[#8892b0]">Deeplearning.ai</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  AI Agents in LangGraph
                </h3>
                <p className="text-[#8892b0]">Deeplearning.ai</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${
            activeSection === "certifications" ? "block" : "hidden"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                AWS Machine Learning Specialty
              </h3>
              <p className="text-[#8892b0]">Amazon Web Services</p>
              <p className="text-[#64ffda] mt-2">2023</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Neo4j Certified Professional
              </h3>
              <p className="text-[#8892b0]">Neo4j GraphAcademy</p>
              <p className="text-[#64ffda] mt-2">2023</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Deep Learning Specialization
              </h3>
              <p className="text-[#8892b0]">Coursera</p>
              <p className="text-[#64ffda] mt-2">2022</p>
            </div>
          </div>
        </section>

        <section
          className={`${activeSection === "projects" ? "block" : "hidden"}`}
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTag("all")}
              className={`px-4 py-2 rounded ${
                activeTag === "all"
                  ? "bg-[#64ffda] text-[#112240]"
                  : "bg-[#112240]"
              }`}
            >
              All
            </button>
            {["neo4j", "llm", "agentic workflow", "RAG"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded ${
                  activeTag === tag
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-[#112240] p-8 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-[#8892b0] mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          className={`${activeSection === "publications" ? "block" : "hidden"}`}
        >
          <h2 className="text-3xl font-bold mb-8">Publications</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={handleDownloadPublications}
              className="bg-[#64ffda] text-[#112240] px-4 py-2 rounded hover:bg-[#4fd1b5]"
            >
              Download All Publications
            </button>
            {pubTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setPubTag(tag)}
                className={`px-4 py-2 rounded ${
                  pubTag === tag
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240]"
                }`}
              >
                {tag === "all" ? "All" : tag}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {filteredPubs.map((pub, index) => (
              <div key={index} className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                <p className="text-[#8892b0] mb-2">{pub.authors}</p>
                <p className="text-[#8892b0] mb-4">
                  {pub.type} - {pub.venue}, {pub.year}
                </p>
                {pub.image && (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedPosters((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="bg-[#64ffda] text-[#112240] px-4 py-2 rounded mb-4 hover:bg-[#4fd1b5]"
                    >
                      {expandedPosters[index] ? "Hide Poster" : "See Poster"}
                    </button>
                    {expandedPosters[index] && (
                      <img
                        src={pub.image}
                        alt={`Poster for ${pub.title}`}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                    )}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:underline"
                  >
                    Read Paper
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section
          className={`${activeSection === "contact" ? "block" : "hidden"}`}
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="bg-[#112240] p-8 rounded-lg max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-envelope text-[#64ffda]"></i>
                    <a
                      href="mailto:keremkurban@hotmail.com"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      keremkurban@hotmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-map-marker-alt text-[#64ffda]"></i>
                    <span className="text-[#8892b0]">Geneve, Switzerland</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Social Links</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fab fa-github text-[#64ffda]"></i>
                    <a
                      href="https://github.com/KeremKurban"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fab fa-linkedin text-[#64ffda]"></i>
                    <a
                      href="https://linkedin.com/in/kerem-kurban-5a40a1117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainComponent;