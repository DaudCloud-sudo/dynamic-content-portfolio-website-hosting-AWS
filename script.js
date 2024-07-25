/*
=========================================================
Author: Shahzaib Daud
Occupation: Computer Engineer
Website: www.shahzaibdaud.com
Date: 03-07-2024

Description:
This JavaScript file contains the client-side functionality for the Portfolio website project.

Usage:
This code is open-source and can be used and modified as per the requirements. Please give credit to the original author when using this code.

=========================================================
*/

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("nav ul li a");
  const languageToggle = document.getElementById("language-toggle");
  const themeToggle = document.getElementById("theme-toggle");
  let currentLanguage = "en"; // default language

  const translations = {
    de: {
      about: "Über mich",
      name: "Shahzaib Daud",
      role: "Computer-Ingenieur aus Pakistan",
      description:
        "Ich bin ein engagierter Computer-Ingenieur, der sich kontinuierlich weiterbildet und beruflich wächst. Mein derzeitiger Schwerpunkt liegt auf <strong>AWS-Cloud-Lösungen</strong>, wo ich meine Fähigkeiten in Architekturdesign, CI/CD-Pipelines und DevOps-Praktiken erweitere. Ich beschäftige mich auch intensiv mit <strong>AI/ML-Technologien</strong>, spezialisiere mich auf Deep Learning und Generative AI und integriere diese Fortschritte in reale Anwendungen. Zusätzlich habe ich Fachwissen in Embedded Systems und IIOT (Industrial Internet of Things) und wende mein Wissen an, um effiziente und integrierte Lösungen zu schaffen.",
      "passion-description":
        "Während ich mein Fachwissen in diesen Bereichen weiter ausbaue, bin ich leidenschaftlich daran interessiert, Spitzentechnologie zu integrieren, um Innovation und Effizienz voranzutreiben. Darüber hinaus lerne ich derzeit <strong>Deutsch</strong>, um meine Kommunikationsfähigkeiten zu erweitern und die internationale Zusammenarbeit in Technologieprojekten zu verbessern.",
      "approach-description":
        "Mein Ansatz kombiniert theoretisches Wissen mit praktischer Erfahrung und zielt darauf ab, skalierbare Lösungen zu liefern, die komplexe Herausforderungen in verschiedenen Branchen angehen.",
      email:
        'Email: <a href="mailto:engr.s.daud@gmail.com">engr.s.daud@gmail.com</a>',
      phone: 'Telefon: <a href="tel:+923158963161">+92 315 8963161</a>',
      "social-media-links": "Soziale Medien Links",
      "resume-download": "Klicken Sie unten, um den Lebenslauf herunterzuladen",
      education: "Bildung",
      "education-title": "Bildung",
      "bachelor-degree": "Bachelor of Science in Elektrotechnik",
      specialization: "Spezialisierung:",
      "specialization-detail": "Computersystemtechnik",
      institution: "Institution:",
      "institution-bachelor": "NUCES, FAST, Islamabad Campus",
      "years-attended": "Jahre besucht:",
      "years-bachelor": "2019 - 2024",
      "fsc-degree": "FSc Pre-Engineering",
      "institution-fsc": "Chenab College Jhang",
      "years-fsc": "2016 - 2018",
      "matric-degree": "Matriculation in Science",
      "institution-matric": "Sacred Heart High School Jhang",
      "years-matric": "2014 - 2016",
      projects: "Projekte",
      "project-description":
        "Ich habe an verschiedenen Projekten gearbeitet, die meinen Lernweg und die Anwendung von AWS-Cloud-Lösungen widerspiegeln. Dazu gehören die Bereitstellung und Feinabstimmung großer Sprachmodelle wie Llama 2 70B für spezifische Domänen, die Entwicklung sicherer, mehrbenutzerfähiger Chat-Server und die Einrichtung von Linux-Webservern auf Raspberry Pi. Darüber hinaus habe ich zur Datenvorverarbeitung für ein hyperspektrales Bildgebungsprojekt im Bereich der forensischen Analyse beigetragen und an einer Forschungsinitiative des NesCOM Atomic Energy Centre Islamabad mitgearbeitet, die die Entwicklung eines FPGA-basierten Busanalysators beinhaltete. Derzeit beschäftige ich mich intensiv mit der Erweiterung meines Wissens über AWS-Cloud-Technologien zur Entwicklung skalierbarer Lösungen, mit einem Fokus auf KI und ML, generativer KI, Chatbot-Implementierung und DevOps-Praktiken. Diese Projekte unterstreichen mein Engagement für kontinuierliches Lernen und die praktische Anwendung fortschrittlicher Technologien in realen Kontexten.",
      "projects-completed": "Abgeschlossene Projekte",
      "project1-title":
        "Bewertung, Bereitstellung und Feinabstimmung des Llama 2 70B Modells",
      "project1-date": "Aug 2024 - Gegenwart",
      "project1-association": "In Zusammenarbeit mit Udacity",
      "project1-description":
        "In diesem Abschlussprojekt konzentrierte ich mich auf die Bewertung, Bereitstellung und Feinabstimmung des Llama 2 70B Modells. Durch die Verwendung eines spezialisierten IT-Domänen-Datensatzes verwandelte ich das vortrainierte Modell in einen Domänenexperten. Das Projekt umfasste die Datenvorverarbeitung, die Modellauswertung und die Implementierung von Feinabstimmungstechniken zur Erzielung optimaler Leistung. Das Ergebnis war ein hochpräzises und effizientes domänenspezifisches Sprachmodell, das für reale Anwendungen bereit ist.",
      "project1-skills": "Fähigkeiten:",
      "project2-title":
        "Vorhersage von Krankenversicherungsprämien mit maschinellem Lernen",
      "project2-date": "Aug 2023 - Aug 2023",
      "project2-description":
        "Dieses Projekt beinhaltete das Erlernen der theoretischen Grundlagen und die praktische Anwendung von neuronalen Netzwerken mit Keras und TensorFlow. Ich baute, trainierte und bewertete neuronale Netzmodelle und sammelte praktische Erfahrungen. Ich stellte die Datengenauigkeit durch sorgfältige Bereinigung sicher, verwendete Feature-Engineering-Techniken und Visualisierungsmethoden. Außerdem erweiterte ich die Analyse durch die Integration von linearer Regression für verbesserte Einblicke und Vorhersagen. Dieses Projekt entwickelte mein vielseitiges Skillset im maschinellen Lernen und deckte neuronale Netzwerke, lineare Regression, Datenvorverarbeitung und Visualisierung ab.",
      "project2-skills": "Fähigkeiten:",
      "project3-title":
        "Forschungsprojekt: iVision HHID - Handgeschriebener Hyperspektralbild-Datensatz für forensische Analyse und Fälschungserkennung",
      "project3-date": "Mai 2023 - Jul 2023",
      "project3-description":
        "In Zusammenarbeit mit einem Team der IST University beim iVision HHID-Projekt konzentrierten wir uns auf die Verbesserung der Modellgenauigkeit für handgeschriebene hyperspektrale Bilder in der Dokumentenforensik. Durch fortschrittliche hyperspektrale Bildgebungstechniken sammelten wir vielfältige handgeschriebene Dokumente, die verschiedene Stile, Tinten und Papiere umfassten. Wir verwendeten fortschrittliche Bildvorverarbeitungsmethoden wie Rauschreduzierung und Normalisierung, um die Datenqualität zu optimieren. Sorgfältige Annotation und Generierung von Ground Truth gewährleisteten die Zuverlässigkeit des Datensatzes und umfassten Attribute wie Alter, Urheberschaft und Tintenanalyse. Datenaugmentationstechniken wie Rotation, Translation, Skalierung und synthetische Rauschinjektion erhöhten die Vielfalt des Datensatzes. Der resultierende iVision HHID-Datensatz dient als Benchmark für Fälschungserkennung, Urheberverifikation und Tintenanalyse. Dieses Projekt demonstriert meine Expertise in der Bildverarbeitung, Datenannotation und kollaborativen Forschung in der hyperspektralen Bildbasierten Dokumentenanalyse.",
      "project3-skills": "Fähigkeiten:",
      "project4-title": "Sicherer Mehrbenutzer-Chat-Server",
      "project4-date": "Mai 2023 - Jun 2023",
      "project4-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project4-description":
        "Dieses Projekt implementiert einen sicheren Mehrbenutzer-Chat-Server mit den Python-Bibliotheken socket und SSL. Der Server ermöglicht die Echtzeit-Textkommunikation zwischen mehreren Clients in einer sicheren Umgebung. Er stellt eine sichere Socket-Verbindung mithilfe von SSL/TLS-Verschlüsselung her, um Vertraulichkeit und Integrität zu gewährleisten. Clients verbinden sich mit dem Server, indem sie die IP-Adresse und die Portnummer des Servers angeben. Nach der Verbindung erhalten die Clients eine Willkommensnachricht und werden aufgefordert, ihren Namen einzugeben. Der Server behandelt jede Clientverbindung in einem separaten Thread, verfolgt die verbundenen Clients und deren Adressen. Der Server sendet Nachrichten an alle Clients, wobei der Name des Absenders als Präfix dient. Wenn ein Client den Befehl '#quit' sendet, wird er ordnungsgemäß getrennt, und der Server benachrichtigt alle Clients über das Verlassen. Dieser sichere Server ermöglicht nahtlose Mehrbenutzer-Chat-Interaktionen, stellt die Nachrichtenübermittlung sicher und erhält die Integrität des Chatrooms durch SSL/TLS-Verschlüsselung. Er unterstützt mehrere gleichzeitige Verbindungen und bietet eine sichere und benutzerfreundliche Umgebung für Kommunikation und Verbindungsaufbau.",
      "project4-skills": "Fähigkeiten:",
      "project5-title":
        "Aufbau eines Linux-Webservers auf Raspberry Pi 4 mit Chatraum-Anwendung",
      "project5-date": "Apr 2023 - Mai 2023",
      "project5-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project5-description":
        "Entwicklung und Aufbau eines Linux-Webservers auf einem Raspberry Pi 4 sowie einer mehrbenutzerfähigen Chatraum-Anwendung. Einrichtung einer optimierten Linux-Umgebung, Konfiguration eines Webservers (Apache2) und Entwicklung einer benutzerfreundlichen Oberfläche für die Echtzeitkommunikation. Implementierung von Sicherheitsmaßnahmen wie Firewalls, Verschlüsselung und Benutzerauthentifizierung. Speicherung der Chat-Daten mittels SQL. Bereitstellung des Projekts auf dem Raspberry Pi, wodurch es über seine IP-Adresse zugänglich wird. Demonstration von Fähigkeiten in Netzwerkprogrammierung, Linux-Systemadministration, Server-Bereitstellung und Entwicklung von Chatraum-Anwendungen.",
      "project5-skills": "Fähigkeiten:",
      "project6-title":
        "Erkennung von diabetischer Retinopathie mithilfe von maschinellem Lernen",
      "project6-date": "Apr 2023 - Jun 2023",
      "project6-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project6-description":
        "Dieses Projekt konzentriert sich auf die Nutzung von maschinellen Lernmodellen und Techniken des Transfer-Learnings zur genauen Erkennung von diabetischer Retinopathie. Ziel ist es, ein effizientes System zur frühzeitigen Erkennung und Diagnose dieser diabetesbedingten Augenkomplikation zu entwickeln. Ein kuratierter Datensatz von Netzhautbildern von Kaggle wird verwendet, begleitet von Labels, die den Schweregrad der Retinopathie angeben. Strenge Datenvorverarbeitungs- und Annotationsverfahren wurden implementiert, um die Qualität des Datensatzes sicherzustellen. Verschiedene maschinelle Lernmodelle, einschließlich maßgeschneiderter Convolutional Neural Networks (CNNs) und vortrainierter Modelle wie MobileNetV2, wurden trainiert und bewertet. Techniken des Transfer-Learnings wurden eingesetzt, um die Modellleistung zu verbessern. Das Projekt zeigt Expertise in der Datenerfassung, Vorverarbeitung, Modellgestaltung und Nutzung modernster Techniken des maschinellen Lernens für medizinische Diagnosen.",
      "project6-skills": "Fähigkeiten:",
      "project7-title":
        "Design und Implementierung der Lichtintensitätsmessung mit LDR und AVR-Mikrocontroller",
      "project7-date": "Okt 2022 - Dez 2022",
      "project7-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project7-description":
        "Während unseres Projekts zur Lichtintensitätsmessung mit LDR und AVR-Mikrocontroller sammelten wir praktische Erfahrungen in der Verwendung von MicroChip Studio für die AVR-Programmierung und Proteus für die Simulation des Designs. Wir lernten auch, wie man LDR mit dem AVR-Mikrocontroller verbindet, wie man UART als Kommunikationsprotokoll für die Datenübertragung zwischen Mikrocontrollern verwendet und die Echtzeitdaten auf einem 16*2 LCD anzeigt. Unser Projekt half uns, die praktische Umsetzung von mikrocontrollerbasierten Systemen zu verstehen und unsere Fähigkeiten im Design von eingebetteten Systemen zu verbessern.",
      "project7-skills": "Fähigkeiten:",
      "project8-title":
        "Entwurf eines Internetworks für unseren Campus (FAST University)",
      "project8-date": "Dez 2022 - Dez 2022",
      "project8-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project8-description":
        "Entwurf und Implementierung eines Internetworks mithilfe von Cisco Packet Tracer zur Verbindung der FAST University Campus und des Hauptbüros. Erstellung separater Netzwerke für die Abteilungen Elektrotechnik (EE), Informatik (CS) und Betriebswirtschaft (BBA) an jedem Campus mit strategischer IP-Adressierung. Verwendung von Routern für die inter-campus Konnektivität und Anwendung von statischem Routing oder RIP basierend auf der Anzahl der Router. Konfiguration von DHCP zur IP- und Gateway-Zuweisung, um eine effiziente Netzwerkverwaltung sicherzustellen. Integration von Servern im Hauptbüro für zentrale Dienste. Dieses Projekt demonstrierte Fähigkeiten im Netzwerkdesign, IP-Adressierung, Routing-Protokolle und DHCP-Konfiguration bei der Einrichtung eines robusten und vernetzten Internetworks für die FAST University.",
      "project8-skills": "Fähigkeiten:",
      "project9-title":
        "Entwurf und Simulation eines FM-Systems mit SSB-FDM mithilfe von MATLAB",
      "project9-date": "Nov 2022 - Dez 2022",
      "project9-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project9-description":
        "In Analog- und Digitalkommunikation haben mein Partner und ich ein FM-System mit SSB-FDM mithilfe von MATLAB entworfen und simuliert. Wir sammelten praktische Erfahrungen in Kommunikationssystemen und ein tieferes Verständnis von Modulationstechniken. Dieses Projekt bot uns wertvolle Fähigkeiten im Systemdesign, in der Simulation und in der Signalverarbeitung.",
      "project9-skills": "Fähigkeiten:",
      "project10-title": "Geregelte Gleichstromversorgung",
      "project10-date": "Nov 2021 - Dez 2021",
      "project10-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project10-description":
        "Entwurf und Simulation einer 5V Gleichstromversorgung mit Hilfe eines Brückengleichrichters, Kondensatoren und Spannungsregler-IC 7805 in Proteus. Dieses Projekt bot praktische Erfahrungen im Design von Stromversorgungen, in der Verwendung von Simulationstools und im Verständnis von elektronischen Komponenten und Schaltungsdesign.",
      "project10-skills": "Fähigkeiten:",
      "project11-title": "Digitales Kommunikationssystem",
      "project11-date": "Jun 2021 - Jul 2021",
      "project11-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project11-description":
        "In diesem Projekt haben wir ein einfaches Kommunikationssystem mithilfe von zwei (8*2 MUX) einem Parallel-zu-Seriell und einem Seriell-zu-Parallel-Schnittstellen entworfen und simuliert. Die Kommunikation erfolgt über eine einzelne Leitung. Die Simulation des Designs erfolgte mithilfe der Proteus-Software. Dieses Projekt verschaffte uns praktische Erfahrungen in digitalen Kommunikationssystemen und im Schaltungsdesign mithilfe von Simulationssoftware.",
      "project11-skills": "Fähigkeiten:",
      "project12-title":
        "Entwurf eines 3D-Computerlabors der Universität mithilfe von AutoCAD",
      "project12-date": "Nov 2019 - Dez 2019",
      "project12-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project12-description":
        "In diesem Semesterprojekt entwarf ich ein 3D-Labor der Universität mithilfe von AutoCAD-Werkzeugen und -Befehlen. Dieses Projekt verbesserte meine Fähigkeiten im 3D-Design und in AutoCAD und bot praktische Erfahrungen in der Nutzung von Designsoftware für reale Anwendungen.",
      "project12-skills": "Fähigkeiten:",
      "project13-title": "Rauchmelder mit Arduino",
      "project13-date": "Okt 2019 - Nov 2019",
      "project13-association":
        "In Zusammenarbeit mit der National University of Computer and Emerging Sciences",
      "project13-description":
        "Entwicklung eines Rauchpegeldetektors mit Arduino und MQ-2-Sensor zur Messung des Rauchpegels in der Umgebung. Dieses Projekt verbesserte meine Fähigkeiten in der Verwendung von Arduino zur Sensoranbindung und Echtzeitdatenverarbeitung. Es bot praktische Erfahrungen im Design und in der Implementierung sensorbasierter Systeme zur Umweltüberwachung.",
      "project13-skills": "Fähigkeiten:",
      skills: "Fähigkeiten",
      "web-dev-programming": "Web-Entwicklungsprogrammierung",
      "ai-ml-programming-devops-tools":
        "AI & ML Programmiersprachen und DevOps-Tools",
      "embedded-iiot-programming-languages-tools":
        "Eingebettete/IIOT-System Programmiersprachen und Tools",
      "networking-tools": "Netzwerkwerkzeuge",
      "operating-systems": "Betriebssysteme",
      "current-learning-journey": "Aktuelle Lernreise",
      expertise: "Expertise",
      "ai-ml": "Künstliche Intelligenz & Maschinelles Lernen:",
      "ai-ml-desc":
        "Derzeit in einem Nanodegree-Programm bei Udacity eingeschrieben. Intensive Auseinandersetzung mit grundlegenden Konzepten wie überwachtes und unüberwachtes Lernen und Modellauswertung. Rüste mich mit Werkzeugen aus, um reale KI/ML-Herausforderungen zu bewältigen.",
      devops: "DevOps:",
      "devops-desc":
        "Verfeinerung der Fähigkeiten in DevOps-Praktiken einschließlich CI/CD-Pipelines und Infrastruktur als Code (IaC). Lernen über Tools und Technologien wie AWS CodePipeline und CloudFormation, um den Softwareentwicklungszyklus zu optimieren.",
      "language-learning": "Sprachen lernen:",
      "language-learning-desc":
        "Aktiv Deutsch (Deutsch) lernen, um meine sprachlichen Fähigkeiten und mein kulturelles Verständnis zu erweitern.",
      expertise:
        "Expertise in AWS Cloud-Lösungen, KI & ML, Generative KI, Embedded Systems, IIOT-Programmierung, Computernetzwerke, TCP/IP und OSI-Modelle.",
      interests: "Interessen",
      "interests-description":
        "Abgesehen davon, dass ich Ingenieur bin, verbringe ich die meiste Zeit gerne draußen. 🌲 Im Winter erkunde ich gerne die Natur und besuche historische Stätten wie Museen, Parks und technologische Veranstaltungen. Während der wärmeren Monate in Islamabad genieße ich Wanderungen auf den schönen Wegen Israels. 🏞️ Beim Reisen liebe ich es, verschiedene Kulturen zu erkunden und neue Orte innerhalb Pakistans zu entdecken. 🗺️ Wenn ich drinnen bin, verfolge ich gerne Science-Fiction- und Fantasy-Filme und Fernsehsendungen. Ich bin ein angehender Koch und verbringe viel meiner Freizeit damit, die neuesten technologischen Fortschritte in KI und ML zu erkunden, generative KI unter Verwendung von AWS-Lösungen.",
      "ai-robotics": "KI und Robotik",
      "trail-hiking": "Wandern",
      travel: "Reisen",
      music: "Musik",
      "awards-heading": "Auszeichnungen und Erfolge",
      "course-certificates-heading": "Kurszertifikate",
      "achievements-heading": "Leistungen",
      blog: "Blogbeiträge",
    },
    en: {
      about: "About Me",
      name: "Shahzaib Daud",
      role: "Computer Engineer from Pakistan",
      description:
        "I am a dedicated Computer Engineer committed to continuous learning and professional growth. My current focus includes <strong>AWS Cloud Solutions</strong>, where I am expanding my skills in architecture design, CI/CD pipelines, and DevOps practices. I am also immersed in <strong>AI/ML technologies</strong>, specializing in Deep Learning and Generative AI, and I integrate these advancements into real-world applications. Additionally, I have expertise in Embedded Systems and IIOT (Industrial Internet of Things), applying my knowledge to create efficient and integrated solutions.",
      "passion-description":
        "While I am still advancing my expertise in these domains, I am passionate about integrating cutting-edge technology to drive innovation and efficiency. Furthermore, I am currently learning <strong>Deutsch</strong> to broaden my communication abilities and enhance international collaboration in tech projects.",
      "approach-description":
        "My approach combines theoretical knowledge with practical experience, aiming to deliver scalable solutions that address complex challenges across various industries.",
      email:
        'Email: <a href="mailto:engr.s.daud@gmail.com">engr.s.daud@gmail.com</a>',
      phone: 'Phone: <a href="tel:+923158963161">+92 315 8963161</a>',
      "social-media-links": "Social Media Links",
      "resume-download": "Click Below to Download the Resume",
      education: "Education",
      "education-title": "Education",
      "bachelor-degree": "Bachelor of Science in Electrical Engineering",
      specialization: "Specialization:",
      "specialization-detail": "Computer System Engineering",
      institution: "Institution:",
      "institution-bachelor": "NUCES, FAST, Islamabad Campus",
      "years-attended": "Years Attended:",
      "years-bachelor": "2019 - 2024",
      "fsc-degree": "FSc Pre-Engineering",
      "institution-fsc": "Chenab College Jhang",
      "years-fsc": "2016 - 2018",
      "matric-degree": "Matriculation in Science",
      "institution-matric": "Sacred Heart High School Jhang",
      "years-matric": "2014 - 2016",
      projects: "Projects",
      "project-description":
        "I have been involved in a variety of projects that reflect my journey in learning and applying AWS cloud solutions. These include deploying and fine-tuning large language models like Llama 2 70B for specific domains, developing secure, multi-client chat room servers, and setting up Linux web servers on Raspberry Pi. Additionally, I contributed to data preprocessing for a hyperspectral imaging project focused on forensic analysis and collaborated on a research initiative funded by NesCOM Atomic Energy Centre Islamabad, designing an FPGA-based bus analyzer. Currently, I am deeply engaged in expanding my knowledge of AWS cloud technologies for developing scalable solutions, with a focus on AI & ML, Generative AI, chatbot implementation, and DevOps practices. These projects underscore my commitment to continuous learning and practical application of advanced technologies in real-world contexts.",
      "projects-completed": "Projects Completed",
      "project1-title":
        "Llama 2 70B Model Evaluation, Deployment, and Fine-Tuning",
      "project1-date": "Aug 2024 - Present",
      "project1-association": "Associated with Udacity",
      "project1-description":
        "In this capstone project, I focused on evaluating, deploying, and fine-tuning the Llama 2 70B model. By using a specialized IT domain dataset, I transformed the pre-trained model into a domain expert. The project involved data preprocessing, model evaluation, and implementation of fine-tuning techniques to achieve optimal performance. The outcome was a highly accurate and efficient domain-specific language model ready for real-world applications.",
      "project1-skills": "Skills:",
      "project2-title":
        "Medical Insurance Premium Prediction with Machine Learning",
      "project2-date": "Aug 2023 - Aug 2023",
      "project2-description":
        "This project involved mastering the theoretical foundations and practical use of neural networks through Keras and TensorFlow. I built, trained, and evaluated neural network models, gaining hands-on experience. I ensured data accuracy through meticulous cleaning, used feature engineering techniques, and visualization methods. I also extended the analysis by integrating linear regression for enhanced insights and predictions. This project developed my versatile skill set in machine learning, covering neural networks, linear regression, data preprocessing, and visualization.",
      "project2-skills": "Skills:",
      "project3-title":
        "Research Project: iVision HHID - Handwritten Hyperspectral Images Dataset for Forensic Analysis and Forgery Detection",
      "project3-date": "May 2023 - Jul 2023",
      "project3-description":
        "Collaborating with a team from IST University on the iVision HHID project, we focused on enhancing model accuracy for handwritten hyperspectral images in document forensic analysis. Through advanced hyperspectral imaging techniques, we collected diverse handwritten documents, encompassing various styles, inks, and papers. Employing cutting-edge image pre-processing methods like noise reduction and normalization, we optimized data quality. Meticulous annotation and ground truth generation ensured dataset reliability, covering attributes such as age, authorship, and ink analysis. Data augmentation techniques like rotation, translation, scaling, and synthetic noise injection enhanced dataset diversity. The resulting iVision HHID dataset serves as a benchmark for forgery detection, authorship verification, and ink analysis. This project demonstrates my expertise in image processing, data annotation, and collaborative research in hyperspectral imaging-based document analysis.",
      "project3-skills": "Skills:",
      "project4-title": "Secure Multi-Client Chat Room Server",
      "project4-date": "May 2023 - Jun 2023",
      "project4-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project4-description":
        "This project implements a secure multi-client chat room server using Python's socket and SSL libraries. The server enables real-time text-based communication among multiple clients within a secure environment. It establishes a secure socket connection using SSL/TLS encryption, ensuring confidentiality and integrity. Clients connect to the server by providing the server's IP address and port number. Upon connection, clients receive a welcome message and are prompted to enter their name. The server handles each client connection in a separate thread, keeping track of connected clients and their addresses. The server broadcasts messages to all clients, with the sender's name as a prefix. When a client sends the '#quit' command, they are gracefully disconnected, and the server notifies all clients about the departure. This secure server facilitates seamless multi-client chat interactions, ensuring message delivery and maintaining the chat room's integrity through SSL/TLS encryption. It supports multiple simultaneous connections, providing a safe and user-friendly environment for communication and connection-building.",
      "project4-skills": "Skills:",
      "project5-title":
        "Building a Linux Web Server on Raspberry Pi 4 with Chat Room Application",
      "project5-date": "Apr 2023 - May 2023",
      "project5-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project5-description":
        "Designed and built a Linux web server on a Raspberry Pi 4, along with a multi-client chat room application. Set up an optimized Linux environment, configured a web server (Apache2), and developed a user-friendly interface for real-time communication. Implemented security measures, including firewalls, encryption, and user authentication. Stored chat data using SQL. Deployed the project on the Raspberry Pi, enabling accessibility via its IP address. Demonstrated proficiency in network programming, Linux system administration, server deployment, and chat room application development.",
      "project5-skills": "Skills:",
      "project6-title":
        "Diabetic Retinopathy Identification Using Machine Learning",
      "project6-date": "Apr 2023 - Jun 2023",
      "project6-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project6-description":
        "This project focuses on utilizing machine learning models and transfer learning techniques for the accurate identification of diabetic retinopathy. The objective is to develop an efficient system for the early detection and diagnosis of this diabetes-related eye complication. A curated dataset of retinal images from Kaggle is used, accompanied by labels indicating the severity of retinopathy. Rigorous data preprocessing and annotation procedures were implemented to ensure dataset quality. Various machine learning models, including custom-designed convolutional neural networks (CNNs) and pre-trained models such as MobileNetV2, were trained and evaluated. Transfer learning techniques were employed to enhance model performance. The project showcases expertise in data collection, preprocessing, model design, and the utilization of state-of-the-art machine-learning techniques for medical diagnosis.",
      "project6-skills": "Skills:",
      "project7-title":
        "Design and Implementation of Light Intensity Measurement using LDR and AVR Microcontroller",
      "project7-date": "Oct 2022 - Dec 2022",
      "project7-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project7-description":
        "During our project of Light Intensity Measurement using LDR and AVR Microcontroller, we gained hands-on experience in using MicroChip Studio for AVR programming and Proteus for simulation of the design. We also learned how to interface LDR with AVR microcontroller, how to use UART as a communication protocol for data transfer between microcontrollers and display the real-time data on a 16*2 LCD. Our project helped us understand the practical implementation of microcontroller-based systems and enhanced our skills in embedded system design.",
      "project7-skills": "Skills:",
      "project8-title":
        "Designed an Internetwork for our Campus (FAST University)",
      "project8-date": "Dec 2022 - Dec 2022",
      "project8-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project8-description":
        "Designed and implemented an internetwork using Cisco Packet Tracer to connect FAST University campuses and the Head Office. Created separate networks for Electrical Engineering (EE), Computer Science (CS), and Business Administration (BBA) departments at each campus with strategic IP addressing. Utilized routers for inter-campus connectivity and employed static routing or RIP based on the number of routers. Configured DHCP for IP and gateway allocation, ensuring efficient network management. Integrated servers at the Head Office for centralized services. This project demonstrated proficiency in network design, IP addressing, routing protocols, and DHCP configuration in establishing robust and interconnected internetwork for FAST University.",
      "project8-skills": "Skills:",
      "project9-title":
        "Designed and simulated an FM system with SSB-FDM using MATLAB",
      "project9-date": "Nov 2022 - Dec 2022",
      "project9-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project9-description":
        "In Analog and Digital Communications, my partner and I designed and simulated an FM system with SSB-FDM using MATLAB. We gained practical experience in communication systems and a deeper understanding of modulation techniques. This project provided us with valuable skills in system design, simulation, and signal processing.",
      "project9-skills": "Skills:",
      "project10-title": "DC Regulated Power Supply",
      "project10-date": "Nov 2021 - Dec 2021",
      "project10-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project10-description":
        "Designed and Simulated 5V DC Power Supply with the help of Bridge rectifier, capacitors, and voltage regulator IC 7805 in Proteus. This project provided practical experience in designing power supplies, using simulation tools, and understanding electronic components and circuit design.",
      "project10-skills": "Skills:",
      "project11-title": "Digital Communication System",
      "project11-date": "Jun 2021 - Jul 2021",
      "project11-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project11-description":
        "In this project, we have Simulate a simple communication system using two (8*2 mux) a parallel to serial and serial to parallel, communication is done via single line, simulating the design using the Proteus software for the designing purpose. This project gave us hands-on experience in digital communication systems and circuit design using simulation software.",
      "project11-skills": "Skills:",
      "project12-title": "Designed university 3-D Computer Lab using AutoCAD",
      "project12-date": "Nov 2019 - Dec 2019",
      "project12-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project12-description":
        "In this semester project, I created a university 3-D lab design using AutoCAD tools and commands. This project improved my skills in 3D design and AutoCAD, providing practical experience in using design software for real-world applications.",
      "project12-skills": "Skills:",
      "project13-title": "Smoke Sensor using Arduino",
      "project13-date": "Oct 2019 - Nov 2019",
      "project13-association":
        "Associated with National University of Computer and Emerging Sciences",
      "project13-description":
        "Designed Arduino smoke level detector using MQ-2 sensor for measuring the level of smoke in the environment. This project enhanced my skills in using Arduino for sensor interfacing and real-time data processing. It provided practical experience in designing and implementing sensor-based systems for environmental monitoring.",
      "project13-skills": "Skills:",
      skills: "Skills",
      "web-dev-programming": "Web Dev Programming",
      "ai-ml-programming-devops-tools":
        "AI & ML Programming Languages and DevOps Tools",
      "embedded-iiot-programming-languages-tools":
        "Embedded/IIOT System Programming Languages and Tools",
      "networking-tools": "Networking Tools",
      "operating-systems": "Operating Systems",
      "current-learning-journey": "Current Learning Journey",
      expertise: "Expertise",
      "Artificial Intelligence & Machine Learning:":
        "Artificial Intelligence & Machine Learning:",
      "Currently enrolled in a Nanodegree program at Udacity. Deep dive into fundamental concepts such as supervised and unsupervised learning, and model evaluation. Equipping myself with tools to tackle real-world AI/ML challenges.":
        "Currently enrolled in a Nanodegree program at Udacity. Deep dive into fundamental concepts such as supervised and unsupervised learning, and model evaluation. Equipping myself with tools to tackle real-world AI/ML challenges.",
      "DevOps:": "DevOps:",
      "Honing skills in DevOps practices including CI/CD pipelines and infrastructure as code (IaC). Learning about tools and technologies like AWS CodePipeline and CloudFormation to streamline the software development lifecycle.":
        "Honing skills in DevOps practices including CI/CD pipelines and infrastructure as code (IaC). Learning about tools and technologies like AWS CodePipeline and CloudFormation to streamline the software development lifecycle.",
      "Language Learning:": "Language Learning:",
      "Actively learning German (Deutsch) to expand my linguistic skills and cultural understanding.":
        "Actively learning German (Deutsch) to expand my linguistic skills and cultural understanding.",

      "ai-ml": "Artificial Intelligence & Machine Learning:",
      "ai-ml-desc":
        "Currently enrolled in a Nanodegree program at Udacity. Intensively studying fundamental concepts such as supervised and unsupervised learning, and model evaluation. Equipping myself with tools to tackle real-world AI/ML challenges.",
      devops: "DevOps:",
      "devops-desc":
        "Refining skills in DevOps practices including CI/CD pipelines and Infrastructure as Code (IaC). Learning about tools and technologies like AWS CodePipeline and CloudFormation to optimize the software development cycle.",
      "language-learning": "Language Learning:",
      "language-learning-desc":
        "Actively learning German to expand my language skills and cultural understanding.",
      expertise:
        "Expertise in AWS cloud solutions, AI & ML, Generative AI, Embedded Systems, IIOT Programming, Computer Networks, TCP/IP, and OSI models.",
      interests: "Interests",
      "interests-description":
        "Apart from being an engineer, I enjoy most of my time being outdoors. 🌲 In the winter, I like to explore nature and visit historical sites like museums, parks, and attend technological events. During the warmer months in Islamabad, I enjoy trail hiking in the beautiful Islamabad trails. 🏞️ When traveling, I love to explore different cultures and discover new places within Pakistan. 🗺️ When indoors, I follow a number of sci-fi and fantasy genre movies and television shows. I am an aspiring chef and spend a large amount of my free time exploring the latest technology advancements in AI and ML, generative AI utilizing AWS solutions.",
      "ai-robotics": "AI and Robotics",
      "trail-hiking": "Trail Hiking",
      travel: "Travel",
      music: "Music",
      "awards-heading": "Awards and Achievements",
      "course-certificates-heading": "Course Certificates",
      "achievements-heading": "Achievements",
      blog: "Blog Posts",
    },
  };

  // Toggle theme
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  // Language switch
  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "de" : "en";
    languageToggle.textContent =
      currentLanguage === "en" ? "Deutsch" : "English";
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      element.innerHTML = translations[currentLanguage][key];
    });
  });

  // Navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const targetSection = document.getElementById(sectionId);
      targetSection.classList.add("active");
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Footer links content loading
  const footerLinks = document.querySelectorAll("footer nav ul li a");
  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const content = this.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    const contentMap = {
      "privacy-policy": `
                <h2>Privacy Policy</h2>
                <p>Your privacy is very important to us. This privacy policy document outlines the types of personal information that is received and collected and how it is used.</p>
                <h3>Information Collection</h3>
                <p>We collect personal information when you voluntarily provide it through our contact form or other means of communication. The information we collect may include your name, email address, and any other details you provide.</p>
                <h3>Use of Information</h3>
                <p>The information you provide is used to respond to your inquiries, send updates, and provide the services you request. We do not share, sell, or distribute your personal information to third parties unless required by law.</p>
                <h3>Cookies</h3>
                <p>This website may use cookies to enhance the user experience. Cookies are small files that are stored on your device that help us understand how you use the site and improve your experience. You can set your browser to refuse cookies or alert you when cookies are being sent.</p>
                <h3>Data Security</h3>
                <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                <h3>Changes to This Privacy Policy</h3>
                <p>We may update this privacy policy from time to time. Any changes will be posted on this page. We encourage you to review this policy periodically for any updates.</p>
                <h3>Contact Us</h3>
                <p>If you have any questions about this privacy policy, please contact us using the form on the Contact page.</p>
                <p style="color: red; font-weight: bold;">⚠️ Please reload the page to navigate to the About section.</p>
            `,
      "terms-of-use": `
                <h2>Terms of Use</h2>
                <p>Welcome to my portfolio website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.</p>
                <h3>Acceptance of Terms</h3>
                <p>By using this website, you agree to be legally bound by these terms, which shall take effect immediately upon your first use of the site. If you do not agree to be legally bound by all the following terms, please do not access and/or use the website.</p>
                <h3>Use of Website</h3>
                <p>This website is for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from this website.</p>
                <h3>Intellectual Property</h3>
                <p>All content included on this website, such as text, graphics, logos, images, and software, is the property of Shahzaib Daud or its content suppliers and is protected by international copyright laws.</p>
                <h3>Links to Other Websites</h3>
                <p>This website may contain links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>
                <h3>Limitation of Liability</h3>
                <p>In no event will Shahzaib Daud be liable for any damages including, without limitation, indirect or consequential damages, or any damages whatsoever arising from the use or in connection with such use or loss of use of the site, whether in contract or in negligence.</p>
                <h3>Governing Law</h3>
                <p>These terms shall be governed by and construed in accordance with the laws of your country, and you irrevocably submit to the exclusive jurisdiction of the courts in that country.</p>
                <h3>Changes to These Terms</h3>
                <p>We may revise these terms of use at any time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>
                <p style="color: red; font-weight: bold;">⚠️ Please reload the page to navigate to the About section.</p>
            `,
      contact: `
                <h2>Contact Us</h2>
                <div class="contact-form">
                    <form id="contactForm">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required><br><br>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required><br><br>
                        <label for="message">Message:</label><br>
                        <textarea id="message" name="message" rows="4" required></textarea><br><br>
                        <button type="submit" id="submitBtn">Send Message</button>
                    </form>
                    <div class="alternative-contact">
                        <p>Alternatively, you can reach out via:</p>
                        <ul>
                            <li>Email: <a href="mailto:engr.s.daud@gmail.com">engr.s.daud@gmail.com</a></li>
                            <li>Phone: <a href="tel:+923158963161">+92 315 8963161</a></li>
                            <p style="color: red; font-weight: bold;">⚠️ Please reload the page to navigate to the About section.</p>
                        </ul>
                    </div>
                </div>
            `,
    };

    document.querySelector("main").innerHTML = contentMap[content];

    // Re-attach form submission handler after loading the form
    if (content === "contact") {
      attachFormHandler();
    }
  }

  function attachFormHandler() {
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        const id = uuid.v4(); // Generate a unique ID using the UUID library

        fetch("https://9oucvjm6fk.execute-api.us-east-1.amazonaws.com/Prod", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, name, email, message }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
          })
          .then((data) => {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm").reset();
          })
          .catch((error) => {
            console.error("Error:", error);
            alert(
              "There was an error sending your message. Please try again later."
            );
          });
      });
  }

  // Collapsible sections
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
