export type BackofficeNavKey = "operatori" | "grafici" | "gestione" | "admin";

export interface AdminAccount {
  username: string;
  password: string;
}

export interface OperatorAccount {
  id: string;
  username: string;
  password: string;
}

export interface NavItem {
  key: BackofficeNavKey;
  label: string;
}

export interface SideBarBackofficeProps {
  username?: string;
  activeItem?: BackofficeNavKey;
  onSelect?: (key: BackofficeNavKey) => void;
  onDisconnect?: () => void;
  onAdminClick?: () => void;
}

export interface AdminSectionProps {
  initialAdmin?: AdminAccount;
  onUpdateAdmin?: (updated: AdminAccount) => void;
  onCreateAdmin?: (created: AdminAccount) => void;
}

export interface OperatorSectionProps {
  initialOperators?: OperatorAccount[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
}

export interface ChartDataResponse {
  labels: string[];
  datasets: ChartDataset[];
}

export interface FetchChartDataParams {
  from?: string;
  to?: string;
  metric?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "operatori", label: "OPERATORI" },
  { key: "grafici", label: "GRAFICI" },
  { key: "gestione", label: "GESTIONE LOCALE" },
];

export const DEFAULT_ADMIN_ACCOUNT: AdminAccount = {
  username: "ADMIN_01",
  password: "AKJADDDS784.!",
};

export const DEFAULT_OPERATORS: OperatorAccount[] = [
  { id: "operatore_01", username: "OPERATORE_01", password: "AKJ@DS784.!" },
  { id: "operatore_02", username: "OPERATORE_02", password: "SD@GDS-@.!" },
];
