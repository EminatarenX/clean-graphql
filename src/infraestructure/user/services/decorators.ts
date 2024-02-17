export function Validate(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let method = descriptor.value;
    descriptor.value = function (...args: any) {
      if (!emailRegex.test(args[1].input.email))
        throw new Error("This is not an email");
  
      return method.apply(this, args);
    };
  }