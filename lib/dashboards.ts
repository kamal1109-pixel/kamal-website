export type Dashboard = {
  id: string;
  title: string;
  desc: string;
  url: string;
};

export type DashboardGroup = {
  name: string;
  items: Dashboard[];
};

export const dashboardGroups: DashboardGroup[] = [
  {
    name: "Training",
    items: [
      {
        id: "ramp-up",
        title: "Ramp up",
        desc: "New joiner ramp up progress",
        url: "https://docs.google.com/spreadsheets/d/1-sHanba2frMZTR3qNdLiDE76UEmAg6hmCTuGGEZPaK0/edit?gid=1774207249#gid=1774207249",
      },
      {
        id: "ptl-training",
        title: "PTL training",
        desc: "PTL training coverage and completion",
        url: "https://docs.google.com/spreadsheets/d/1-sHanba2frMZTR3qNdLiDE76UEmAg6hmCTuGGEZPaK0/edit?gid=1774207249#gid=1774207249",
      },
      {
        id: "ddd",
        title: "DDD",
        desc: "DDD training dashboard",
        url: "https://docs.google.com/spreadsheets/d/10WJkJzQXH6iVfsonxpLwv5FWfemzeaiOqMZkqOkE_Go/edit?gid=957992789#gid=957992789",
      },
      {
        id: "defaulter-training",
        title: "Defaulter training",
        desc: "Defaulter training status",
        url: "https://docs.google.com/spreadsheets/d/178NDFN1mNYwM0Pde8a5VWZ-dJJjXR-41oD-7Fbn4kd4/edit?gid=788298256#gid=788298256",
      },
      {
        id: "refresher-training",
        title: "Refresher training",
        desc: "Refresher training completion",
        url: "https://docs.google.com/spreadsheets/d/1eS0mTwjSlpy6KkltgCWGsae9Kc78fbSUbJ3X1wq-Izw/edit?gid=646238560#gid=646238560",
      },
    ],
  },
  {
    name: "Scan rate",
    items: [
      {
        id: "primary-scan-rate",
        title: "Primary scan rate",
        desc: "Primary scan rate by hub",
        url: "https://docs.google.com/spreadsheets/d/1-sHanba2frMZTR3qNdLiDE76UEmAg6hmCTuGGEZPaK0/edit?gid=1774207249#gid=1774207249",
      },
      {
        id: "manifest-scan-rate",
        title: "Manifest scan rate",
        desc: "Manifest scan rate by hub",
        url: "https://docs.google.com/spreadsheets/d/1Cn9o-x9rZfA0j5S4nl_mXmQrgFlgBKQ-RTCAvsOwdP0/edit?gid=2146713997#gid=2146713997",
      },
    ],
  },
  {
    name: "Audits and checks",
    items: [
      {
        id: "checklist",
        title: "Checklist",
        desc: "Checklist compliance",
        url: "https://docs.google.com/spreadsheets/d/1t44JVdQEBuxxHxjk101pwQ57GK4d41rg2zFs-liEq78/edit?gid=1082981080#gid=1082981080",
      },
      {
        id: "stress-test",
        title: "Stress test",
        desc: "Stress test results",
        url: "https://docs.google.com/spreadsheets/d/1w8i13uqTttYa7nAlB4fXU_d0ilgCGmiUhi2jHEw30ps/edit?gid=0#gid=0",
      },
      {
        id: "bag-audit",
        title: "Bag audit",
        desc: "Bag audit findings",
        url: "https://docs.google.com/spreadsheets/d/1XXxNkT8LPDoj8JbCR7X6GvfJ-d4RhfqLQSzSExO6Hhw/edit?gid=1661938646#gid=1661938646",
      },
      {
        id: "process-audit",
        title: "Process audit",
        desc: "Process audit scores",
        url: "",
      },
      {
        id: "sc-process-audit",
        title: "SC process audit",
        desc: "Service centre process audit scores",
        url: "",
      },
    ],
  },
  {
    name: "Tracking",
    items: [
      {
        id: "ld-tracker",
        title: "L&D tracker",
        desc: "L&D tracker",
        url: "https://docs.google.com/spreadsheets/d/1v8SFh6FxkKpzEi9RdXNKwktxhxVooj8sT9F-CR_DV-A/edit?gid=0#gid=0",
      },
      {
        id: "north-zone",
        title: "North Zone",
        desc: "SC Process Audit Summary-North Zone",
        url: "https://docs.google.com/spreadsheets/d/11IlSx4ZFYx2bfP4R8__fU1z_9oeLTykCdvnsyyITbrE/edit?gid=0#gid=0",
      },
    ],
  },
];

export function safeUrl(url: string) {
  const trimmed = url.trim();
  return /^https:\/\//i.test(trimmed) ? trimmed : "";
}
