export type AriaAttribute = string;
export type AriaRole = string;

export type AriaRoleDefinition = {
    allowedArias: AriaCharacteristics,
    selector: string,
};
export type AriaRoles = {
    [attribute: AriaRole]: AriaRoleDefinition;
};

export type AriaCharacteristics = AriaAttribute[];
