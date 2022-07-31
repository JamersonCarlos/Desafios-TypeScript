//Usando a tipagem estática com interfaces que o typeScript permite 

interface employeeInterface { 
    code?: number, 
    name?: string
}

let employee: employeeInterface = {} 
employee.code = 20; 
employee.name = 'jamerson';