/*
 * File: Runtime.server.ts
 * File Created: Wednesday, 3rd March 2021 1:10:37 pm
 * Author: TetraDev
 */

import { Flamework } from "@flamework/core";

Flamework.addPaths("src/server/services");
Flamework.addPaths("src/server/components");
// Flamework.addPaths("src/shared/components");

Flamework.ignite();
