import { RentalAgreementInterface } from 'interfaces/rental-agreement';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  status: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  rental_agreement?: RentalAgreementInterface[];
  company?: CompanyInterface;
  _count?: {
    rental_agreement?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
}
