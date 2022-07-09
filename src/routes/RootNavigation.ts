
import { createNavigationContainerRef } from '@react-navigation/native';

export const stack: {key: string, params?: any}[] = [];

// Reference
export const navigationRef = createNavigationContainerRef()

export function navigate(name: string, params?: any) {
  
  if (navigationRef.isReady()) {

    if (params == null || params == undefined){
      navigationRef.navigate(name);
      stack.push(name);
    }else{
      navigationRef.navigate({key: name, params: params});
      stack.push({key: name, params: params});
    }
  }
}

export function peek(): {key: string, params?: any} {
  return stack[stack.length - 1];
}

export function goBack() {
  let path = stack.pop();

  if (navigationRef.isReady()) {
    navigationRef.navigate(peek());
  }
}


