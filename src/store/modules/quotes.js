const DEFAULT_STATE = {
    values: [
        {
            "id": "5e25adf5ca150f293e0e8e23",
            "content": "So I use a lot of 409",
            "type": "QUOTE",
            "tags": ["middle", "test"],
            "studies": [158],
            "created_by": {
                "name": "Admin",
                "surname": "Adminov",
                "email": "admin@usertrb.net",
                "client_id": 1046,
                "client": { "id": 1046, "name": "UserTribe" }
            },
            "video": { "id": 330 },
            "start_timestamp": 67.5,
            "end_timestamp": 69.2,
            "start": 67.5,
            "end": 69.2,
            "participant": {
                "id": 474,
                "name": "Notcopied",
                "email": "notcopied@aaa.com",
                "nationality": "Bangladesh",
                "age": 34
            }
      },
      {
        "id": "5e25ae05ca150f293e0e8e24",
        "content": "I use and I think also price is",
        "type": "QUOTE",
        "tags": ["no_task"],
        "studies": [158],
        "created_by": {
            "name": "Admin",
            "surname": "Adminov",
            "email": "admin@usertrb.net",
            "client_id": 1046,
            "client": { "id": 1046, "name": "UserTribe" }
        },
        "video": { "id": 330 },
        "start_timestamp": 99,
        "end_timestamp": 104.3,
        "start": 99,
        "end": 104.3,
            "participant": {
            "id": 474,
            "name": "Notcopied",
            "email": "notcopied@aaa.com",
            "nationality": "Bangladesh",
            "age": 34
        }
      }
    ]
};

export default function(state=DEFAULT_STATE, action) {

    return state;
}