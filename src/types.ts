/**
 * Data structures for EverJoy Home Virtual Workspace & Second Brain
 */

export type UserRole = 'R&D Specialist' | 'Sourcing Lead' | 'Marketing Director' | 'New Hire';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatarUrl: string;
  online: boolean;
}

export type ZoneId = 'wiki' | 'ai-training' | 'ksao-matrix' | 'sla-tracker';

export interface OfficeZone {
  id: ZoneId;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  activeCount: string;
  badge: string;
  colorTheme: string;
}

export interface ComplianceStandard {
  id: string;
  code: string;
  title: string;
  targetMarket: 'US' | 'Canada' | 'Mexico' | 'North America';
  category: 'Drinkware' | 'Baby Products' | 'All';
  description: string;
  keyThresholds: {
    parameter: string;
    requirement: string;
    testMethod: string;
  }[];
  criticalNote: string;
  lastUpdated: string;
}

export interface SopItem {
  id: string;
  code: string;
  title: string;
  department: 'R&D' | 'Design' | 'Sourcing' | 'Marketing';
  previousSlaDays: number;
  currentSlaDays: number;
  owner: string;
  deliverables: string[];
  checklist: string[];
  handoverCondition: string;
}

export interface SkuIncidentLog {
  id: string;
  sku: string;
  productName: string;
  category: 'Drinkware' | 'Baby Products' | 'Outdoor & Home';
  incidentType: 'Rò rỉ nắp (Seal Leakage)' | 'Mất chân không (Vacuum Loss)' | 'Thôi nhiễm nhiệt (Thermal Leaching)' | 'Bong tróc sơn (Coating Peeling)' | 'Hàm lượng Chì / BPA (Lead/BPA Test)' | 'Độ bền cơ học (Drop Test)';
  batchNumber: string;
  testLab: string;
  rootCause: string;
  correctiveAction: string;
  preventiveRule: string;
  status: 'Đã khắc phục 100%' | 'Đang theo dõi lô mới';
  dateLogged: string;
}

export interface KsaoSkill {
  id: string;
  title: string;
  category: 'Knowledge' | 'Skills' | 'Abilities' | 'Other';
  description: string;
  progressPercent: number;
  targetRole: 'R&D' | 'Sourcing' | 'Marketing' | 'Cross-functional';
  completed: boolean;
  xpReward: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  references?: string[];
  actions?: string[];
}
