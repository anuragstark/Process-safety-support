import { motion } from 'framer-motion';
import { 
  Map, LayoutGrid, Shield, Flame, AlertTriangle, CheckCircle, ArrowRight, 
  ClipboardList, Factory, Zap, Search, Layers, Target, Gauge, CircleDashed, 
  ShieldCheck, AlertOctagon, FileSearch, Route, FireExtinguisher, 
  HardHat, Settings, BookOpen, Users, ClipboardCheck, AlertCircle,
  ChevronDown, ChevronUp, GanttChart, FactoryIcon, Radar, ListChecks,
  ScrollText, FlameKindling, CircuitBoard, LandPlot, AlarmClock,
  Radiation, Warehouse, ArrowRightCircle, FileStack, FileBox
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
// import Layout from '@/components/Layout';

const Services = () => {
  const allServices = [
    // Section 1: Process Safety Management (PSM) Services
    {
      id: "psm-implementation",
      title: "PSM Implementation Support",
      description: "Establishing and embedding a comprehensive PSM framework to ensure adherence to safety protocols and risk management.",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "OSHA 14 elements compliance",
        "Regulatory Compliance Assurance",
        "Gap analysis and implementation",
        "Staff training and awareness"
      ],
      details: {
        purpose: [
          "Establish a structured safety framework for hazardous processes",
          "Ensure compliance with OSHA 1910.119 and other regulations",
          "Prevent catastrophic chemical releases",
          "Create a culture of continuous safety improvement"
        ],
        elements: [
          {
            title: "Regulatory Compliance",
            icon: ScrollText,
            items: [
              "Alignment with OSHA and local regulations",
              "Documentation management",
              "Policy development",
              "Compliance tracking"
            ]
          },
          {
            title: "Implementation Framework",
            icon: GanttChart,
            items: [
              "Assessment of existing systems",
              "Gap identification",
              "Implementation roadmap",
              "Training programs"
            ]
          },
          {
            title: "Audit Preparation",
            icon: ClipboardCheck,
            items: [
              "Documentation preparation",
              "Staff awareness programs",
              "Inquiry handling procedures",
              "Presentation materials"
            ]
          },
          {
            title: "Continuous Improvement",
            icon: CircuitBoard,
            items: [
              "Performance metrics",
              "Review cycles",
              "Update mechanisms",
              "Feedback integration"
            ]
          }
        ],
        deliverables: [
          "Complete PSM program documentation",
          "Compliance gap analysis report",
          "Implementation roadmap",
          "Training materials and records",
          "Audit preparation package"
        ]
      }
    },
    {
      id: "corporate-audit",
      title: "Corporate Audit Representation",
      description: "Professional representation during internal or external audits to ensure proper communication of safety systems.",
      icon: FileStack,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Auditor engagement management",
        "Regulatory alignment",
        "Quality improvement",
        "Findings response"
      ],
      details: {
        purpose: [
          "Ensure proper representation during audits",
          "Maintain regulatory compliance",
          "Improve audit outcomes",
          "Prevent miscommunication"
        ],
        elements: [
          {
            title: "Audit Management",
            icon: ClipboardList,
            items: [
              "Session coordination",
              "Communication management",
              "Document presentation",
              "Facilitation"
            ]
          },
          {
            title: "Regulatory Alignment",
            icon: ShieldCheck,
            items: [
              "Compliance verification",
              "Policy interpretation",
              "Standard alignment",
              "Best practices application"
            ]
          },
          {
            title: "Findings Response",
            icon: FileSearch,
            items: [
              "Initial response preparation",
              "Technical clarification",
              "Corrective action planning",
              "Follow-up coordination"
            ]
          },
          {
            title: "Quality Improvement",
            icon: CheckCircle,
            items: [
              "Process enhancement",
              "Documentation improvement",
              "Training recommendations",
              "Continuous improvement"
            ]
          }
        ],
        deliverables: [
          "Audit representation report",
          "Findings response package",
          "Corrective action plan",
          "Process improvement recommendations",
          "Regulatory compliance documentation"
        ]
      }
    },
    // Section 2: Insurance Risk Engineering & Loss Prevention
    {
      id: "insurance-risk",
      title: "Insurance Risk Engineering & Loss Prevention",
      description: "Comprehensive risk assessments and loss prevention strategies for industrial facilities.",
      icon: Shield,
      image: "https://plus.unsplash.com/premium_photo-1664300971344-5372b246f669?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Fire & property damage assessment",
        "Machinery breakdown evaluation",
        "Business interruption analysis",
        "PML & BI calculations"
      ],
      details: {
        purpose: [
          "Identify potential loss scenarios",
          "Quantify maximum probable losses",
          "Recommend risk improvement measures",
          "Support insurance underwriting"
        ],
        elements: [
          {
            title: "Property Assessment",
            icon: FactoryIcon,
            items: [
              "Fire protection systems evaluation",
              "Structural integrity review",
              "Material storage assessment",
              "Passive fire protection"
            ]
          },
          {
            title: "Equipment Evaluation",
            icon: Settings,
            items: [
              "Machinery condition assessment",
              "Maintenance program review",
              "Critical equipment analysis",
              "Redundancy evaluation"
            ]
          },
          {
            title: "Business Impact",
            icon: Gauge,
            items: [
              "Interruption scenario modeling",
              "Financial impact calculation",
              "Recovery time assessment",
              "Alternative operations planning"
            ]
          },
          {
            title: "Risk Quantification",
            icon: Target,
            items: [
              "Probable Maximum Loss (PML)",
              "Business Interruption (BI) values",
              "Catastrophic scenario modeling",
              "Risk mitigation ROI analysis"
            ]
          }
        ],
        deliverables: [
          "Risk engineering report",
          "PML/BI calculations",
          "Facility upgrade recommendations",
          "Underwriter's report",
          "Loss prevention strategies"
        ]
      }
    },
    // Section 3: Process Hazard Analysis
    {
      id: "hazop",
      title: "HAZOP Study",
      description: "Systematic identification of hazards and operability problems using guideword methodology.",
      icon: FileSearch,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Guideword methodology",
        "Multidisciplinary team approach",
        "Deviation analysis",
        "Risk reduction recommendations"
      ],
      details: {
        purpose: [
          "Identify deviations from design intent",
          "Evaluate causes and consequences",
          "Assess existing safeguards",
          "Recommend risk reduction measures"
        ],
        elements: [
          {
            title: "Study Preparation",
            icon: ClipboardList,
            items: [
              "Scope definition",
              "Team selection",
              "Documentation review",
              "Study plan development"
            ]
          },
          {
            title: "Hazard Identification",
            icon: AlertOctagon,
            items: [
              "Guideword application",
              "Deviation analysis",
              "Scenario development",
              "Consequence evaluation"
            ]
          },
          {
            title: "Risk Assessment",
            icon: AlertTriangle,
            items: [
              "Likelihood estimation",
              "Severity rating",
              "Safeguard effectiveness",
              "Risk ranking"
            ]
          },
          {
            title: "Recommendations",
            icon: ListChecks,
            items: [
              "Risk reduction measures",
              "Action prioritization",
              "Responsibility assignment",
              "Follow-up tracking"
            ]
          }
        ],
        deliverables: [
          "HAZOP worksheets",
          "Risk ranking report",
          "Recommendations list",
          "Action tracking system",
          "Final HAZOP report"
        ]
      }
    },
    // Section 4: Operational & Risk Visualization Studies
    {
      id: "simo-mopo",
      title: "SIMOPS & MOPO Study",
      description: "Evaluation and management of risks from simultaneous operations at industrial facilities.",
      icon: AlarmClock,
      image: "https://plus.unsplash.com/premium_photo-1661537558791-42f9f136da9b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Activity conflict identification",
        "Risk assessment matrix",
        "Safe work sequencing",
        "MOPO matrix development"
      ],
      details: {
        purpose: [
          "Identify conflicting operations",
          "Assess overlap risks",
          "Develop control measures",
          "Create safe work sequences"
        ],
        elements: [
          {
            title: "Operations Analysis",
            icon: GanttChart,
            items: [
              "Activity schedule review",
              "Space utilization assessment",
              "Resource allocation review",
              "Interface identification"
            ]
          },
          {
            title: "Risk Evaluation",
            icon: AlertTriangle,
            items: [
              "Hazard identification",
              "Impact assessment",
              "Probability analysis",
              "Risk categorization"
            ]
          },
          {
            title: "Control Measures",
            icon: ShieldCheck,
            items: [
              "Isolation requirements",
              "Communication protocols",
              "Safety barrier implementation",
              "Emergency procedures"
            ]
          },
          {
            title: "Matrix Development",
            icon: ListChecks,
            items: [
              "Permitted operations definition",
              "Restriction documentation",
              "Approval workflow",
              "Compliance monitoring"
            ]
          }
        ],
        deliverables: [
          "SIMOPS risk assessment",
          "MOPO matrix",
          "Control measures list",
          "Implementation plan",
          "Training materials"
        ]
      }
    },
    // Section 5: Facility Safety Design & Emergency Planning
    {
      id: "qra",
      title: "Quantitative Risk Assessment",
      description: "Data-driven risk quantification for fire, explosion and toxic release scenarios.",
      icon: Gauge,
      image: "https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      highlights: [
        "Probabilistic risk modeling",
        "Fire/explosion/toxic impact analysis",
        "Individual and societal risk calculation",
        "ALARP demonstration"
      ],
      details: {
        purpose: [
          "Quantify risk levels for personnel and public",
          "Support land use planning decisions",
          "Optimize safety measure investments",
          "Demonstrate risk reduction to ALARP level"
        ],
        elements: [
          {
            title: "Hazard Identification",
            icon: AlertOctagon,
            items: [
              "Release scenario development",
              "Material property analysis",
              "Process condition evaluation",
              "Ignition source identification"
            ]
          },
          {
            title: "Frequency Analysis",
            icon: CircleDashed,
            items: [
              "Equipment failure rate data",
              "Human error probability",
              "External event consideration",
              "Event tree modeling"
            ]
          },
          {
            title: "Consequence Modeling",
            icon: Flame,
            items: [
              "Dispersion analysis (gas/liquid)",
              "Fire radiation modeling",
              "Explosion overpressure calculation",
              "Toxic dose evaluation"
            ]
          },
          {
            title: "Risk Calculation",
            icon: Target,
            items: [
              "Individual risk contours",
              "Societal risk (F-N curves)",
              "Risk summation and presentation",
              "Sensitivity analysis"
            ]
          }
        ],
        deliverables: [
          "QRA methodology report",
          "Risk contour plots",
          "F-N curve diagrams",
          "Risk reduction recommendations",
          "ALARP justification report"
        ]
      }
    }
  ];

  const additionalServices = [
    // Remaining services from Section 1
    {
      question: "PSM Audit Actions Closeout Support",
      answer: "Assistance with addressing audit findings through corrective action planning, implementation tracking and verification of effectiveness to ensure compliance and continuous improvement."
    },
    {
      question: "PSM Auditing",
      answer: "Comprehensive evaluation of Process Safety Management system implementation against OSHA 1910.119 requirements and industry best practices, covering all 14 elements."
    },
    
    // Remaining services from Section 2
    {
      question: "Fire Property Damage Assessments",
      answer: "Evaluation of fire protection systems and property vulnerabilities to determine potential damage scenarios and recommend improvements."
    },
    {
      question: "Machinery Breakdown Evaluation",
      answer: "Assessment of critical equipment reliability and maintenance programs to prevent failures and minimize operational disruptions."
    },
    {
      question: "Business Interruption Impact Analysis",
      answer: "Analysis of potential operational disruptions and their financial impacts to inform risk management and insurance strategies."
    },
    
    // Remaining services from Section 3
    {
      question: "HAZID Study",
      answer: "Early-stage hazard identification study that systematically identifies potential safety, environmental and operational hazards during project conceptual or FEED phase."
    },
    {
      question: "FMEA",
      answer: "Failure Modes and Effects Analysis that examines potential failure modes within systems or equipment, their causes and effects, with risk prioritization."
    },
    {
      question: "LOPA & SIL Study",
      answer: "Layer of Protection Analysis and Safety Integrity Level determination to evaluate independent protection layers and specify required safety system reliability."
    },
    
    // Remaining services from Section 4
    {
      question: "Fire & Gas (F&G) Mapping Study",
      answer: "Detector placement optimization using 3D modeling to ensure adequate coverage and early detection of hazardous events in compliance with industry standards."
    },
    {
      question: "Bow Tie Analysis",
      answer: "Visual risk assessment method combining fault tree and event tree analysis to illustrate hazard causes, preventive/mitigative barriers, and potential consequences."
    },
    {
      question: "Hazardous Area Classification (HAC)",
      answer: "Classification of areas where explosive atmospheres may occur to guide proper equipment selection and installation per IEC/ATEX/NEC standards."
    },
    
    // Remaining services from Section 5
    {
      question: "Escape, Evacuation & Rescue Analysis (EERA)",
      answer: "Evaluation of emergency escape routes, evacuation procedures and rescue capabilities to ensure personnel safety during critical incidents."
    },
    {
      question: "Facility Siting & Layout Study",
      answer: "Assessment of building and equipment placement to minimize risk exposure, considering blast overpressure, toxic release and fire hazards."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Comprehensive Process Safety Services"
        description="Expert evaluations and analyses to optimize your operations while ensuring maximum safety and regulatory compliance"
        backgroundImageNew="https://new.abb.com/images/librariesprovider87/drives-global/drives-frontpage-segment-oilgas.jpg?sfvrsn=82109a0a_0"
      />

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process Safety Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive risk management solutions across all project phases - from conceptual design to operations and decommissioning. Our services help you comply with regulations while optimizing safety and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      {allServices.map((service, index) => (
        <section 
          key={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-white/90 mb-4 max-w-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((highlight, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-8">
                  {/* Purpose Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Service Purpose
                    </h3>
                    <ul className="space-y-3">
                      {service.details.purpose.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Elements */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Elements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.details.elements.map((element, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <element.icon className="h-5 w-5 text-primary" />
                              <CardTitle className="text-lg">{element.title}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              {element.items.map((item, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Deliverables Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
                <ClipboardList className="h-6 w-6 text-primary mr-2" />
                Service Deliverables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.details.deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Additional Services Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions covering all aspects of process safety and risk management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="multiple" className="space-y-4">
              {additionalServices.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary px-6 py-4">
                    {service.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-4">
                    {service.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Process Safety?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our experts are ready to help you assess risks, optimize safety systems, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary" asChild>
                <a href="/contact">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary" asChild>
                <a href="/case-studies">
                  View Case Studies
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;