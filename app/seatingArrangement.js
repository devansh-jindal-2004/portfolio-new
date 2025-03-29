function generateSeatingPlan(classRollRanges, numRows, numCols) {
    let arrangement = [];
    let currentClassIndex = 0;  // Start from the first class
    let nextStudent = [classRollRanges[0][0], classRollRanges[1][0]];  // Track the last student placed in even/odd columns
    let totalStudents = classRollRanges.reduce((sum, [start, end]) => sum + (end - start + 1), 0);

    let studentsPlaced = 0;
    let currentClass = [0, 1];
    
    let firstRollNumbers = [classRollRanges[0][0], classRollRanges[1][0]];

    // Start placing students
    while (studentsPlaced < totalStudents) {
        let cls = [];  // Create a new seating chart for the current class
        let isRowEven = false;

        // Initialize the class seating chart with empty rows
        for (let r = 0; r < numRows; r++) {
            let row = [];
            for (let c = 0; c < numCols; c++) {
                row.push("-");  // Initialize with empty seats
            }
            cls.push(row);
        }
        
        // Create empty rows and columns and place students in alternating columns (even/odd)
        for (let c = 0; c < numCols; c++) {
            for (let r = 0; r < numRows; r++) {
                if (!isRowEven) {
                    if (currentClass[0] < classRollRanges.length) {
                        cls[r][c] = nextStudent[0];  // Assign student from class 1
                        studentsPlaced++;
                        nextStudent[0]++;  // Increment the student roll number for class 1
                        if (nextStudent[0] > classRollRanges[currentClass[0]][1]) {
                            // Move to the next class for even columns (class 1)
                            currentClass[0]+=2;
                            if (currentClass[0] < classRollRanges.length) {
                                nextStudent[0] = classRollRanges[currentClass[0]][0];
                                firstRollNumbers.push(classRollRanges[currentClass[0]][0])
                            }
                        }
                    }
                } else {
                    if (currentClass[1] < classRollRanges.length) {
                        cls[r][c] = nextStudent[1];  // Assign student from class 2
                        studentsPlaced++;
                        nextStudent[1]++;  // Increment the student roll number for class 2
                        if (nextStudent[1] > classRollRanges[currentClass[1]][1]) {
                            // Move to the next class for odd columns (class 2)
                            currentClass[1]+=2;
                            if (currentClass[1] < classRollRanges.length) {
                                nextStudent[1] = classRollRanges[currentClass[1]][0];
                                 firstRollNumbers.push(classRollRanges[currentClass[1]][0])
                            }
                        }
                    }
                }
                  // Increase the count of students placed
            }
            isRowEven = !isRowEven;  // Toggle between even and odd rows
        }
        arrangement.push(cls);  // Add the seating chart for this class to the final arrangement
    }
    // firstRollNumbers.forEach((rollno, index) => console.log(${index}. ${rollno}))
    
    return arrangement;
}

let classRollRanges = [
    [1, 7],  
    [101, 117],
    [201, 209]
];

let numRows = 8;
let numCols = 6;

let seatingPlan = generateSeatingPlan(classRollRanges, numRows, numCols);

seatingPlan.forEach((clas, index) => {
    console.log(`Class ${index + 1}: \n`);
    clas.forEach(row => {
        console.log(row.join(" | "));
    });
    console.log("\n");
});