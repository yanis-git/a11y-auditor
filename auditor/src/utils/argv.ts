import { parse } from "ts-command-line-args";

interface AuditorCliArguments {
  url: string;
  debug: boolean;
  help?: boolean;
}

export const args = parse<AuditorCliArguments>(
  {
    url: { type: String, alias: "u" },
    debug: { type: Boolean, alias: "d" },
    help: {
      type: Boolean,
      optional: true,
      alias: "h",
      description: "Prints this usage guide",
    },
  },
  {
    helpArg: "help",
    headerContentSections: [
      { header: "A11Y Auditor Tools", content: "CLI A11Y Auditor" },
    ],
  },
);
