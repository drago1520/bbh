'use server';

import { ErrorLogger, errorLogger } from '@/utils/error';
import { ContactFormData } from '../../conference/components/types';
import { sendEmailSMTP } from '@/lib/nodemailer';

export async function sendInquiry({ email, message }: ContactFormData): Promise<{ success: true; message: string } | ErrorLogger> {
  try {
    const result = await sendEmailSMTP({ html: `Благодаря, че направихте запитване към Burgas Business Hub. Вашето съобщение "${message}" е прието и ще отговорим в най-скоро време!`, subject: 'Запитване от сайт - BBH', to: ['dragomir1520@gmail.com', email, 'info@burgasbh.com', 'office@webtact.bg'] });
    return { success: true, message: 'Съобщението е изпратено. Благодарим!' };
  } catch (e) {
    return errorLogger(e);
  }
}
