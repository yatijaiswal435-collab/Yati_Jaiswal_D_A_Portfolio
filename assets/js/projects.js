const projects = [
  {
    title: "HR Attrition Analytics",
    category: "Power BI",
    type: "BUSINESS INTELLIGENCE",
    description: "Interactive HR analysis focused on employee attrition, workforce patterns, departments, roles, demographics and compensation.",
    tools: ["Power BI", "DAX", "Excel", "Data Cleaning"],
    problem: "Understand where attrition is concentrated and identify workforce patterns that deserve management attention.",
    process: ["Cleaned and structured HR data", "Created KPI measures", "Analyzed attrition across departments, roles and employee characteristics", "Built an interactive Power BI dashboard"],
    insights: ["Attrition can be compared across organizational segments.", "Role, department and demographic breakdowns help reveal concentration patterns.", "Interactive filtering makes it easier to move from overall KPIs to specific workforce segments."],
    outcome: "A decision-oriented dashboard that turns HR data into an accessible view of workforce attrition."
  },
  {
    title: "Food Delivery Profitability Analysis",
    category: "SQL",
    type: "BUSINESS ANALYSIS",
    description: "SQL-based analysis of revenue, profit, delivery costs, restaurants, customers and orders to understand profitability drivers.",
    tools: ["SQL", "MySQL", "Data Analysis"],
    problem: "Determine how revenue and operational costs interact and which customer, restaurant and order patterns influence profitability.",
    process: ["Explored relational tables", "Used SQL filtering, aggregation and joins", "Compared revenue with delivery and operational costs", "Translated results into business recommendations"],
    insights: ["Revenue alone does not represent profitability.", "Delivery costs need to be evaluated alongside order economics.", "Customer and restaurant behavior can be segmented to support targeted decisions."],
    outcome: "A practical SQL case study demonstrating how transactional data can answer profitability questions."
  },
  {
    title: "Daikibo Telemetry Analysis",
    category: "Tableau",
    type: "DATA VISUALIZATION",
    description: "Tableau analysis of factory telemetry to explore machine downtime, factory performance and device failure patterns.",
    tools: ["Tableau", "Data Visualization", "Dashboarding"],
    problem: "Use operational telemetry to understand where downtime and machine issues are occurring.",
    process: ["Explored telemetry records", "Compared factory and device-level performance", "Visualized downtime and failure patterns", "Designed an interactive Tableau view"],
    insights: ["Operational performance can vary by factory and device.", "Downtime patterns help prioritize investigation.", "Visual drill-down supports faster identification of problem areas."],
    outcome: "A Tableau storytelling project focused on converting operational data into clear visual evidence."
  },
  {
    title: "Excel Sales Analysis",
    category: "Excel",
    type: "REPORTING & ANALYTICS",
    description: "Sales analysis using spreadsheet-based data cleaning, lookup functions, pivot tables, KPIs and dashboard-style reporting.",
    tools: ["Excel", "Pivot Tables", "XLOOKUP", "Data Cleaning"],
    problem: "Create a structured view of sales performance that can be explored quickly by business stakeholders.",
    process: ["Cleaned and organized raw records", "Used lookup functions to enrich data", "Built pivot-based analysis", "Summarized performance through dashboard elements"],
    insights: ["Pivot-based analysis makes large sales tables easier to explore.", "Consistent KPI definitions improve reporting.", "A structured workbook can support recurring business reporting."],
    outcome: "An Excel reporting workflow demonstrating practical spreadsheet analytics."
  },
  {
    title: "2025 Job Market Analysis",
    category: "Python",
    type: "LABOUR MARKET ANALYTICS",
    description: "Analysis of the 2025 job market to understand demand, roles, skills and patterns relevant to data and analytics careers.",
    tools: ["Python", "Pandas", "Data Visualization", "Business Analysis"],
    problem: "Identify patterns in the 2025 job market and understand which skills and roles are most relevant for analytics-focused careers.",
    process: ["Explored job-market records", "Cleaned and analyzed structured job data", "Compared roles and skill requirements", "Summarized findings into career-relevant insights"],
    insights: ["Job titles and skill requirements can be compared systematically.", "Market analysis helps prioritize learning based on observed demand.", "Combining technical and business skills can strengthen an analytics profile."],
    outcome: "A market-focused analytics project connecting data analysis with career and business decision-making."
  },
  {
    title: "Hospital Data Analysis",
    category: "Power BI",
    type: "HEALTHCARE ANALYTICS",
    description: "Multi-table hospital dataset analysis focused on healthcare operations, patient information and dashboard-ready KPIs.",
    tools: ["Power BI", "Data Modeling", "Excel", "Data Cleaning"],
    problem: "Turn multiple hospital data tables into an understandable analytical view for operational exploration.",
    process: ["Worked with multiple related tables", "Prepared and modeled data", "Created analytical measures", "Built visual summaries for hospital-related metrics"],
    insights: ["Relational hospital data can be transformed into KPI-driven dashboards.", "Data modeling is essential when working with multiple connected tables.", "Interactive reporting helps users investigate patterns instead of relying on static totals."],
    outcome: "A practical multi-table analytics project demonstrating data preparation, modeling and visualization."
  },
  {
    title: "GenAI-Powered Data Analytics",
    category: "GenAI",
    type: "AI + ANALYTICS",
    description: "Exploration of how Generative AI can be integrated into data analytics workflows to accelerate analysis, insight generation and communication.",
    tools: ["Generative AI", "Prompt Engineering", "Data Analytics"],
    problem: "Explore how AI can support analytical work while keeping the analyst responsible for validation, context and business judgment.",
    process: ["Framed analytical questions", "Used structured prompts to support analysis", "Evaluated AI-generated outputs", "Connected AI assistance with analytical reasoning"],
    insights: ["GenAI can accelerate repetitive analytical tasks.", "Prompt quality strongly influences analytical usefulness.", "Human validation remains important when turning AI output into business insight."],
    outcome: "A demonstration of combining GenAI capabilities with analytical thinking rather than treating AI as a replacement for analysis."
  },
  {
    title: "Hospital Disease Prediction",
    category: "Python",
    type: "MACHINE LEARNING",
    description: "Machine-learning application work involving disease prediction models and an interactive Streamlit interface.",
    tools: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
    problem: "Build a user-facing application that demonstrates how trained classification models can produce predictions from structured inputs.",
    process: ["Prepared model datasets", "Trained classification models", "Saved trained models", "Connected models to a Streamlit interface"],
    insights: ["Model deployment makes analytical work accessible through an interface.", "Different prediction tasks require separate trained models and validated inputs.", "The application layer is useful for demonstrating an end-to-end ML workflow."],
    outcome: "An applied Python/ML project connecting model development with an interactive application."
  },
  {
    title: "Weather Prediction / Weather Data App",
    category: "Python",
    type: "API + DATA",
    description: "Weather-data project using an API workflow to retrieve and present weather information for multiple cities.",
    tools: ["Python", "API", "Data Handling"],
    problem: "Retrieve external weather data and turn it into a useful, understandable application or analysis.",
    process: ["Connected to a weather API", "Retrieved city-level weather information", "Processed the response data", "Presented useful weather outputs"],
    insights: ["APIs allow analytics applications to work with live external data.", "Data ingestion and presentation are key parts of an end-to-end workflow.", "External data can be transformed into user-focused analytical outputs."],
    outcome: "A practical project demonstrating API-based data collection and application-oriented analysis."
  }
];

const skillGroups = [
  {name:"Data Analysis", items:["SQL","Python","Pandas","NumPy","Data Cleaning","EDA"]},
  {name:"Business Intelligence", items:["Power BI","DAX","Tableau","Excel","KPI Reporting"]},
  {name:"Visualization", items:["Data Storytelling","Dashboard Design","Interactive Reporting","Charts"]},
  {name:"Databases", items:["MySQL","Relational Data","Data Modeling","Joins","Aggregations"]},
  {name:"AI & Automation", items:["Generative AI","Prompt Engineering","AI-assisted Analysis"]},
  {name:"Workflow", items:["Git","GitHub","Jupyter / Colab","Streamlit","Documentation"]}
];
