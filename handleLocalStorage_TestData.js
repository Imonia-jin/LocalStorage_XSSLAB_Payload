	function handleLocalStorage(method, key, value) {
			
		  switch (method) {
			case 'get' : {
			  let temp = window.localStorage.getItem(key);
			  if (temp) {
				return temp
			  } else {
				return false
			  }
			}
			case 'set' : {
			  window.localStorage.setItem(key, value);
			  break
			}
			case 'remove': {
			  window.localStorage.removeItem(key);
			  break
			}
			default : {
			  return false
			}
		  }
		}
handleLocalStorage('set', 'Key1', 'value1');
handleLocalStorage('set', 'Key2', 'value2');
handleLocalStorage('set', 'Key3', 'value3');
handleLocalStorage('set', 'Key3', 'value3');