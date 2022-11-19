// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: PFHYlMBzlgomX1
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Level from "../../Level"; // plasmic-import: 1PwgvYc3re_2n/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_consulting.module.css"; // plasmic-import: 9Wy1b3THTSs75bMR8UrtAP/projectcss
import sty from "./PlasmicBackup.module.css"; // plasmic-import: PFHYlMBzlgomX1/css
import image22ZcAx7R8ZJyzO9U from "./images/image22.svg"; // plasmic-import: ZcAx7r8ZJyzO9U/picture

export const PlasmicBackup__VariantProps = new Array();

export const PlasmicBackup__ArgProps = new Array();

function PlasmicBackup__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <Level
        data-plasmic-name={"level"}
        data-plasmic-override={overrides.level}
        className={classNames("__wab_instance", sty.level)}
        number={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qEfZ
            )}
          >
            {"Level 40 (epilogue)"}
          </div>
        }
        title={
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"36px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"36px"}
              src={{
                src: image22ZcAx7R8ZJyzO9U,
                fullWidth: 36,
                fullHeight: 36,
                aspectRatio: 1
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___640Jz
              )}
            >
              {"Play in CodeSandbox."}
            </div>
          </p.Stack>
        }
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___1WJn3
          )}
        >
          {
            "What makes Plasmic special is that it lets you start with rough designs and refine them into the real presentational code components for production."
          }
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__yzDbh
          )}
        >
          {
            "But before production, you can quickly see and play with the generated code using our CodeSandbox integration. This is a great way to quickly spin up prototypes as well, right in the browser, using CodeSandbox's best-of-breed tooling."
          }
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gXEss
          )}
        >
          {
            "Pressing the CodeSandbox button in the toolbar will create a sandbox with the generated code. (It may take a minute for the current project, since it has many components!)"
          }
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__m8Kf4
          )}
        >
          {
            "You can further update the sandbox at any time. Letting you iterate on your components maintainably is a core focus of Plasmic."
          }
        </div>
      </Level>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "level", "freeBox", "img"],
  level: ["level", "freeBox", "img"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBackup__ArgProps,
          internalVariantPropNames: PlasmicBackup__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBackup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBackup";
  } else {
    func.displayName = `PlasmicBackup.${nodeName}`;
  }
  return func;
}

export const PlasmicBackup = Object.assign(
  // Top-level PlasmicBackup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    level: makeNodeComponent("level"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicBackup
    internalVariantProps: PlasmicBackup__VariantProps,
    internalArgProps: PlasmicBackup__ArgProps
  }
);

export default PlasmicBackup;
/* prettier-ignore-end */