import { motion } from 'framer-motion';
import { 
  Map, LayoutGrid, Shield, Flame, AlertTriangle, CheckCircle, ArrowRight, 
  ClipboardList, Factory, Zap, Search, Layers, Target, Gauge, CircleDashed, 
  ShieldCheck, AlertOctagon, FileSearch, Route, FireExtinguisher, 
  HardHat, Settings, BookOpen, Users, ClipboardCheck, AlertCircle,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

const Services = () => {
  const allServices = [
    {
      id: "facility-siting",
      title: "Facility Siting & Layout Studies",
      description: "Comprehensive safety and design evaluations to optimize industrial facility layouts while minimizing risks",
      icon: Map,
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "API RP 752/753 Compliance",
        "Quantitative Risk Assessment",
        "Hazard Impact Zone Mapping",
        "Emergency Response Integration"
      ],
      details: {
        purpose: [
          "Reduce risk to personnel and assets from fire, explosion, and toxic release",
          "Ensure compliance with safety regulations (OSHA, NFPA, API)",
          "Support efficient operations and emergency response",
          "Optimize space utilization and future expansion"
        ],
        elements: [
          {
            title: "Siting Analysis",
            icon: Map,
            items: [
              "Evaluation of nearby communities and environmental factors",
              "Assessment of natural hazards (flood zones, seismic activity)",
              "Impact zone analysis for explosions and toxic releases",
              "QRA-based safe distance definitions"
            ]
          },
          {
            title: "Layout Planning",
            icon: LayoutGrid,
            items: [
              "Optimal arrangement of process units and storage tanks",
              "Control room location analysis",
              "Utility systems placement",
              "Emergency facility positioning"
            ]
          },
          {
            title: "Hazard Impact Zones",
            icon: Flame,
            items: [
              "Thermal radiation mapping (fire scenarios)",
              "Overpressure analysis (explosion scenarios)",
              "Toxic gas dispersion modeling",
              "Critical building protection analysis"
            ]
          },
          {
            title: "Emergency Planning",
            icon: AlertTriangle,
            items: [
              "Escape route design",
              "Muster area placement",
              "Rescue access planning",
              "EERA (Escape, Evacuation, and Rescue Analysis)"
            ]
          }
        ],
        deliverables: [
          "2D/3D facility layout drawings with hazard zones",
          "Impact zone maps from QRA modeling",
          "Comprehensive risk assessment report",
          "Layout optimization recommendations",
          "Regulatory compliance documentation"
        ]
      }
    },
    {
      id: "psm-implementation",
      title: "PSM Implementation",
      description: "Process Safety Management framework implementation support",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "OSHA 14 elements compliance",
        "Hazard identification",
        "Management of Change",
        "Mechanical Integrity"
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
            title: "Employee Participation",
            icon: Users,
            items: [
              "Worker involvement in safety decisions",
              "Hazard reporting systems",
              "Safety committee formation",
              "Training and awareness programs"
            ]
          },
          {
            title: "Process Safety Information",
            icon: BookOpen,
            items: [
              "Chemical hazard documentation",
              "Equipment design specifications",
              "Process technology documentation",
              "Safety system documentation"
            ]
          },
          {
            title: "Process Hazard Analysis",
            icon: FileSearch,
            items: [
              "HAZOP, What-If, FMEA methodologies",
              "Risk assessment and prioritization",
              "Safeguard evaluation",
              "Action item tracking"
            ]
          },
          {
            title: "Management of Change",
            icon: Settings,
            items: [
              "Change classification system",
              "Impact assessment procedures",
              "Authorization workflows",
              "Documentation and communication"
            ]
          }
        ],
        deliverables: [
          "Complete PSM program documentation",
          "Compliance gap analysis report",
          "Training materials and records",
          "Audit and inspection checklists",
          "Continuous improvement framework"
        ]
      }
    },
    {
      id: "insurance-risk",
      title: "Insurance Risk Engineering",
      description: "Risk assessment and loss prevention strategies for insurance underwriting",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1623668192062-a4053bb17064?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Property damage assessment",
        "Machinery breakdown evaluation",
        "Business interruption analysis",
        "Underwriting support"
      ],
      details: {
        purpose: [
          "Identify potential loss scenarios in industrial facilities",
          "Quantify maximum probable losses",
          "Recommend risk improvement measures",
          "Support insurance underwriting decisions"
        ],
        elements: [
          {
            title: "Fire Protection",
            icon: FireExtinguisher,
            items: [
              "Firewater system adequacy",
              "Detection and suppression systems",
              "Passive fire protection",
              "Emergency response capability"
            ]
          },
          {
            title: "Equipment Integrity",
            icon: Factory,
            items: [
              "Inspection and maintenance programs",
              "Corrosion management",
              "Pressure system integrity",
              "Critical equipment redundancy"
            ]
          },
          {
            title: "Process Safety",
            icon: ShieldCheck,
            items: [
              "Hazardous area classification",
              "Process control systems",
              "Emergency shutdown systems",
              "Safety instrumented systems"
            ]
          },
          {
            title: "Business Continuity",
            icon: Zap,
            items: [
              "Redundancy analysis",
              "Alternate supply chains",
              "Recovery time objectives",
              "Impact mitigation strategies"
            ]
          }
        ],
        deliverables: [
          "Risk engineering report",
          "Probable Maximum Loss (PML) calculation",
          "Business Interruption (BI) analysis",
          "Risk improvement recommendations",
          "Underwriting support documentation"
        ]
      }
    },
    {
      id: "hazop",
      title: "HAZOP Study",
      description: "Structured technique for identifying hazards and operability problems in process systems",
      icon: FileSearch,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Systematic guide word approach",
        "Multidisciplinary team participation",
        "Qualitative hazard identification",
        "Comprehensive documentation"
      ],
      details: {
        purpose: [
          "Identify deviations from design intent",
          "Evaluate causes and consequences of deviations",
          "Recommend safeguards and corrective actions",
          "Improve process safety and reliability"
        ],
        elements: [
          {
            title: "Study Preparation",
            icon: ClipboardList,
            items: [
              "Define scope and objectives",
              "Select team members",
              "Prepare documentation (P&IDs, PFDs)",
              "Develop study plan"
            ]
          },
          {
            title: "Guideword Application",
            icon: Search,
            items: [
              "No/None (absence of flow)",
              "More (increased flow, pressure)",
              "Less (decreased flow, pressure)",
              "Reverse (flow direction change)"
            ]
          },
          {
            title: "Risk Assessment",
            icon: AlertTriangle,
            items: [
              "Likelihood estimation",
              "Consequence severity rating",
              "Existing safeguard evaluation",
              "Risk ranking and prioritization"
            ]
          },
          {
            title: "Action Tracking",
            icon: ClipboardCheck,
            items: [
              "Recommendation development",
              "Assignment of responsibilities",
              "Follow-up verification",
              "Documentation and reporting"
            ]
          }
        ],
        deliverables: [
          "HAZOP worksheets with identified deviations",
          "Risk ranking of identified hazards",
          "Recommendations for risk reduction",
          "Action items with assigned responsibilities",
          "Final HAZOP report"
        ]
      }
    },
    {
      id: "lopa-sil",
      title: "LOPA & SIL Assessment",
      description: "Layer of Protection Analysis and Safety Integrity Level determination",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      highlights: [
        "Semi-quantitative risk assessment",
        "Independent Protection Layer evaluation",
        "SIL determination and verification",
        "Safety Instrumented Function analysis"
      ],
      details: {
        purpose: [
          "Determine adequacy of existing safeguards",
          "Identify required risk reduction for hazardous scenarios",
          "Specify Safety Integrity Levels (SIL) for safety functions",
          "Ensure compliance with IEC 61511/ISA 84 standards"
        ],
        elements: [
          {
            title: "Scenario Development",
            icon: FileSearch,
            items: [
              "Identify initiating events",
              "Define consequence severity",
              "Establish risk tolerance criteria",
              "Document scenario parameters"
            ]
          },
          {
            title: "LOPA Evaluation",
            icon: Layers,
            items: [
              "Identify independent protection layers (IPLs)",
              "Calculate risk reduction factors",
              "Determine gap between existing and required protection",
              "Evaluate human factors in protection layers"
            ]
          },
          {
            title: "SIL Determination",
            icon: ShieldCheck,
            items: [
              "Assign SIL requirements (1-4)",
              "Verify safety function requirements",
              "Evaluate architectural constraints",
              "Document safety requirements specifications"
            ]
          },
          {
            title: "Verification",
            icon: CheckCircle,
            items: [
              "SIL verification calculations",
              "Fault tree analysis",
              "Proof test interval determination",
              "Maintenance procedure review"
            ]
          }
        ],
        deliverables: [
          "LOPA worksheets",
          "SIL determination report",
          "Safety requirement specifications",
          "Verification calculations",
          "Testing and maintenance procedures"
        ]
      }
    },
    {
      id: "qra",
      title: "Quantitative Risk Assessment",
      description: "Data-driven risk quantification for fire, explosion and toxic release scenarios",
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
    {
      question: "HAZID Study",
      answer: "Early-stage hazard identification study that systematically identifies potential safety, environmental and operational hazards during project conceptual or FEED phase to inform design decisions and risk management planning."
    },
    {
      question: "FMEA",
      answer: "Failure Modes and Effects Analysis that examines potential failure modes within systems or equipment, their causes and effects, with risk prioritization based on severity, occurrence and detection ratings."
    },
    {
      question: "SIMOPS & MOPO",
      answer: "Simultaneous Operations planning and Matrix of Permitted Operations development to manage risks when multiple hazardous activities occur concurrently at a facility."
    },
    {
      question: "F&G Mapping",
      answer: "Fire and Gas detector placement optimization study using 3D modeling to ensure adequate coverage and early detection of hazardous events in compliance with ISA TR84.00.07."
    },
    {
      question: "Bow Tie Analysis",
      answer: "Visual risk assessment method combining fault tree and event tree analysis to illustrate hazard causes, preventive/mitigative barriers, and potential consequences for improved risk communication."
    },
    {
      question: "Hazardous Area Classification",
      answer: "Classification of areas where explosive atmospheres may occur to guide proper equipment selection and installation per IEC/ATEX/NEC standards."
    },
    {
      question: "EERA",
      answer: "Escape, Evacuation and Rescue Analysis to evaluate and optimize emergency response provisions including escape routes, muster points and rescue capabilities."
    },
    {
      question: "PSM Auditing",
      answer: "Comprehensive evaluation of Process Safety Management system implementation against OSHA 1910.119 requirements and industry best practices."
    },
    {
      question: "Corporate Audit Representation",
      answer: "Expert representation during regulatory or internal safety audits to ensure proper communication of safety systems and compliance status."
    },
    {
      question: "PSM Audit Closeout Support",
      answer: "Assistance with addressing audit findings through corrective action planning, implementation tracking and verification of effectiveness."
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
              Our Process Safety Expertise
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
                      Study Purpose
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
                Study Deliverables
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
              Complementary Services
            </h2>
            <p className="text-xl text-gray-600">
              Integrated solutions to address all your process safety needs
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