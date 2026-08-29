export const content = {
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: { about: "نبذة", projects: "المشاريع", skills: "المهارات", certs: "الشهادات", contact: "تواصل" },
    hero: {
      prompt: "ismail@backend:~$ whoami",
      name: "إسماعيل عبدالرحيم",
      role: "Backend Developer — Python / Django",
      status: "STATUS: متاح للعمل",
      cta: "تواصل معي",
    },
    about: {
      title: "نبذة",
      text: "مهندس برمجيات ونظم معلومات، خريج الجامعة السورية الخاصة (SPU). أعمل بشكل أساسي على Python وDjango، وأمتلك خبرة ثانوية في Laravel وقواعد بيانات SQL وإدارة أنظمة Linux/VPS. حالياً أبحث عن فرصة كمطور Backend في سوريا ودول الخليج.",
    },
    projects: {
      title: "المشاريع",
      items: [
        {
          name: "نظام أرشفة إلكتروني هرمي",
          tag: "مشروع حقيقي — قيد الاستخدام الفعلي",
          stack: "Django · MySQL/MariaDB",
          desc: "نظام أرشفة إلكتروني مخصص لمؤسسة تضم 14 وحدة إدارية وعدد من الأقسام الفرعية داخل كل وحدة. صُمم بدلاً من استخدام أنظمة جاهزة (Mayan EDMS، OpenKM) بسبب تعقيد صلاحياتها.",
          points: [
            "نظام صلاحيات هرمي بأربعة مستويات: مدير عام، مدير وحدة، رئيس قسم، موظف",
            "كل مستخدم يرى فقط الوثائق ضمن نطاق صلاحيته",
            "ترقيم تلقائي للوثائق يتصفّر عند بداية كل سنة، بدون تكرار ضمن نفس الوحدة",
            "لوحة إدارة تقنية منفصلة تماماً عن واجهة المستخدمين عبر Django Admin",
            "هوية بصرية مخصصة تتبع نظام الهوية الرقمية السورية الرسمية",
          ],
        },
        {
          name: "Smart Examination System",
          tag: "مشروع التخرج",
          stack: "Django · SQLite · Ollama AI",
          desc: "نظام امتحانات إلكتروني بصلاحيات دقيقة تتجاوز 30 صلاحية موزعة على أدوار الإداري والمعلم والطالب، مع وحدة لمنع الغش ومراقبة حية أثناء الامتحان.",
          points: [
            "تكامل مع نموذج ذكاء اصطناعي محلي (Ollama) لتوليد الأسئلة",
            "نظام إشعارات بالبريد الإلكتروني",
            "تحدٍ تقني رئيسي: ضبط دقة الأسئلة المولّدة من النموذج",
          ],
        },
      ],
    },
    skills: {
      title: "المهارات",
      groups: [
        { label: "Backend", items: ["Python", "Django"] },
        { label: "أساسي ثانوي", items: ["Laravel"] },
        { label: "قواعد البيانات", items: ["SQL", "MySQL/MariaDB"] },
        { label: "أنظمة", items: ["Linux", "إدارة VPS"] },
      ],
    },
    certs: {
      title: "الشهادات",
      items: [
        "Google IT Support Professional Certificate",
        "System Administration Fundamentals — Google",
        "Building MySQL Databases — Meta",
        "Laravel Developer Basics — SCS",
        "Django Web Framework — Coursera",
        "APIs (Django Specialization) — Coursera",
      ],
    },
    contact: {
      title: "تواصل معي",
      text: "منفتح على فرص عمل بدوام كامل في مجال تطوير الـ Backend.",
      email: "ismailmu24@gmail.com",
      github: "github.com/ismailmu6",
      linkedin: "linkedin.com/in/ismail-abdulrahim-790a5731a",
    },
    footer: "© 2026 إسماعيل عبدالرحيم",
    langSwitch: "English",
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav: { about: "About", projects: "Projects", skills: "Skills", certs: "Certifications", contact: "Contact" },
    hero: {
      prompt: "ismail@backend:~$ whoami",
      name: "Ismail Abdulrahim",
      role: "Backend Developer — Python / Django",
      status: "STATUS: AVAILABLE FOR HIRE",
      cta: "Get in touch",
    },
    about: {
      title: "About",
      text: "Software & Information Systems Engineer, graduate of Syrian Private University (SPU). I work primarily with Python and Django, with secondary experience in Laravel, SQL databases, and Linux/VPS administration. Currently looking for a backend developer role in Syria and the Gulf region.",
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Hierarchical Electronic Archiving System",
          tag: "Real project — in active production use",
          stack: "Django · MySQL/MariaDB",
          desc: "A custom-built document archiving system for an organization with 14 administrative units and multiple sub-departments in each. Built from scratch instead of adopting off-the-shelf systems (Mayan EDMS, OpenKM) due to their permission-model complexity.",
          points: [
            "Four-tier hierarchical permission system: general manager, unit manager, department head, employee",
            "Every user sees only the documents within their own scope",
            "Auto-incrementing document numbering that resets each year, unique within its unit",
            "Fully separate technical admin panel via Django Admin",
            "Custom visual identity following Syria's official digital identity system",
          ],
        },
        {
          name: "Smart Examination System",
          tag: "Graduation project",
          stack: "Django · SQLite · Ollama AI",
          desc: "An online examination system with fine-grained role-based access control (30+ permissions across Admin, Teacher, and Student roles), an anti-cheating module, and live exam proctoring.",
          points: [
            "Integrated a local AI model (Ollama) for exam question generation",
            "Email notification system",
            "Key technical challenge: improving the accuracy of AI-generated questions",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "Backend", items: ["Python", "Django"] },
        { label: "Secondary", items: ["Laravel"] },
        { label: "Databases", items: ["SQL", "MySQL/MariaDB"] },
        { label: "Systems", items: ["Linux", "VPS Administration"] },
      ],
    },
    certs: {
      title: "Certifications",
      items: [
        "Google IT Support Professional Certificate",
        "System Administration Fundamentals — Google",
        "Building MySQL Databases — Meta",
        "Laravel Developer Basics — SCS",
        "Django Web Framework — Coursera",
        "APIs (Django Specialization) — Coursera",
      ],
    },
    contact: {
      title: "Get in touch",
      text: "Open to full-time backend development opportunities.",
      email: "ismailmu24@gmail.com",
      github: "github.com/ismailmu6",
      linkedin: "linkedin.com/in/ismail-abdulrahim-790a5731a",
    },
    footer: "© 2026 Ismail Abdulrahim",
    langSwitch: "العربية",
  },
};
