/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {

  // Validate inputs
  if (billAmount <= 0 || !Number.isInteger(serviceRating) || serviceRating < 1 || serviceRating > 5) {
    return null;
  }

  // Define tip percentages based on service rating
  const tipPercentages = {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 25
  };
  
  const tipPercentage = tipPercentages[serviceRating];

  // Calculate tip amount and total amount
  const tipAmount = parseFloat((billAmount * (tipPercentage / 100)).toFixed(2));
  const totalAmount = parseFloat((billAmount + tipAmount).toFixed(2));
  return { tipPercentage, tipAmount, totalAmount };

}
