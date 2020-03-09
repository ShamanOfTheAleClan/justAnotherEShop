/**
 * This utility function is used to determine the orgiinal styles array
 *
 * @param {Array} styles
 * @param {String} justify
 * @param {String} align
 * @param {Object} c
 *
 */

const justifyHelper = (styles, justify, c) => {
   switch (justify) {
      case "space-between":
         styles.push(c.spaceBetween);
         break;
      case "center":
         styles.push(c.justifyCenter);
         break;
      default:
         throw new Error("Wrong flex justify parameter");
   }
};

const alignHelper = (styles, align, c) => {
   switch (align) {
      case "center":
         styles.push(c.alignCenter);
         break;
      case "flex-start":
         styles.push(c.alignFlexStart);
         break;
      case "flex-end":
         styles.push(c.alignFlexEnd);
         break;
      default:
         throw new Error("Wrong flex align parameter");
   }
};

export { justifyHelper, alignHelper };
