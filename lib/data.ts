export const siteData = {
  // Metadata for the entire application (used in app/layout.tsx)
  metadata: {
    title: "शिवगर्जना ढोल-ताशा ध्वज पथक, पुणे | Shivagarjana Dhol Tasha Dhwaj Pathak, Pune",
    description:
      "महाराष्ट्राच्या पारंपरिक संगीताचे संरक्षण करणाराढोल-ताशा ध्वज पथक. गणेशोत्सव, शिव जयंती आणि सांस्कृतिक कार्यक्रमांसाठी बुकिंग उपलब्ध.",
    keywords: "dhol tasha, pathak, mumbai, ganesh utsav, maharashtra culture, traditional music",
  },
  // Content for the Footer component (components/layout/footer.tsx)
  footer: {
    description: "महाराष्ट्राच्या समृद्ध संस्कृतीचा वारसा जपणारा आणि पुढच्या पिढीला प्रेरणा देणारा पथक.",
    quickLinksTitle: "द्रुत दुवे",
    quickLinks: [
     
      { name: "आमच्याबद्दल", href: "/about" },
      { name: "कार्यक्रम", href: "/events" },
      { name: "मीडिया", href: "/media" },
    ],
    servicesTitle: "सेवा",
    services: ["गणेश उत्सव कार्यक्रम", "शिव जयंती समारंभ", "लग्न समारंभ", "सांस्कृतिक कार्यक्रम", "धोल ताशा प्रशिक्षण"],
    contactInfoTitle: "संपर्क माहिती",
    addressLine1: "123, संस्कृती भवन",
    addressLine2: "दादर पूर्व, मुंबई - 400014",
    phone: "+91 97634 22233",
    email: "info@shivgarjana.com",
    copyright: `© ${new Date().getFullYear()} शिवगर्जना ढोल ताशा पथक. सर्व हक्क राखीव.`,
    privacyPolicy: { name: "गोपनीयता धोरण", href: "/privacy" },
    termsAndConditions: { name: "नियम आणि अटी", href: "/terms" },
  },
  // Content for the Header component (components/layout/header.tsx)
  header: {
    navigation: [
    
      { name: "आमच्याबद्दल", href: "/about" },
      { name: "मीडिया", href: "/media" },
      { name: "कार्यक्रम", href: "/events" },
      { name: "संपर्क", href: "/contact" },
    ],
    phoneNumber: "+91 97634 22233",
  },
  // Content for the Media page (app/media/page.tsx)
  mediaPage: {
    header: {
      title: "मीडिया गॅलरी",
      description: "आमच्या कार्यक्रमांचे फोटो आणि व्हिडिओ संग्रह",
    },
    photoGallery: {
      title: "फोटो गॅलरी",
      galleries: [
        {
          title: "गणेश उत्सव 2024",
          count: "50+ फोटो",
          date: "सप्टेंबर 2024",
          location: "विविध मंडळे",
          thumbnail: "/placeholder.svg?height=300&width=400",
          featured: true,
        },
        {
          title: "शिव जयंती महोत्सव",
          count: "35+ फोटो",
          date: "फेब्रुवारी 2024",
          location: "शिवाजी पार्क",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "सराव सत्र",
          count: "25+ फोटो",
          date: "जानेवारी 2024",
          location: "आमचे केंद्र",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "गुडी पाडवा उत्सव",
          count: "40+ फोटो",
          date: "एप्रिल 2024",
          location: "दादर चौपाटी",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "गट फोटो सेशन",
          count: "20+ फोटो",
          date: "मार्च 2024",
          location: "स्टुडिओ",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "नवरात्री महोत्सव",
          count: "60+ फोटो",
          date: "अक्टोबर 2024",
          location: "अंधेरी",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    videoGallery: {
      title: "व्हिडिओ गॅलरी",
      videos: [
        {
          title: "गणेश विसर्जन 2024 - तांबी जोगेश्वरी मंडळ",
          duration: "8:45",
          views: "15K+ views",
          date: "17 सप्टेंबर 2024",
          thumbnail: "/placeholder.svg?height=300&width=400",
          featured: true,
        },
        {
          title: "शिव जयंती स्पेशल परफॉर्मन्स",
          duration: "6:30",
          views: "8K+ views",
          date: "19 फेब्रुवारी 2024",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "धोल ताशा ट्यूटोरियल - बिगिनर्स",
          duration: "12:15",
          views: "25K+ views",
          date: "10 जानेवारी 2024",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "आमच्या पथकाची कहाणी",
          duration: "15:20",
          views: "12K+ views",
          date: "1 जानेवारी 2024",
          thumbnail: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    youtubeCta: {
      title: "आमचे YouTube चॅनेल",
      description: "आमच्या सर्व कार्यक्रमांचे व्हिडिओ आणि ट्यूटोरियल्स पाहण्यासाठी आमचे YouTube चॅनेल सब्स्क्राइब करा.",
      buttonVisit: "YouTube चॅनेल भेट द्या",
      buttonSubscribe: "सब्स्क्राइब करा",
    },
    socialMedia: {
      title: "आमच्यासोबत जुडा",
      links: [
        { name: "Instagram", handle: "@shivgarjana_pune12", color: "bg-pink-600", url: "https://www.instagram.com/shivgarjana_pune12?igsh=OTcyeDlocHEyOWc2" },
        { name: "Facebook", handle: "DholTashaPathak", color: "bg-blue-600", url: "#" },
        { name: "WhatsApp", handle: "Join Group", color: "bg-green-600", url: "#" },
      ],
    },
  },
  // Content for the Events page (app/events/page.tsx)
  eventsPage: {
    header: {
      title: "आमचे कार्यक्रम",
      description: "आगामी आणि भूतकाळातील सर्व कार्यक्रमांची संपूर्ण माहिती",
    },
    upcomingEvents: {
      title: "आगामी कार्यक्रम",
      events: [
        {
          title: "महाशिवरात्री महोत्सव 2025",
          date: "8 मार्च 2025",
          time: "संध्याकाळी 6:00",
          location: "शिवाजी पार्क, दादर",
          mandal: "शिव भक्त मंडळ",
          description: "भगवान शिवाच्या सन्मानार्थ विशेष धोल ताशा कार्यक्रम",
          image: "/images/vijubhaumandai.jpg?height=300&width=400",
          status: "confirmed",
          participants: "50+ कलाकार",
        },
        {
          title: "होळी धमाल 2025",
          date: "14 मार्च 2025",
          time: "सकाळी 10:00",
          location: "जुहू बीच",
          mandal: "युवा मंडळ जुहू",
          description: "रंगांच्या सणात धोल ताशाचा जल्लोष",
          image: "/images/madaiopening.jpg?height=300&width=400",
          status: "confirmed",
          participants: "40+ कलाकार",
        },
        {
          title: "गुडी पाडवा उत्सव 2025",
          date: "30 मार्च 2025",
          time: "सकाळी 9:00",
          location: "दादर चौपाटी",
          mandal: "नववर्ष मंडळ",
          description: "मराठी नववर्षाच्या स्वागतासाठी पारंपरिक कार्यक्रम",
          image: "/images/dhwajwale.jpg?height=300&width=400",
          status: "pending",
          participants: "60+ कलाकार",
        },
      ],
    },
    pastEvents: {
      title: "भूतकाळातील कार्यक्रम",
      events: [
        {
          title: "गणेश विसर्जन 2024",
          date: "17 सप्टेंबर 2024",
          location: "तांबी जोगेश्वरी मंडळ",
          mandal: "श्री गणेश मंडळ",
          description: "गणपती बाप्पाच्या विसर्जनात भव्य सहभाग",
          image: "/placeholder.svg?height=300&width=400",
          highlights: ["5000+ प्रेक्षक", "8 तास कार्यक्रम", "मीडिया कव्हरेज"],
          rating: 5,
        },
        {
          title: "शिव जयंती महोत्सव 2024",
          date: "19 फेब्रुवारी 2024",
          location: "शिवाजी पार्क",
          mandal: "छत्रपती शिवाजी मंडळ",
          description: "छत्रपती शिवाजी महाराजांच्या जयंतीचा उत्सव",
          image: "/placeholder.svg?height=300&width=400",
          highlights: ["3000+ प्रेक्षक", "6 तास कार्यक्रम", "पारंपरिक वेशभूषा"],
          rating: 5,
        },
        {
          title: "नवरात्री महोत्सव 2024",
          date: "15 अक्टोबर 2024",
          location: "अंधेरी स्पोर्ट्स क्लब",
          mandal: "दुर्गा मंडळ अंधेरी",
          description: "नवरात्रीच्या नऊ दिवसांचा धार्मिक उत्सव",
          image: "/placeholder.svg?height=300&width=400",
          highlights: ["9 दिवस कार्यक्रम", "महिला कलाकारांचा सहभाग", "दैनिक आरती"],
          rating: 4,
        },
        {
          title: "दहीहंडी स्पर्धा 2024",
          date: "26 ऑगस्ट 2024",
          location: "दादर पूर्व",
          mandal: "गोविंदा मंडळ",
          description: "श्री कृष्ण जन्माष्टमीच्या निमित्ताने दहीहंडी",
          image: "/placeholder.svg?height=300&width=400",
          highlights: ["50+ गोविंदा पथक", "रेकॉर्ड उंची", "पुरस्कार वितरण"],
          rating: 5,
        },
        {
          title: "स्वातंत्र्य दिन समारंभ 2024",
          date: "15 ऑगस्ट 2024",
          location: "शिवाजी पार्क",
          mandal: "स्वातंत्र्य सेनानी मंडळ",
          description: "देशभक्तीपर गीतांसह धोल ताशा कार्यक्रम",
          image: "/placeholder.svg?height=300&width=400",
          highlights: ["देशभक्ती गीते", "तिरंगा मार्च", "सरकारी मान्यता"],
          rating: 4,
        },
        {
          title: "शिमगोत्सव",
          date: "17 जुलै 2024",
          location: "पंढरपूर",
          mandal: "विठ्ठल भक्त मंडळ",
          description: "पंढरपूर वारीत सहभाग",
          image: "/placeholder.svg?height=300&width=400",
          highlights: ["पंढरपूर यात्रा", "21 दिवस वारी", "लाखो भाविक"],
          rating: 5,
        },
      ],
    },
    eventStatistics: {
      title: "कार्यक्रम आकडेवारी",
      stats: [
        { number: "500+", label: "एकूण कार्यक्रम", icon: "Calendar" },
        { number: "50+", label: "मंडळांसोबत सहकार्य", icon: "Users" },
        { number: "24+", label: "वर्षांचा अनुभव", icon: "Star" },
        { number: "100K+", label: "एकूण प्रेक्षक", icon: "Users" },
      ],
    },
    bookUsCta: {
      title: "आमच्याकडून कार्यक्रम बुक करा!",
      description: "तुमच्या मंडळाच्या कार्यक्रमात आमच्या ढोल-ताशा ध्वज पथकाला सहभागी होण्यासाठी आमंत्रित करा. तुमचा कार्यक्रम यशस्वी होण्यासाठी आम्ही कटिबद्ध आहोत.",
      buttonBookNow: "आमंत्रित करा",
    },
  },
  // Content for the Contact page (app/contact/page.tsx)
  contactPage: {
    header: {
      title: "संपर्क",
      description: "आमच्या सेवांबद्दल अधिक जाणून घ्यायचे असल्यास",
    },
    contactInfo: {
      title: "संपर्क माहिती",
      phone: {
        title: "फोन नंबर",
        president: "ललित पवार (अध्यक्ष): +91 97634 22233",
        main: "गणेश शिरके: +91 91584 88818",
        emergency: "महेश गोखले: +91 98509 89720",
      },
      whatsapp: {
        title: "WhatsApp",
        mainGroup: "मुख्य ग्रुप: +91 9763422233",
        quickReply: "त्वरित उत्तरासाठी WhatsApp वापरा",
      },
      email: {
        title: "ईमेल",
        info: "info@shivagarjana.com",
        booking: "booking@shivagarjana.com",
      },
      address: {
        title: "पत्ता",
        line1: "शिवगर्जना ढोल ताशा पथक",
        line2: "123, संस्कृती भवन",
        line3: "कोंढवा, पुणे - 411001",
        line4: "महाराष्ट्र, भारत",
      },
      hours: {
        title: "कार्यकाळ",
        weekdays: "सोमवार - शुक्रवार: 6:00 PM - 9:00 PM",
        weekends: "शनिवार - रविवार: 4:00 PM - 8:00 PM",
        holiday: "सार्वजनिक सुट्टी: बंद",
      },
    },
    socialMedia: {
      title: "सोशल मीडिया",
      facebook: "Facebook",
      instagram: "Instagram",
      youtube: "YouTube",
    },
    contactForm: {
      title: "संदेश पाठवा",
      firstName: { label: "नाव *", placeholder: "तुमचे नाव" },
      lastName: { label: "आडनाव *", placeholder: "तुमचे आडनाव" },
      email: { label: "ईमेल *", placeholder: "name@gmail.com" },
      phone: { label: "फोन नंबर *", placeholder: "+91 9999999999" },
      subject: { label: "विषय *", placeholder: "तुमच्या संदेशाचा विषय" },
      message: { label: "संदेश *", placeholder: "तुमचा संदेश येथे लिहा..." },
      submitButton: "संदेश पाठवा",
    },
    mapSection: {
      title: "आमचे स्थान",
      placeholderText: "Google Map येथे दिसेल",
      location: "कोंढवा, पुणे - 411001",
    },
    faqSection: {
      title: "वारंवार विचारले जाणारे प्रश्न",
      faqs: [
        {
          question: "बुकिंगसाठी किती आगाऊ नोटीस द्यावी लागते?",
          answer: "कमीत कमी 15 दिवस आगाऊ बुकिंग करावी. मोठ्या कार्यक्रमांसाठी 1 महिना आगाऊ बुकिंग करा.",
        },
        {
          question: "आमची फी किती आहे?",
          answer: "आमची फी कार्यक्रमाच्या प्रकार, कालावधी आणि कलाकारांच्या संख्येवर अवलंबून असते. तपशीलासाठी संपर्क साधा.",
        },
        {
          question: "तुम्ही पुण्याबाहेरही कार्यक्रम करता का?",
          answer: "होय, आम्ही महाराष्ट्रभर कार्यक्रम करतो. प्रवास खर्च वेगळा लागतो.",
        },
        {
          question: "नवीन सदस्यांना प्रशिक्षण मिळते का?",
          answer: "होय, आम्ही नवीन सदस्यांना मोफत प्रशिक्षण देतो. अनुभवी गुरुजी शिकवतात.",
        },
      ],
    },
  },
  // Content for the About page (app/about/page.tsx)
  aboutPage: {
    header: {
      title: "आमच्याबद्दल",
      description: "परंपरा, संस्कृती आणि एकजुटीच्या तालावर नाचणारा आमचा प्रवास",
    },
    foundationStory: {
      title: "आमची सुरुवात",
      year: "2002 साली",
      leader: "श्री ललित पवार",
      paragraph1:
        "शिवगर्जना ढोल ताशा वाद्य पथक हे पुण्यातील एक प्रसिद्ध वाद्य पथक आहे. याची स्थापना २००२ साली नूतन मराठी विद्यालय (एनएमवी) प्रशाळेचे माजी विद्यार्थी यांनी केली.",
      paragraph2: "या पथकाचा मुख्य उद्देश म्हणजे गणेशोत्सवासारख्या सणांमध्ये ढोल-ताशा वादनाची परंपरा जपणे आणि सदस्यांमध्ये एकात्मतेची भावना निर्माण करणे हा होता.",
      paragraph3: "आजही हे पथक उत्सवांमध्ये आपल्या जोशपूर्ण आणि शिस्तबद्ध वादनाने लोकांचे लक्ष वेधून घेते आणि पारंपरिक वाद्यसंगीत जिवंत ठेवण्याचे कार्य करते.",
      buttonText: "आमची टीम भेटा",
      badgeText: "2002 - स्थापना वर्ष",
    },
    missionVisionValues: {
      mission: {
        title: "आमचे ध्येय",
        description: "महाराष्ट्राच्या पारंपरिक संगीताचे संरक्षण करणे आणि पुढच्या पिढीला संस्कृतीच्या मुळाशी राहण्याची प्रेरणा देणे.",
      },
      vision: {
        title: "आमची दृष्टी",
        description: "महाराष्ट्राच्या संस्कृतीला जागतिक पातळीवर ओळख मिळवून देणे आणि तरुण पिढीला प्रेरणा देणे.",
      },
      values: {
        title: "आमची मूल्ये",
        description: "परंपरा, एकजूट, गुणवत्ता आणि समाजसेवेची भावना या आमच्या मूलभूत तत्त्वे आहेत.",
      },
    },
    milestones: {
      title: "आमच्या यशाच्या पायऱ्या",
      items: [
        {
          year: "2002",
          title: "पथकाची स्थापना",
          description: "नूतन मराठी विद्यालयाच्या माजी विद्यार्थ्यांनी एकत्र येत परंपरा, शिस्त आणि सांस्कृतिक अभिमान जपण्यासाठी हे पथक उभारले आहे.",
        },
        {
          year: "2008",
          title: "पहिला मोठा कार्यक्रम",
          description: "गणेशोत्सवातील मानाच्या गणपती मिरवणुकीत सहभागी होण्याचा सन्मान लाभल्याने, शिवगर्जना पथकाच्या कार्यात एक महत्त्वपूर्ण अध्याय जोडला गेला.",
        },
        {
          year: "2015",
          title: "1200+ सदस्य",
          description: "पथकाचा विस्तार",
        },
        {
          year: "2018",
          title: "महिला विभागाची स्थापना",
          description: "महिला कलाकारांचा समावेश",
        },
        {
          year: "2020",
          title: "ऑनलाइन कार्यक्रम",
          description: "कोविड काळात डिजिटल सादरीकरण",
        },
        {
          year: "2024",
          title: "2000+ सदस्य",
          description: "आजपर्यंतची सर्वात मोठी संख्या",
        },
      ],
    },
    valuesGrid: {
      title: "आमची मूल्ये",
      items: [
        { title: "परंपरा", description: "जुन्या पद्धतींचा आदर", icon: "🏛️" },
        { title: "एकजूट", description: "सर्वांसोबत मिळून काम", icon: "🤝" },
        { title: "गुणवत्ता", description: "उत्कृष्ट कामगिरी", icon: "⭐" },
        { title: "सेवा", description: "समाजसेवेची भावना", icon: "❤️" },
      ],
    },
    joinCta: {
      title: "आमच्यासोबत जुडा",
      description: "आमच्या संस्कृतीच्या संरक्षणात आणि प्रसारात सहभागी व्हा",
      buttonJoin: "सामील व्हा",
      buttonContact: "संपर्क साधा",
    },
  },
  // Content for the Home page (app/page.tsx)
  homePage: {
    hero: {
      altText: "Shivagarjana Dhol Tasha Dhwaj Pathak Pune",
      title: "शिवगर्जना ढोल ताशा पथक",
      tagline: "लक्ष्मी रोडचा बुलंद आवाज",
      stats: [
        { icon: "Music", number: "300+", label: "धोल ताशा" },
        { icon: "Flag", number: "50+", label: "ध्वज" },
        { icon: "Users", number: "500+", label: "सदस्य" },
        { icon: "Calendar", number: "24+", label: "वर्षे अनुभव" },
      ],
      buttonPerformance: "आमचा परफॉर्मन्स पहा",
      buttonBookNow: "आता बुक करा",
    },
    aboutSection: {
      title: "लक्ष्मी रोडचा बुलंद आवाज",
      description:
        "आमचा धोल ताशा पथक महाराष्ट्राच्या समृद्ध संस्कृतीचा वारसा जपतो. गणेश उत्सव, शिव जयंती आणि इतर सांस्कृतिक कार्यक्रमांमध्ये आम्ही पारंपरिक संगीताच्या जोरावर वातावरण उत्साहाने भरून टाकतो. आमच्या प्रत्येक तालावर महाराष्ट्राचा अभिमान दिसतो.",
      buttonText: "आमच्याबद्दल अधिक जाणून घ्या",
    },
    achievementsSection: {
      title: "आमची उपलब्धी",
      achievements: [
        {
          number: "500+",
          title: "यशस्वी कार्यक्रम",
          description: "विविध मंडळांसोबत सहभाग",
          icon: "Award",
        },
        {
          number: "24+",
          title: "वर्षांचा अनुभव",
          description: "सातत्याने सेवा",
          icon: "Star",
        },
        {
          number: "500+",
          title: "सक्रिय सदस्य",
          description: "सर्व वयोगटातील कलाकार",
          icon: "Users",
        },
      ],
    },
    recentEventsSection: {
      title: "अलीकडील कार्यक्रम",
      events: [
        {
          title: "गणेश विसर्जन 2024",
          location: "अखिल मंडई मंडळ, पुणे",
          date: "17 सप्टेंबर 2024",
          image: "/images/mayur.jpg",
          featured: true,
        },
        {
          title: "शिव जयंती उत्सव",
          location: "शिवाजी पार्क",
          date: "19 फेब्रुवारी 2024",
          image: "/images/vijubhau.jpg",
        },
        {
          title: "नवरात्री महोत्सव",
          location: "अंधेरी स्पोर्ट्स क्लब",
          date: "15 अक्टोबर 2024",
          image: "/images/maheshgokhale.jpg",
        },
      ],
      buttonText: "सर्व कार्यक्रम पहा",
    },
    servicesSection: {
      title: "आमच्या सेवा",
      services: [
        "गणेश उत्सव कार्यक्रम",
        "शिव जयंती समारंभ",
        "सांस्कृतिक कार्यक्रम",
        "धोल ताशा प्रशिक्षण",
        "कॉर्पोरेट इव्हेंट्स",
      ],
    },
    contactInfoSection: {
      title: "तुरंत संपर्क करा",
      description: "आमच्या कार्यक्रमांसाठी बुकिंग करा",
      buttonCall: "+919763422233",
      buttonEmail: "ईमेल करा",
      phoneNumber: "+919763422233",
      emailAddress: "shivagarjana@gmail.com",
    },
  },
}
