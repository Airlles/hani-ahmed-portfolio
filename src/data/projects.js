export const projects = [
  {
    title: "Mini EDA Tool",
    category: "EDA Automation",
    status: "Active Flagship",
    description:
      "Python based mini EDA tool that parses gate level circuit descriptions, builds an internal netlist representation, generates synthesizable Verilog, simulates truth tables, and reports simplified critical path timing.",
    flow: ".logic → parser → netlist → Verilog → truth table → timing report",
    stack: ["Python", "Verilog", "Parsing", "Netlists", "Timing"],
    tags: ["RTL", "EDA Automation", "ASIC Debug"],
    github: "",
    accent: "cyan",
    problem:
      "Modern RTL and EDA workflows depend on structured input files, netlist representations, generated HDL, and timing/debug reports. This project recreates a simplified educational version of that flow from scratch.",
    built:
      "Built a Python parser for custom .logic files, created an internal gate-level circuit representation, generated synthesizable Verilog, simulated truth tables, and added simplified critical path timing analysis.",
    impact:
      "Demonstrates EDA/CAD automation thinking, RTL generation, parsing, verification mindset, and timing debug fundamentals for ASIC-style workflows.",
    nextSteps:
      "Add Verilog testbench generation, sequential logic support, combinational loop detection, richer timing reports, and SPICE-like CMOS netlist export.",
  },
  {
    title: "RISC-V 5-Stage Pipelined CPU",
    category: "RTL Design",
    status: "Active / Completed Core",
    description:
      "32-bit RISC-V CPU project focused on instruction fetch, decode, execute, memory, and writeback stages, with RTL modules for the program counter, register file, ALU, control logic, immediate generation, and pipeline behavior.",
    flow: "instruction → IF → ID → EX → MEM → WB → register update",
    stack: ["Verilog", "RISC-V", "RTL", "Pipelining", "Waveform Debug"],
    tags: ["RTL", "Computer Architecture", "ASIC Debug"],
    github: "",
    accent: "cyan",
    problem:
      "CPU design requires understanding how instructions move through datapath, control, memory, and register update stages while managing timing and pipeline behavior.",
    built:
      "Designed RTL modules for a 32-bit RISC-V pipeline including program counter, instruction path, register file, ALU, control logic, immediate generation, and pipeline stage behavior.",
    impact:
      "Shows digital design fundamentals, computer architecture knowledge, waveform-based RTL debug, and the ability to reason through datapath and control logic.",
    nextSteps:
      "Expand hazard detection, forwarding, branch handling, verification testbenches, waveform documentation, and FPGA-oriented validation.",
  },
  {
    title: "Agentic EDA Log Debug Assistant",
    category: "AI for EDA Debug",
    status: "Active",
    description:
      "Agentic debug assistant that classifies RTL and EDA tool logs, extracts key error and warning lines, retrieves relevant debug context, and generates structured debug reports.",
    flow: "EDA log → classifier → RAG context → debug report",
    stack: ["Python", "RAG", "MCP", "EDA Logs", "Automation"],
    tags: ["EDA Automation", "AI/ML", "ASIC Debug"],
    github: "",
    accent: "violet",
    problem:
      "EDA tool logs can be long, noisy, and difficult to triage quickly. Engineers need to identify the first real error, classify the issue, and decide the next debug step.",
    built:
      "Built a Python-based assistant that classifies common RTL and EDA issues such as width mismatches, missing modules, timing violations, syntax errors, and unconnected nets, then generates structured Markdown debug reports.",
    impact:
      "Connects AI workflows with realistic silicon debug tasks, showing practical use of automation, log parsing, retrieval, and hardware-aware debugging.",
    nextSteps:
      "Integrate real log file upload, add more issue classes, connect function calls to parsing tools, and build CI-style automated EDA log checks.",
  },
  {
    title: "CMOS D Flip Flop Layout",
    category: "Physical Design",
    status: "Completed",
    description:
      "Full custom CMOS D flip flop design using schematic capture, transistor level layout, Sky130 PDK concepts, DRC, and LVS verification.",
    flow: "schematic → layout → DRC → LVS → verified cell",
    stack: ["Xschem", "Magic", "Sky130", "LVS", "CMOS"],
    tags: ["Physical Design", "ASIC Debug"],
    github: "",
    accent: "blue",
    problem:
      "A digital standard cell must not only match its schematic behavior but also obey physical design rules and pass layout-versus-schematic verification.",
    built:
      "Created a CMOS D flip flop schematic and layout using open-source VLSI tools, applied Sky130 physical design concepts, and verified the layout through DRC and LVS checks.",
    impact:
      "Demonstrates transistor-level CMOS understanding, layout discipline, physical verification awareness, and the bridge between schematic design and manufacturable silicon.",
    nextSteps:
      "Add annotated layout screenshots, waveform validation, parasitic discussion, and a short writeup explaining DRC/LVS debug decisions.",
  },
  {
    title: "PCIe/UCIe SerDes Link Simulator",
    category: "High Speed Interfaces",
    status: "Active",
    description:
      "Python simulation project exploring high speed serial link behavior, simplified channel effects, TX/RX signal flow, and interface validation concepts.",
    flow: "TX data → channel model → RX recovery → signal analysis",
    stack: ["Python", "NumPy", "Matplotlib", "PCIe", "UCIe", "SerDes"],
    tags: ["SerDes", "ASIC Debug"],
    github: "",
    accent: "cyan",
    problem:
      "High-speed links depend on signal integrity, channel behavior, timing margin, and TX/RX validation. A simplified simulator helps build intuition before using real lab equipment or commercial tools.",
    built:
      "Built a Python simulation framework for exploring serial data flow, simplified channel effects, receiver behavior, and signal analysis concepts related to PCIe, UCIe, and SerDes links.",
    impact:
      "Shows interest in silicon validation, high-speed interfaces, system-level debug, and Python-based modeling for hardware behavior.",
    nextSteps:
      "Add eye diagram visualization, jitter/noise modeling, equalization concepts, BER-style checks, and cleaner plots for portfolio screenshots.",
  },
  {
    title: "EDA/RTL/ASIC Intent Classifier Chatbot",
    category: "ML for Hardware",
    status: "Active",
    description:
      "Domain specific PyTorch and NLTK chatbot that classifies messages into RTL, EDA, ASIC, timing, synthesis, CDC, FIFO, DRC, and LVS debug intents.",
    flow: "message → tokens → bag of words → PyTorch classifier → intent",
    stack: ["Python", "PyTorch", "NLTK", "NumPy", "Classification"],
    tags: ["EDA Automation", "AI/ML", "ASIC Debug"],
    github: "",
    accent: "violet",
    problem:
      "Generic chatbots do not understand hardware-specific debug categories. This project adapts a small ML classifier toward RTL, EDA, ASIC, and physical design terminology.",
    built:
      "Built a PyTorch feedforward neural network with NLTK preprocessing, tokenization, lemmatization, bag-of-words encoding, intent training, model saving/loading, and domain-specific intents for silicon debug topics.",
    impact:
      "Demonstrates applied ML fundamentals while keeping the use case aligned with RTL, ASIC, EDA automation, and hardware debug workflows.",
    nextSteps:
      "Connect predicted intents to real debug functions, add more training examples, improve confidence thresholds, and integrate with the Agentic EDA Log Debug Assistant.",
  },
  {
    title: "6502 CPU Emulator",
    category: "Computer Architecture",
    status: "Active",
    description:
      "C++ emulator project focused on instruction decoding, addressing modes, CPU state, stack behavior, and low level computer architecture.",
    flow: "opcode → decode → execute → update CPU state",
    stack: ["C++", "CPU Architecture", "Emulation", "Instruction Decode"],
    tags: ["Computer Architecture"],
    github: "",
    accent: "blue",
    problem:
      "Understanding a processor deeply requires more than knowing instruction names. An emulator forces cycle-by-cycle reasoning about state, memory, registers, addressing modes, and instruction behavior.",
    built:
      "Built a C++ emulator structure for the 6502 CPU, focusing on opcode decode, register state, memory interactions, stack behavior, and low-level execution flow.",
    impact:
      "Shows low-level systems thinking, computer architecture fundamentals, C++ implementation ability, and comfort reasoning close to hardware/software boundaries.",
    nextSteps:
      "Expand instruction coverage, add automated tests, improve cycle accuracy, add debug traces, and document instruction execution examples.",
  },
]