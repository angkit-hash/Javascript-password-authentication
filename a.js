let value_person = String(prompt("Please enter the password ", "Enter here"));
let count = 1;

while(value_person != 10)
{   count++; 
    value_person = String(prompt("Please enter the password ", "Enter here"));

    if(count == 5)
    {
        String(prompt("Too many attempts, you should consider resetting your password"));
        
    }
}


