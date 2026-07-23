import { supabase } from '../lib/supabase';

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(payload: ContactMessagePayload): Promise<void> {
  const { error } = await supabase
    .from('messages')
    .insert([
      {
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      },
    ]);

  if (error) {
    console.error('[messageService] Failed to insert contact message:', error.message);
    throw error;
  }
}
