export interface ProcessStepData {
  id: number;
  number: string;
  title: string;
  description: string;
  summary: string;
  duration: string;
  icon: string;
  details: string[];
  deliverables: string[];
}

export interface WorkProcessData {
  steps: ProcessStepData[];
}
