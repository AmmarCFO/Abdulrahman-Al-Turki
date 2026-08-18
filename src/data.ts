import { OwnerProfile, BranchDetails, OperatingReport } from './types';
import { IMAGES } from './constants/images';

export const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png";

export const ownerProfile: OwnerProfile = {
  salutation: {
    ar: "الأستاذ",
    en: "Mr."
  },
  name: {
    ar: "عبدالرحمن بن عبدالعزيز التركي",
    en: "Abdulrahman bin Abdulaziz Al-Turki"
  },
  ownerCode: "OWNER-ALTURKI-2026-056",
  email: "alturki@example.com",
  phone: "+966 50 123 4567",
  contractDate: "2026-04-25",
  totalBranches: 1,
  totalUnits: 2,
  cumulativeEarnings: -44724.09
};

export const branchesList: BranchDetails[] = [
  {
    id: "sahman-56",
    branchNumber: "56",
    fullCode: "MTH-SHM-56",
    name: {
      ar: "مثوى ٥٦ - حي السحمان",
      en: "Mathwaa 56 — Al-Sahman District"
    },
    location: {
      ar: "حي السحمان",
      en: "Al-Sahman District"
    },
    district: {
      ar: "حي السحمان",
      en: "Al-Sahman District"
    },
    city: {
      ar: "الرياض",
      en: "Riyadh"
    },
    address: {
      ar: "حي السحمان، المملكة العربية السعودية",
      en: "Al-Sahman District, Kingdom of Saudi Arabia"
    },
    photos: IMAGES.all,
    totalUnits: 2,
    unitBreakdown: [
      { type: { ar: "شقة ثلاث غرف نوم (3BR)", en: "3 Bedrooms (3BR)" }, count: 1, avgMonthlyRate: "—" },
      { type: { ar: "استوديو (Studio)", en: "Studio" }, count: 1, avgMonthlyRate: "—" }
    ],
    contactPhone: "+966 56 208 9171"
  }
];

export const initialOperatingReports: OperatingReport[] = [
  {
    id: "REP-56-01",
    reportNumber: "56",
    periodKey: "2026-Q2-Q3",
    periodName: {
      ar: "٢٥ أبريل ٢٠٢٦ - ٣١ يوليو ٢٠٢٦",
      en: "25 Apr 2026 to 31 Jul 2026"
    },
    periodDates: {
      ar: "من ٢٥ أبريل ٢٠٢٦ إلى ٣١ يوليو ٢٠٢٦",
      en: "25 Apr 2026 to 31 Jul 2026"
    },
    quarter: "25 Apr 2026 - 31 Jul 2026",
    year: 2026,
    branchId: "sahman-56",
    branchName: {
      ar: "مثوى ٥٦: حي السحمان",
      en: "Mathwaa 56: Al-Sahman District"
    },
    tagline: {
      ar: "تقرير أداء التشغيل المعتمد",
      en: "Certified Operating Performance Report"
    },
    clientName: {
      ar: "عبدالرحمن بن عبدالعزيز التركي",
      en: "Abdulrahman bin Abdulaziz Al-Turki"
    },
    
    // Core Required Metrics
    occupancyRate: 37,
    totalContracts: 14959.70, // Revenue
    totalRevenue: 14959.70,   // Revenue
    avgMonthlyReturn: 4674.90,
    directExpenses: 946.50,
    operatorSharePercentage: 25,
    operatorShareAmount: 3739.92,
    capitalExpenses: 54997.37,
    netToOwner: 11219.78,

    // Segregated reporting for 3BR and Studio units
    unitReports: [
      {
        id: "U1-3BR",
        unitNumber: "1",
        unitName: { ar: "شقة ثلاث غرف نوم (3BR)", en: "3 Bedrooms (3BR)" },
        occupancyRate: 42,
        periodRevenue: 11721.95,
        collectedRevenue: 11721.95,
        operatorShare: 2930.49,
        netToOwner: 8791.46
      },
      {
        id: "U2-STUDIO",
        unitNumber: "2",
        unitName: { ar: "استوديو (Studio)", en: "Studio" },
        occupancyRate: 32,
        periodRevenue: 3237.75,
        collectedRevenue: 3237.75,
        operatorShare: 809.43,
        netToOwner: 2428.32
      }
    ],

    // Monthly Occupancy Trend (April 2026 to July 2026)
    monthlyOccupancyTrend: [
      {
        monthKey: "2026-04",
        monthName: { ar: "أبريل ٢٠٢٦", en: "April 2026" },
        occupancyRate: 19.5,
        studioRate: 0,
        threeBedRate: 39
      },
      {
        monthKey: "2026-05",
        monthName: { ar: "مايو ٢٠٢٦", en: "May 2026" },
        occupancyRate: 36,
        studioRate: 32,
        threeBedRate: 40
      },
      {
        monthKey: "2026-06",
        monthName: { ar: "يونيو ٢٠٢٦", en: "June 2026" },
        occupancyRate: 20,
        studioRate: 34,
        threeBedRate: 6
      },
      {
        monthKey: "2026-07",
        monthName: { ar: "يوليو ٢٠٢٦", en: "July 2026" },
        occupancyRate: 57.5,
        studioRate: 35,
        threeBedRate: 80
      }
    ],

    totalUnits: 2,
    occupiedUnits: 1,
    adr: 242,
    revPar: 90,
    revenueBreakdown: [
      { category: { ar: "إيراد عقود الوحدات السكنية", en: "Residential Units Rental Revenue" }, amount: 14959.70, percentage: 100 }
    ],
    maintenanceCostsCovered: 946.50,
    utilitiesCostCovered: 0,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260731-MTH56",
    payoutDate: "2026-07-31",
    bankAccount: "",
    notes: {
      ar: "تقرير أداء التشغيل للأستاذ عبدالرحمن بن عبدالعزيز التركي - فرع ٥٦ (حي السحمان). سجلت الوحدتان نسبة إشغال ٣٧٪، بإيراد قدره ١٤,٩٥٩٫٧٠ ريال، ومتوسط عائد شهري ٤,٦٧٤٫٩٠ ريال، ومصاريف مباشرة ٩٤٦٫٥٠ ريال، وحصة مشغل ٣,٧٣٩٫٩٢ ريال (٢٥٪)، ومصاريف رأسمالية ٥٤,٩٩٧٫٣٧ ريال، وصافي عائد للعميل −٤٤,٧٢٤٫٠٩ ريال.",
      en: "Certified operating performance report for Abdulrahman bin Abdulaziz Al-Turki - Branch 56 (Al-Sahman District). The 2 units achieved 37% occupancy rate, with SAR 14,959.70 revenue, SAR 4,674.90 average monthly return, SAR 946.50 direct expenses, SAR 3,739.92 operator's share (25%), SAR 54,997.37 capital expenditures, and -SAR 44,724.09 net return to client."
    },
    additionalRemarks: []
  }
];

export const mathwaaBrandInfo = {
  hqAddress: {
    ar: "الصحافة، الرياض، المملكة العربية السعودية",
    en: "Al Sahafah District, Riyadh, Kingdom of Saudi Arabia"
  },
  phoneDirect: "+966 56 208 9171",
  phoneTollFree: "+966 9200 15627",
  email: "owners@mathwaa.com",
  website: "www.mathwaa.com"
};
