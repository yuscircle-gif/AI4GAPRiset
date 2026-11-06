export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  originalPrice: number;
  highlightBenefit: string;
  deliverables: string[];
  toolsUsed: string[];
}

export interface ModuleItem {
  number: string;
  title: string;
  description: string;
  topics: string[];
  output: string;
  tools: string[];
}

export interface PainPoint {
  id: string;
  quote: string;
  title: string;
  description: string;
  impact: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  tool: string;
  role: string;
  timeTaken: string;
  manualTime: string;
  action: string;
  samplePromptOrAction: string;
  outputArtifact: string;
}

export interface OrderFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  institution: string;
  paymentMethod: 'qris' | 'bca' | 'mandiri' | 'gopay';
}
