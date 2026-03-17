import { type ContactInquiry, type ContactInquiryWithId } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createInquiry(inquiry: ContactInquiry): Promise<ContactInquiryWithId>;
  getInquiries(): Promise<ContactInquiryWithId[]>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<string, ContactInquiryWithId>;

  constructor() {
    this.inquiries = new Map();
  }

  async createInquiry(inquiry: ContactInquiry): Promise<ContactInquiryWithId> {
    const id = randomUUID();
    const entry: ContactInquiryWithId = {
      ...inquiry,
      id,
      createdAt: new Date().toISOString(),
    };
    this.inquiries.set(id, entry);
    return entry;
  }

  async getInquiries(): Promise<ContactInquiryWithId[]> {
    return Array.from(this.inquiries.values());
  }
}

export const storage = new MemStorage();
