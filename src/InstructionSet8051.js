
export const instructions = [

    {
        "mnemonic":"NOP",
        "Opcode":"00",
        "NumberOfBytes":"1",
        "NumberOfOprend":"0",
        "Oprend": [],
        "MachineCycle":1
    },
    {
        "mnemonic":"AJMP",
        "Opcode":"01",
        "NumberOfBytes":"2",
        "NumberOfOprend":"1",
        "Oprend": ["Label"],
        "MachineCycle":2
    },
    {
        "mnemonic":"LJMP",
        "Opcode":"02",
        "NumberOfBytes":"3",
        "NumberOfOprend":"1",
        "Oprend": ["Label"],
    },
    {
        "mnemonic":"RR",
        "Opcode":"03",
        "NumberOfBytes":"1",
        "NumberOfOprend":"1",
        "Oprend": ["A"]
    },
    {
        "mnemonic":"INC",
        "Opcode":"04",
        "NumberOfBytes":"1",
        "NumberOfOprend":"1",
        "Oprend": ["A"]
    },
    {
        "mnemonic":"INC",
        "Opcode":"05",
        "NumberOfBytes":"2",
        "NumberOfOprend":"1",
        "Oprend": ["Address"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"74",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["A","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"75",
        "NumberOfBytes":"3",
        "NumberOfOprend":"2",
        "Oprend": ["Address","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"76",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["@R0","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"77",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["@R1","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"78",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R0","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"79",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R1","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"7A",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R2","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"7B",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R3","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"7C",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R4","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"7D",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R5","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"7E",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R6","Immediate"]
    },
    {
        "mnemonic":"MOV",
        "Opcode":"7F",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R7","Immediate"]
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"D5",
        "NumberOfBytes":"3",
        "NumberOfOprend":"2",
        "Oprend": ["Address","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"D8",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R0","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"D9",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R1","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"DA",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R2","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"DB",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R3","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"DC",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R4","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"DD",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R5","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"DE",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R6","Label"],
        "JumpMode":"Relative"
    },
    {
        "mnemonic":"DJNZ",
        "Opcode":"DF",
        "NumberOfBytes":"2",
        "NumberOfOprend":"2",
        "Oprend": ["R7","Label"],
        "JumpMode":"Relative"
    },
]