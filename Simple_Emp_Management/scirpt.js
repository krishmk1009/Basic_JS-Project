(async () => {
    const empName = document.getElementById('empName');
    const empAge = document.getElementById('empAge');

    try {
        const res = await fetch('./src/data.json');
        const data = await res.json();
        const employees = data;

        const employeeListElement = document.getElementById('employeeList');

        function renderEmployeeList() {
            employeeListElement.innerHTML = '';




            employees.forEach(employee => {
                const employeeElement = document.createElement('li');

                employeeElement.addEventListener('click', (event) => {
                    const clickedElement = event.target;
                    if (clickedElement.classList.contains('employee')) {
                        const allEmp = document.querySelectorAll('.employee');
                        allEmp.forEach(emp => {
                            emp.classList.remove('selected_employee');
                        })
                        clickedElement.classList.add('selected_employee');
                        displyaEmployeeDetails(employee);
                    }
                });

                employeeElement.innerHTML = employee.name;
                employeeListElement.appendChild(employeeElement);
                employeeElement.classList.add('employee');
            });
        }



        function displyaEmployeeDetails(employee) {

            empName.innerHTML = employee.name;
            empAge.innerHTML = employee.age;
        }



        //function for adding the emp to existing list


        const addEmpBtn = document.getElementById('add_btn');


        addEmpBtn.addEventListener('click', () => {
            const name = window.prompt('Enter the name of the employee');
            const age = window.prompt('Enter the age of the employee');


            if(!name || !age){
                alert('Please enter the details');
                return;
            }
            const emp = {
                name,
                age
            };

            employees.push(emp);

            renderEmployeeList();
        })

        renderEmployeeList();

    } catch (error) {
        console.log(error);
    }





})();
