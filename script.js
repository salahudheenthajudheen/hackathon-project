const { createApp } = Vue;

createApp({
  computed: {
    correctAnswers() {
      let counter = 0;
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].correctChoice == this.answers[i]) {
          counter++;
        }
      }
      return counter;
    },
  },
  data() {
    return {
      questions: [
        {
          question:
            "What is the primary purpose of a patent?",
          answers: {
            A: "To protect a novel and useful invention",
            B: "To promote free sharing of ideas",
            C: "To encourage copyright infringement",
            D: "To restrict access to knowledge",
          },
          correctChoice: "A"
        },
        {
          question:
            "How long does patent protection typically last in most countries?",
          answers: {
            A: "10 years",
            B: "20 years",
            C: "50 years",
            D: "Lifetime of the inventor",
          },
          correctChoice: "B"
        },
         {
      question: "What is the key requirement for an invention to be eligible for a patent?",
      answers: {
        "A": "It must be publicly disclosed",
        "B": "It must be an abstract idea",
        "C": "It must be kept as a trade secret",
        "D": "It must be novel, non-obvious, and useful"
      },
      correctChoice: "D"
    },
    {
      question: "Which type of patent protects the ornamental design of a functional item?",
      answers: {
        "A": "Utility patent",
        "B": "Design patent",
        "C": "Plant patent",
        "D": "Process patent"
      },
      correctChoice: "B"
    },
    {
      question: "What international organization helps inventors protect their patents worldwide?",
      answers: {
        "A": "WIPO (World Intellectual Property Organization)",
        "B": "WTO (World Trade Organization)",
        "C": "WHO (World Health Organization)",
        "D": "UNESCO"
      },
      correctChoice: "A"
    },
    {
      question: "What does a trademark primarily protect?",
      answers: {
        "A": "Inventions",
        "B": "Brands, logos, and names",
        "C": "Creative works",
        "D": "Plant varieties"
      },
      correctChoice: "B"
    },
    {
      question: "What symbol is commonly used to indicate a registered trademark?",
      answers: {
        "A": "©",
        "B": "®",
        "C": "™",
        "D": "Pat."
      },
      correctChoice: "B"
    },
    {
      question: "What is the term for a legal action to stop trademark infringement?",
      answers: {
        "A": "Cease and desist order",
        "B": "Public domain declaration",
        "C": "Fair use exception",
        "D": "Licensing agreement",
      },
      correctChoice: "A"
    },
    {
      question: "Which international agreement addresses the protection of intellectual property, including trademarks?",
      answers: {
        "A": "TRIPS Agreement",
        "B": "Paris Convention",
        "C": "WIPO Copyright Treaty",
        "D": "GATT",
      },
      correctChoice: "A"
    },
    {
      question: "What is the main purpose of a copyright?",
      answers: {
        "A": "To protect a brand name",
        "B": "To safeguard an invention",
        "C": "To protect original creative works",
        "D": "To secure a domain name",
      },
      correctChoice: "C"
    },
    {
      question: "In copyright law, what is the 'public domain'?",
      answers: {
        "A": "A website for sharing creative works",
        "B": "Works with limited public access",
        "C": "Works no longer under copyright protection",
        "D": "A library for copyrighted works",
      },
      correctChoice: "C"
    },
    {
      question: "What is 'fair use' in the context of copyright law?",
      answers: {
        "A": "Any use of copyrighted material without restrictions",
        "B": "Limited use of copyrighted material without infringement",
        "C": "Use of copyrighted material for profit without permission",
        "D": "Exclusivity to use copyrighted material for educational purposes"
      },
      correctChoice: "B"
    },
    {
      question: "Which international organization administers copyright treaties and conventions?",
      answers: {
        "A": "WTO (World Trade Organization)",
        "B": "WIPO (World Intellectual Property Organization)",
        "C": "WHO (World Health Organization)",
        "D": "UNESCO"
      },
      correctChoice: "B"
    },
    {
      question: "What is the maximum duration of copyright protection for an original work in the United States?",
      answers: {
        "A": "10 years",
        "B": "20 years",
        "C": "70 years after the author's death",
        "D": "Unlimited duration"
      },
      correctChoice: "C"
    },
    {
      question: "Which type of design protection focuses on the visual appearance of a product, such as its shape and ornamentation?",
      answers: {
        "A": "Patent protection",
        "B": "Trademark protection",
        "C": "Design patent protection",
        "D": "Copyright protection"
      },
      correctChoice: "C"
    },
    {
      question: "What is the purpose of design protection?",
      answers: {
        "A": "To prevent others from using the protected design",
        "B": "To promote competition and innovation",
        "C": "To keep designs in the public domain",
        "D": "To restrict access to designs"
      },
      correctChoice: "A"
    },
    {
      question: "Which international treaty provides for the protection of industrial designs?",
      answers: {
        "A": "Paris Convention",
        "B": "Berne Convention",
        "C": "TRIPS Agreement",
        "D": "Madrid Protocol"
      },
      correctChoice: "A"
    }

        
      ],
     answers: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    currentQuestionIndex: 0
  };
}
}).mount("#app");