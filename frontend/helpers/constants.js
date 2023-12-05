export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "cases",
		"outputs": [
			{
				"internalType": "string",
				"name": "caseNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "currentDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateOfLogging",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "collectedBy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sceneLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "storageLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "evidenceType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "evidenceDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "file",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_caseNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfLogging",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_collectedBy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sceneLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_storageLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_evidenceType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_evidenceDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_file",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_participants",
				"type": "address[]"
			}
		],
		"name": "createCase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			}
		],
		"name": "findUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fullname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					}
				],
				"internalType": "struct CaseManagement.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fullname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_role",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fullname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]