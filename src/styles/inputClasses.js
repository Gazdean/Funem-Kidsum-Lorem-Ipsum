export default function inputClasses(errors, target) {

    return `text-sm md:text-base p-1 px-2 rounded-lg border border-gray-300 focus:border-2 focus:border-blue-700 focus:outline-none ${errors[target] && 'focus:border-2 focus:border-pink-700 focus:outline-none border-2 border-pink-700 outline-none'}`
} 