/**
 * Utility functions for Bengali numbers and time elapsed calculation
 */

const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function toBengaliNumber(num: number | string): string {
  const str = String(num);
  return str.replace(/\d/g, (d) => BENGALI_DIGITS[parseInt(d, 10)]);
}

export interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  isPast: boolean;
}

/**
 * Calculates exact calendar difference in years, months, days, hours, mins, secs
 */
export function calculateTimeElapsed(departureDateStr: string): TimeElapsed {
  const departure = new Date(departureDateStr);
  const now = new Date();

  const diffMs = now.getTime() - departure.getTime();
  const isPast = diffMs >= 0;

  if (!isPast) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0,
      isPast: false
    };
  }

  // Calendar based calculation
  let years = now.getFullYear() - departure.getFullYear();
  let months = now.getMonth() - departure.getMonth();
  let days = now.getDate() - departure.getDate();
  let hours = now.getHours() - departure.getHours();
  let minutes = now.getMinutes() - departure.getMinutes();
  let seconds = now.getSeconds() - departure.getSeconds();

  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }
  if (hours < 0) {
    days -= 1;
    hours += 24;
  }
  if (days < 0) {
    months -= 1;
    // get days in previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    totalDays,
    isPast: true
  };
}
