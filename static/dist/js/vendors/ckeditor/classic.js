(()=>{var $C=Object.create;var Bg=Object.defineProperty;var YC=Object.getOwnPropertyDescriptor;var KC=Object.getOwnPropertyNames;var QC=Object.getPrototypeOf,ZC=Object.prototype.hasOwnProperty;var JC=(Ct,dt)=>()=>(dt||Ct((dt={exports:{}}).exports,dt),dt.exports);var XC=(Ct,dt,P,on)=>{if(dt&&typeof dt=="object"||typeof dt=="function")for(let v of KC(dt))!ZC.call(Ct,v)&&v!==P&&Bg(Ct,v,{get:()=>dt[v],enumerable:!(on=YC(dt,v))||on.enumerable});return Ct};var t0=(Ct,dt,P)=>(P=Ct!=null?$C(QC(Ct)):{},XC(dt||!Ct||!Ct.__esModule?Bg(P,"default",{value:Ct,enumerable:!0}):P,Ct));var Pg=JC((Pt,Rt)=>{(function(Ct){let dt=Ct.en=Ct.en||{};dt.dictionary=Object.assign(dt.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(Ct,dt){typeof Pt=="object"&&typeof Rt=="object"?Rt.exports=dt():typeof define=="function"&&define.amd?define([],dt):typeof Pt=="object"?Pt.ClassicEditor=dt():Ct.ClassicEditor=dt()}(self,()=>(()=>{"use strict";var Ct={3062:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);let E=_},903:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);let E=_},3143:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},4717:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);let E=_},9315:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);let E=_},8733:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);let E=_},3508:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);let E=_},2640:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);let E=_},5083:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},4036:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);let E=_},3773:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);let E=_},3689:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);let E=_},1905:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},9773:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);let E=_},2347:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},7754:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},4652:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);let E=_},7442:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},9292:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},1613:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);let E=_},6306:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);let E=_},3881:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);let E=_},6945:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},4906:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);let E=_},5332:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);let E=_},6781:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);let E=_},5485:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},3949:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},7686:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},7339:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);let E=_},9688:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let E=_},8847:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);let E=_},6574:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},4879:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let E=_},3662:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);let E=_},2577:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},1046:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},8793:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let E=_},4650:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);let E=_},7676:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let E=_},5868:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let E=_},6764:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);let E=_},9695:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);let E=_},5542:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let E=_},3332:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);let E=_},4793:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);let E=_},3488:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let E=_},8506:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);let E=_},4921:(v,T,f)=>{f.d(T,{Z:()=>E});var D=f(1799),I=f.n(D),x=f(2609),_=f.n(x)()(I());_.push([v.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);let E=_},2609:v=>{v.exports=function(T){var f=[];return f.toString=function(){return this.map(function(D){var I=T(D);return D[2]?"@media ".concat(D[2]," {").concat(I,"}"):I}).join("")},f.i=function(D,I,x){typeof D=="string"&&(D=[[null,D,""]]);var _={};if(x)for(var E=0;E<this.length;E++){var jt=this[E][0];jt!=null&&(_[jt]=!0)}for(var Ft=0;Ft<D.length;Ft++){var ot=[].concat(D[Ft]);x&&_[ot[0]]||(I&&(ot[2]?ot[2]="".concat(I," and ").concat(ot[2]):ot[2]=I),f.push(ot))}},f}},1799:v=>{function T(D,I){return function(x){if(Array.isArray(x))return x}(D)||function(x,_){var E=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(E!=null){var jt,Ft,ot=[],ht=!0,Nt=!1;try{for(E=E.call(x);!(ht=(jt=E.next()).done)&&(ot.push(jt.value),!_||ot.length!==_);ht=!0);}catch($t){Nt=!0,Ft=$t}finally{try{ht||E.return==null||E.return()}finally{if(Nt)throw Ft}}return ot}}(D,I)||function(x,_){if(x){if(typeof x=="string")return f(x,_);var E=Object.prototype.toString.call(x).slice(8,-1);if(E==="Object"&&x.constructor&&(E=x.constructor.name),E==="Map"||E==="Set")return Array.from(x);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return f(x,_)}}(D,I)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(D,I){(I==null||I>D.length)&&(I=D.length);for(var x=0,_=new Array(I);x<I;x++)_[x]=D[x];return _}v.exports=function(D){var I=T(D,4),x=I[1],_=I[3];if(!_)return x;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),jt="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),Ft="/*# ".concat(jt," */"),ot=_.sources.map(function(ht){return"/*# sourceURL=".concat(_.sourceRoot||"").concat(ht," */")});return[x].concat(ot).concat([Ft]).join(`
`)}return[x].join(`
`)}},6062:(v,T,f)=>{var D,I=function(){return D===void 0&&(D=!!(window&&document&&document.all&&!window.atob)),D},x=function(){var R={};return function(F){if(R[F]===void 0){var j=document.querySelector(F);if(window.HTMLIFrameElement&&j instanceof window.HTMLIFrameElement)try{j=j.contentDocument.head}catch{j=null}R[F]=j}return R[F]}}(),_=[];function E(R){for(var F=-1,j=0;j<_.length;j++)if(_[j].identifier===R){F=j;break}return F}function jt(R,F){for(var j={},nt=[],mt=0;mt<R.length;mt++){var it=R[mt],ut=F.base?it[0]+F.base:it[0],Bt=j[ut]||0,ce="".concat(ut," ").concat(Bt);j[ut]=Bt+1;var $=E(ce),On={css:it[1],media:it[2],sourceMap:it[3]};$!==-1?(_[$].references++,_[$].updater(On)):_.push({identifier:ce,updater:at(On,F),references:1}),nt.push(ce)}return nt}function Ft(R){var F=document.createElement("style"),j=R.attributes||{};if(j.nonce===void 0){var nt=f.nc;nt&&(j.nonce=nt)}if(Object.keys(j).forEach(function(it){F.setAttribute(it,j[it])}),typeof R.insert=="function")R.insert(F);else{var mt=x(R.insert||"head");if(!mt)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");mt.appendChild(F)}return F}var ot,ht=(ot=[],function(R,F){return ot[R]=F,ot.filter(Boolean).join(`
`)});function Nt(R,F,j,nt){var mt=j?"":nt.media?"@media ".concat(nt.media," {").concat(nt.css,"}"):nt.css;if(R.styleSheet)R.styleSheet.cssText=ht(F,mt);else{var it=document.createTextNode(mt),ut=R.childNodes;ut[F]&&R.removeChild(ut[F]),ut.length?R.insertBefore(it,ut[F]):R.appendChild(it)}}function $t(R,F,j){var nt=j.css,mt=j.media,it=j.sourceMap;if(mt?R.setAttribute("media",mt):R.removeAttribute("media"),it&&typeof btoa<"u"&&(nt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(it))))," */")),R.styleSheet)R.styleSheet.cssText=nt;else{for(;R.firstChild;)R.removeChild(R.firstChild);R.appendChild(document.createTextNode(nt))}}var Ln=null,w=0;function at(R,F){var j,nt,mt;if(F.singleton){var it=w++;j=Ln||(Ln=Ft(F)),nt=Nt.bind(null,j,it,!1),mt=Nt.bind(null,j,it,!0)}else j=Ft(F),nt=$t.bind(null,j,F),mt=function(){(function(ut){if(ut.parentNode===null)return!1;ut.parentNode.removeChild(ut)})(j)};return nt(R),function(ut){if(ut){if(ut.css===R.css&&ut.media===R.media&&ut.sourceMap===R.sourceMap)return;nt(R=ut)}else mt()}}v.exports=function(R,F){(F=F||{}).singleton||typeof F.singleton=="boolean"||(F.singleton=I());var j=jt(R=R||[],F);return function(nt){if(nt=nt||[],Object.prototype.toString.call(nt)==="[object Array]"){for(var mt=0;mt<j.length;mt++){var it=E(j[mt]);_[it].references--}for(var ut=jt(nt,F),Bt=0;Bt<j.length;Bt++){var ce=E(j[Bt]);_[ce].references===0&&(_[ce].updater(),_.splice(ce,1))}j=ut}}}}},dt={};function P(v){var T=dt[v];if(T!==void 0)return T.exports;var f=dt[v]={id:v,exports:{}};return Ct[v](f,f.exports,P),f.exports}P.n=v=>{var T=v&&v.__esModule?()=>v.default:()=>v;return P.d(T,{a:T}),T},P.d=(v,T)=>{for(var f in T)P.o(T,f)&&!P.o(v,f)&&Object.defineProperty(v,f,{enumerable:!0,get:T[f]})},P.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),P.o=(v,T)=>Object.prototype.hasOwnProperty.call(v,T),P.nc=void 0;var on={};return(()=>{P.d(on,{default:()=>gs});let v=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),T={isMac:D(v),isWindows:function(i){return i.indexOf("windows")>-1}(v),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(v),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(v),isiOS:function(i){return!!i.match(/iphone|ipad/i)||D(i)&&navigator.maxTouchPoints>0}(v),isAndroid:function(i){return i.indexOf("android")>-1}(v),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(v),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},f=T;function D(i){return i.indexOf("macintosh")>-1}function I(i,t,e,n){e=e||function(c,l){return c===l};let o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,d){let h=x(c,l,d);if(h===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};let u=_(c,h),g=_(l,h),m=x(u,g,d),p=c.length-m,k=l.length-m;return{firstIndex:h,lastIndexOld:p,lastIndexNew:k}}(o,r,e);return n?function(c,l){let{firstIndex:d,lastIndexOld:h,lastIndexNew:u}=c;if(d===-1)return Array(l).fill("equal");let g=[];return d>0&&(g=g.concat(Array(d).fill("equal"))),u-d>0&&(g=g.concat(Array(u-d).fill("insert"))),h-d>0&&(g=g.concat(Array(h-d).fill("delete"))),u<l&&(g=g.concat(Array(l-u).fill("equal"))),g}(s,r.length):function(c,l){let d=[],{firstIndex:h,lastIndexOld:u,lastIndexNew:g}=l;return g-h>0&&d.push({index:h,type:"insert",values:c.slice(h,g)}),u-h>0&&d.push({index:h+(g-h),type:"delete",howMany:u-h}),d}(r,s)}function x(i,t,e){for(let n=0;n<Math.max(i.length,t.length);n++)if(i[n]===void 0||t[n]===void 0||!e(i[n],t[n]))return n;return-1}function _(i,t){return i.slice(t).reverse()}function E(i,t,e){e=e||function(p,k){return p===k};let n=i.length,o=t.length;if(n>200||o>200||n+o>300)return E.fastDiff(i,t,e,!0);let r,s;if(o<n){let p=i;i=t,t=p,r="delete",s="insert"}else r="insert",s="delete";let a=i.length,c=t.length,l=c-a,d={},h={};function u(p){let k=(h[p-1]!==void 0?h[p-1]:-1)+1,b=h[p+1]!==void 0?h[p+1]:-1,A=k>b?-1:1;d[p+A]&&(d[p]=d[p+A].slice(0)),d[p]||(d[p]=[]),d[p].push(k>b?r:s);let y=Math.max(k,b),N=y-p;for(;N<a&&y<c&&e(i[N],t[y]);)N++,y++,d[p].push("equal");return y}let g,m=0;do{for(g=-m;g<l;g++)h[g]=u(g);for(g=l+m;g>l;g--)h[g]=u(g);h[l]=u(l),m++}while(h[l]!==c);return d[l].slice(1)}function jt(i,...t){t.forEach(e=>{let n=Object.getOwnPropertyNames(e),o=Object.getOwnPropertySymbols(e);n.concat(o).forEach(r=>{if(r in i.prototype||typeof e=="function"&&(r=="length"||r=="name"||r=="prototype"))return;let s=Object.getOwnPropertyDescriptor(e,r);s.enumerable=!1,Object.defineProperty(i.prototype,r,s)})})}E.fastDiff=I;let Ft=function(){return function i(){i.called=!0}};class ot{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=Ft(),this.off=Ft()}}let ht=new Array(256).fill("").map((i,t)=>("0"+t.toString(16)).slice(-2));function Nt(){let i=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+ht[i>>0&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+ht[t>>0&255]+ht[t>>8&255]+ht[t>>16&255]+ht[t>>24&255]+ht[e>>0&255]+ht[e>>8&255]+ht[e>>16&255]+ht[e>>24&255]+ht[n>>0&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]}let $t={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Ln(i,t){let e=$t.get(t.priority);for(let n=0;n<i.length;n++)if($t.get(i[n].priority)<e)return void i.splice(n,0,t);i.push(t)}class w extends Error{constructor(t,e,n){super(function(o,r){let s=new WeakSet,a=(d,h)=>{if(typeof h=="object"&&h!==null){if(s.has(h))return`[object ${h.constructor.name}]`;s.add(h)}return h},c=r?` ${JSON.stringify(r,a)}`:"",l=F(o);return o+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;let n=new w(t.message,e);throw n.stack=t.stack,n}}function at(i,t){console.warn(...j(i,t))}function R(i,t){console.error(...j(i,t))}function F(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function j(i,t){let e=F(i);return t?[i,t,e]:[i,e]}let nt="35.4.0",mt=typeof window=="object"?window:P.g;if(mt.CKEDITOR_VERSION)throw new w("ckeditor-duplicated-modules",null);mt.CKEDITOR_VERSION=nt;let it=Symbol("listeningTo"),ut=Symbol("emitterId"),Bt=Symbol("delegations"),ce=$(Object);function $(i){return i?class extends i{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let o=!1;this.listenTo(this,t,(r,...s)=>{o||(o=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,o={}){let r,s;this[it]||(this[it]={});let a=this[it];li(t)||On(t);let c=li(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,d,h,u,g){d._addEventListener?d._addEventListener(h,u,g):l._addEventListener.call(d,h,u,g)}(this,t,e,n,o)}stopListening(t,e,n){let o=this[it],r=t&&li(t),s=o&&r?o[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!o||t&&!s||e&&!a))if(n)hi(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:hi(this,t,e,n));else if(a){for(;n=a.pop();)hi(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[it]}}fire(t,...e){try{let n=t instanceof ot?t:new ot(this,t),o=n.name,r=ps(this,o);if(n.path.push(this),r){let a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[c].callback)),!n.stop.called);c++);}let s=this[Bt];if(s){let a=s.get(o),c=s.get("*");a&&fs(a,n,e),c&&fs(c,n,e)}return n.return}catch(n){w.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[Bt]||(this[Bt]=new Map),t.forEach(o=>{let r=this[Bt].get(o);r?r.set(e,n):this[Bt].set(o,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[Bt])if(t)if(e){let n=this[Bt].get(t);n&&n.delete(e)}else this[Bt].delete(t);else this[Bt].clear()}_addEventListener(t,e,n){(function(s,a){let c=ms(s);if(c[a])return;let l=a,d=null,h=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},h.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(let u of h)u.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,t);let o=di(this,t),r={callback:e,priority:$t.get(n.priority)};for(let s of o)Ln(s,r)}_removeEventListener(t,e){let n=di(this,t);for(let o of n)for(let r=0;r<o.length;r++)o[r].callback==e&&(o.splice(r,1),r--)}}:ce}function On(i,t){i[ut]||(i[ut]=t||Nt())}function li(i){return i[ut]}function ms(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function di(i,t){let e=ms(i)[t];if(!e)return[];let n=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){let r=di(i,e.childEvents[o]);n=n.concat(r)}return n}function ps(i,t){let e;return i._events&&(e=i._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?ps(i,t.substr(0,t.lastIndexOf(":"))):null}function fs(i,t,e){for(let[n,o]of i){o?typeof o=="function"&&(o=o(t.name)):o=t.name;let r=new ot(t.source,o);r.path=[...t.path],n.fire(r,...e)}}function hi(i,t,e,n){t._removeEventListener?t._removeEventListener(e,n):i._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{$[i]=ce.prototype[i]});let gt=function(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")},go=Symbol("observableProperties"),mo=Symbol("boundObservables"),po=Symbol("boundProperties"),rn=Symbol("decoratedMethods"),ks=Symbol("decoratedOriginal"),bs=J($());function J(i){return i?class extends i{set(t,e){if(gt(t))return void Object.keys(t).forEach(o=>{this.set(o,t[o])},this);ui(this);let n=this[go];if(t in this&&!n.has(t))throw new w("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(o){let r=n.get(t),s=this.fire(`set:${t}`,t,o,r);s===void 0&&(s=o),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!ws(t))throw new w("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new w("observable-bind-duplicate-properties",this);ui(this);let e=this[po];t.forEach(o=>{if(e.has(o))throw new w("observable-bind-rebind",this)});let n=new Map;return t.forEach(o=>{let r={property:o,to:[]};e.set(o,r),n.set(o,r)}),{to:Lg,toMany:Og,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[go])return;let e=this[po],n=this[mo];if(t.length){if(!ws(t))throw new w("observable-unbind-wrong-properties",this);t.forEach(o=>{let r=e.get(o);r&&(r.to.forEach(([s,a])=>{let c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){ui(this);let e=this[t];if(!e)throw new w("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,o)=>{n.return=e.apply(this,o)}),this[t]=function(...n){return this.fire(t,n)},this[t][ks]=e,this[rn]||(this[rn]=[]),this[rn].push(t)}stopListening(t,e,n){if(!t&&this[rn]){for(let o of this[rn])this[o]=this[o][ks];delete this[rn]}super.stopListening(t,e,n)}}:bs}function ui(i){i[go]||(Object.defineProperty(i,go,{value:new Map}),Object.defineProperty(i,mo,{value:new Map}),Object.defineProperty(i,po,{value:new Map}))}function Lg(...i){let t=function(...r){if(!r.length)throw new w("observable-bind-to-parse-error",null);let s={to:[]},a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new w("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...i),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new w("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new w("observable-bind-to-extra-callback",this);var o;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new w("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(r=>{let s=o[mo],a;s.get(r.observable)||o.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{As(o,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,h,u,g){let m=d[mo],p=m.get(u),k=p||{};k[g]||(k[g]=new Set),k[g].add(h),p||m.set(u,k)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{As(this._observable,r)})}function Og(i,t,e){if(this._bindings.size>1)throw new w("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){let r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,t),e)}function ws(i){return i.every(t=>typeof t=="string")}function As(i,t){let e=i[po].get(t),n;e.callback?n=e.callback.apply(i,e.to.map(o=>o[0][o[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,t)?i[t]=n:i.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{J[i]=bs.prototype[i]});class Rg{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function gi(i){let t=0;for(let e of i)t++;return t}function zt(i,t){let e=Math.min(i.length,t.length);for(let n=0;n<e;n++)if(i[n]!=t[n])return n;return i.length==t.length?"same":i.length<t.length?"prefix":"extension"}function Wt(i){return!(!i||!i[Symbol.iterator])}let _s=typeof global=="object"&&global&&global.Object===Object&&global;var jg=typeof self=="object"&&self&&self.Object===Object&&self;let te=_s||jg||Function("return this")(),le=te.Symbol;var Cs=Object.prototype,Fg=Cs.hasOwnProperty,Vg=Cs.toString,Rn=le?le.toStringTag:void 0;let Ug=function(i){var t=Fg.call(i,Rn),e=i[Rn];try{i[Rn]=void 0;var n=!0}catch{}var o=Vg.call(i);return n&&(t?i[Rn]=e:delete i[Rn]),o};var Hg=Object.prototype.toString;let Wg=function(i){return Hg.call(i)};var vs=le?le.toStringTag:void 0;let Ee=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":vs&&vs in Object(i)?Ug(i):Wg(i)},Lt=Array.isArray,Yt=function(i){return i!=null&&typeof i=="object"},ys=function(i){return typeof i=="string"||!Lt(i)&&Yt(i)&&Ee(i)=="[object String]"};function xs(i,t,e={},n=[]){let o=e&&e.xmlns,r=o?i.createElementNS(o,t):i.createElement(t);for(let s in e)r.setAttribute(s,e[s]);!ys(n)&&Wt(n)||(n=[n]);for(let s of n)ys(s)&&(s=i.createTextNode(s)),r.appendChild(s);return r}let Es=function(i,t){return function(e){return i(t(e))}},mi=Es(Object.getPrototypeOf,Object);var qg=Function.prototype,Gg=Object.prototype,Ds=qg.toString,$g=Gg.hasOwnProperty,Yg=Ds.call(Object);let Vt=function(i){if(!Yt(i)||Ee(i)!="[object Object]")return!1;var t=mi(i);if(t===null)return!0;var e=$g.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Ds.call(e)==Yg},Kg=function(){this.__data__=[],this.size=0},jn=function(i,t){return i===t||i!=i&&t!=t},fo=function(i,t){for(var e=i.length;e--;)if(jn(i[e][0],t))return e;return-1};var Qg=Array.prototype.splice;let Zg=function(i){var t=this.__data__,e=fo(t,i);return!(e<0)&&(e==t.length-1?t.pop():Qg.call(t,e,1),--this.size,!0)},Jg=function(i){var t=this.__data__,e=fo(t,i);return e<0?void 0:t[e][1]},Xg=function(i){return fo(this.__data__,i)>-1},tm=function(i,t){var e=this.__data__,n=fo(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this};function sn(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}sn.prototype.clear=Kg,sn.prototype.delete=Zg,sn.prototype.get=Jg,sn.prototype.has=Xg,sn.prototype.set=tm;let ko=sn,em=function(){this.__data__=new ko,this.size=0},nm=function(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e},om=function(i){return this.__data__.get(i)},im=function(i){return this.__data__.has(i)},Le=function(i){if(!gt(i))return!1;var t=Ee(i);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},pi=te["__core-js_shared__"];var Is=function(){var i=/[^.]+$/.exec(pi&&pi.keys&&pi.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();let rm=function(i){return!!Is&&Is in i};var sm=Function.prototype.toString;let Oe=function(i){if(i!=null){try{return sm.call(i)}catch{}try{return i+""}catch{}}return""};var am=/^\[object .+?Constructor\]$/,cm=Function.prototype,lm=Object.prototype,dm=cm.toString,hm=lm.hasOwnProperty,um=RegExp("^"+dm.call(hm).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let gm=function(i){return!(!gt(i)||rm(i))&&(Le(i)?um:am).test(Oe(i))},mm=function(i,t){return i?.[t]},Re=function(i,t){var e=mm(i,t);return gm(e)?e:void 0},Fn=Re(te,"Map"),Vn=Re(Object,"create"),pm=function(){this.__data__=Vn?Vn(null):{},this.size=0},fm=function(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t};var km=Object.prototype.hasOwnProperty;let bm=function(i){var t=this.__data__;if(Vn){var e=t[i];return e==="__lodash_hash_undefined__"?void 0:e}return km.call(t,i)?t[i]:void 0};var wm=Object.prototype.hasOwnProperty;let Am=function(i){var t=this.__data__;return Vn?t[i]!==void 0:wm.call(t,i)},_m=function(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=Vn&&t===void 0?"__lodash_hash_undefined__":t,this};function an(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}an.prototype.clear=pm,an.prototype.delete=fm,an.prototype.get=bm,an.prototype.has=Am,an.prototype.set=_m;let Ts=an,Cm=function(){this.size=0,this.__data__={hash:new Ts,map:new(Fn||ko),string:new Ts}},vm=function(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null},bo=function(i,t){var e=i.__data__;return vm(t)?e[typeof t=="string"?"string":"hash"]:e.map},ym=function(i){var t=bo(this,i).delete(i);return this.size-=t?1:0,t},xm=function(i){return bo(this,i).get(i)},Em=function(i){return bo(this,i).has(i)},Dm=function(i,t){var e=bo(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this};function cn(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}cn.prototype.clear=Cm,cn.prototype.delete=ym,cn.prototype.get=xm,cn.prototype.has=Em,cn.prototype.set=Dm;let wo=cn,Im=function(i,t){var e=this.__data__;if(e instanceof ko){var n=e.__data__;if(!Fn||n.length<199)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new wo(n)}return e.set(i,t),this.size=e.size,this};function ln(i){var t=this.__data__=new ko(i);this.size=t.size}ln.prototype.clear=em,ln.prototype.delete=nm,ln.prototype.get=om,ln.prototype.has=im,ln.prototype.set=Im;let Un=ln,Tm=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i},Ao=function(){try{var i=Re(Object,"defineProperty");return i({},"",{}),i}catch{}}(),fi=function(i,t,e){t=="__proto__"&&Ao?Ao(i,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):i[t]=e};var Mm=Object.prototype.hasOwnProperty;let ki=function(i,t,e){var n=i[t];Mm.call(i,t)&&jn(n,e)&&(e!==void 0||t in i)||fi(i,t,e)},dn=function(i,t,e,n){var o=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],i[a],a,e,i):void 0;c===void 0&&(c=i[a]),o?fi(e,a,c):ki(e,a,c)}return e},Sm=function(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n},Ms=function(i){return Yt(i)&&Ee(i)=="[object Arguments]"};var Ss=Object.prototype,Nm=Ss.hasOwnProperty,Bm=Ss.propertyIsEnumerable;let bi=Ms(function(){return arguments}())?Ms:function(i){return Yt(i)&&Nm.call(i,"callee")&&!Bm.call(i,"callee")},Pm=function(){return!1};var Ns=typeof Pt=="object"&&Pt&&!Pt.nodeType&&Pt,Bs=Ns&&typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,Ps=Bs&&Bs.exports===Ns?te.Buffer:void 0;let Hn=(Ps?Ps.isBuffer:void 0)||Pm;var zm=/^(?:0|[1-9]\d*)$/;let wi=function(i,t){var e=typeof i;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&zm.test(i))&&i>-1&&i%1==0&&i<t},zs=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var ct={};ct["[object Float32Array]"]=ct["[object Float64Array]"]=ct["[object Int8Array]"]=ct["[object Int16Array]"]=ct["[object Int32Array]"]=ct["[object Uint8Array]"]=ct["[object Uint8ClampedArray]"]=ct["[object Uint16Array]"]=ct["[object Uint32Array]"]=!0,ct["[object Arguments]"]=ct["[object Array]"]=ct["[object ArrayBuffer]"]=ct["[object Boolean]"]=ct["[object DataView]"]=ct["[object Date]"]=ct["[object Error]"]=ct["[object Function]"]=ct["[object Map]"]=ct["[object Number]"]=ct["[object Object]"]=ct["[object RegExp]"]=ct["[object Set]"]=ct["[object String]"]=ct["[object WeakMap]"]=!1;let Lm=function(i){return Yt(i)&&zs(i.length)&&!!ct[Ee(i)]},Ai=function(i){return function(t){return i(t)}};var Ls=typeof Pt=="object"&&Pt&&!Pt.nodeType&&Pt,Wn=Ls&&typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,_i=Wn&&Wn.exports===Ls&&_s.process;let hn=function(){try{var i=Wn&&Wn.require&&Wn.require("util").types;return i||_i&&_i.binding&&_i.binding("util")}catch{}}();var Os=hn&&hn.isTypedArray;let Ci=Os?Ai(Os):Lm;var Om=Object.prototype.hasOwnProperty;let Rs=function(i,t){var e=Lt(i),n=!e&&bi(i),o=!e&&!n&&Hn(i),r=!e&&!n&&!o&&Ci(i),s=e||n||o||r,a=s?Sm(i.length,String):[],c=a.length;for(var l in i)!t&&!Om.call(i,l)||s&&(l=="length"||o&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||wi(l,c))||a.push(l);return a};var Rm=Object.prototype;let vi=function(i){var t=i&&i.constructor;return i===(typeof t=="function"&&t.prototype||Rm)},jm=Es(Object.keys,Object);var Fm=Object.prototype.hasOwnProperty;let Vm=function(i){if(!vi(i))return jm(i);var t=[];for(var e in Object(i))Fm.call(i,e)&&e!="constructor"&&t.push(e);return t},_o=function(i){return i!=null&&zs(i.length)&&!Le(i)},yi=function(i){return _o(i)?Rs(i):Vm(i)},Um=function(i,t){return i&&dn(t,yi(t),i)},Hm=function(i){var t=[];if(i!=null)for(var e in Object(i))t.push(e);return t};var Wm=Object.prototype.hasOwnProperty;let qm=function(i){if(!gt(i))return Hm(i);var t=vi(i),e=[];for(var n in i)(n!="constructor"||!t&&Wm.call(i,n))&&e.push(n);return e},un=function(i){return _o(i)?Rs(i,!0):qm(i)},Gm=function(i,t){return i&&dn(t,un(t),i)};var js=typeof Pt=="object"&&Pt&&!Pt.nodeType&&Pt,Fs=js&&typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,Vs=Fs&&Fs.exports===js?te.Buffer:void 0,Us=Vs?Vs.allocUnsafe:void 0;let Hs=function(i,t){if(t)return i.slice();var e=i.length,n=Us?Us(e):new i.constructor(e);return i.copy(n),n},Ws=function(i,t){var e=-1,n=i.length;for(t||(t=Array(n));++e<n;)t[e]=i[e];return t},$m=function(i,t){for(var e=-1,n=i==null?0:i.length,o=0,r=[];++e<n;){var s=i[e];t(s,e,i)&&(r[o++]=s)}return r},qs=function(){return[]};var Ym=Object.prototype.propertyIsEnumerable,Gs=Object.getOwnPropertySymbols;let xi=Gs?function(i){return i==null?[]:(i=Object(i),$m(Gs(i),function(t){return Ym.call(i,t)}))}:qs,Km=function(i,t){return dn(i,xi(i),t)},$s=function(i,t){for(var e=-1,n=t.length,o=i.length;++e<n;)i[o+e]=t[e];return i},Ys=Object.getOwnPropertySymbols?function(i){for(var t=[];i;)$s(t,xi(i)),i=mi(i);return t}:qs,Qm=function(i,t){return dn(i,Ys(i),t)},Ks=function(i,t,e){var n=t(i);return Lt(i)?n:$s(n,e(i))},Ei=function(i){return Ks(i,yi,xi)},Zm=function(i){return Ks(i,un,Ys)},Di=Re(te,"DataView"),Ii=Re(te,"Promise"),Ti=Re(te,"Set"),Mi=Re(te,"WeakMap");var Qs="[object Map]",Zs="[object Promise]",Js="[object Set]",Xs="[object WeakMap]",ta="[object DataView]",Jm=Oe(Di),Xm=Oe(Fn),tp=Oe(Ii),ep=Oe(Ti),np=Oe(Mi),je=Ee;(Di&&je(new Di(new ArrayBuffer(1)))!=ta||Fn&&je(new Fn)!=Qs||Ii&&je(Ii.resolve())!=Zs||Ti&&je(new Ti)!=Js||Mi&&je(new Mi)!=Xs)&&(je=function(i){var t=Ee(i),e=t=="[object Object]"?i.constructor:void 0,n=e?Oe(e):"";if(n)switch(n){case Jm:return ta;case Xm:return Qs;case tp:return Zs;case ep:return Js;case np:return Xs}return t});let qn=je;var op=Object.prototype.hasOwnProperty;let ip=function(i){var t=i.length,e=new i.constructor(t);return t&&typeof i[0]=="string"&&op.call(i,"index")&&(e.index=i.index,e.input=i.input),e},Co=te.Uint8Array,Si=function(i){var t=new i.constructor(i.byteLength);return new Co(t).set(new Co(i)),t},rp=function(i,t){var e=t?Si(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.byteLength)};var sp=/\w*$/;let ap=function(i){var t=new i.constructor(i.source,sp.exec(i));return t.lastIndex=i.lastIndex,t};var ea=le?le.prototype:void 0,na=ea?ea.valueOf:void 0;let cp=function(i){return na?Object(na.call(i)):{}},oa=function(i,t){var e=t?Si(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.length)},lp=function(i,t,e){var n=i.constructor;switch(t){case"[object ArrayBuffer]":return Si(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return rp(i,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return oa(i,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return ap(i);case"[object Symbol]":return cp(i)}};var ia=Object.create;let dp=function(){function i(){}return function(t){if(!gt(t))return{};if(ia)return ia(t);i.prototype=t;var e=new i;return i.prototype=void 0,e}}(),ra=function(i){return typeof i.constructor!="function"||vi(i)?{}:dp(mi(i))},hp=function(i){return Yt(i)&&qn(i)=="[object Map]"};var sa=hn&&hn.isMap;let up=sa?Ai(sa):hp,gp=function(i){return Yt(i)&&qn(i)=="[object Set]"};var aa=hn&&hn.isSet;let mp=aa?Ai(aa):gp;var ca="[object Arguments]",la="[object Function]",da="[object Object]",rt={};rt[ca]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object DataView]"]=rt["[object Boolean]"]=rt["[object Date]"]=rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Map]"]=rt["[object Number]"]=rt[da]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object Symbol]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Error]"]=rt[la]=rt["[object WeakMap]"]=!1;let Ni=function i(t,e,n,o,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,o,r,s):n(t)),a!==void 0)return a;if(!gt(t))return t;var h=Lt(t);if(h){if(a=ip(t),!c)return Ws(t,a)}else{var u=qn(t),g=u==la||u=="[object GeneratorFunction]";if(Hn(t))return Hs(t,c);if(u==da||u==ca||g&&!r){if(a=l||g?{}:ra(t),!c)return l?Qm(t,Gm(a,t)):Km(t,Um(a,t))}else{if(!rt[u])return r?t:{};a=lp(t,u,c)}}s||(s=new Un);var m=s.get(t);if(m)return m;s.set(t,a),mp(t)?t.forEach(function(k){a.add(i(k,e,n,k,t,s))}):up(t)&&t.forEach(function(k,b){a.set(b,i(k,e,n,b,t,s))});var p=h?void 0:(d?l?Zm:Ei:l?un:yi)(t);return Tm(p||t,function(k,b){p&&(k=t[b=k]),ki(a,b,i(k,e,n,b,t,s))}),a},ha=function(i,t){return Ni(i,5,t=typeof t=="function"?t:void 0)},Gn=function(i){return Yt(i)&&i.nodeType===1&&!Vt(i)};class ua{constructor(t,e){this._config={},e&&this.define(ga(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(let t of Object.keys(this._config))yield t}_setToTarget(t,e,n,o=!1){if(Vt(e))return void this._setObjectToTarget(t,e,o);let r=e.split(".");e=r.pop();for(let s of r)Vt(t[s])||(t[s]={}),t=t[s];if(Vt(n))return Vt(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){let n=e.split(".");e=n.pop();for(let o of n){if(!Vt(t[o])){t=null;break}t=t[o]}return t?ga(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}function ga(i){return ha(i,pp)}function pp(i){return Gn(i)?i:void 0}function De(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function vo(i){let t=Object.prototype.toString.apply(i);return t=="[object Window]"||t=="[object global]"}let ma=Fe($());function Fe(i){return i?class extends i{listenTo(t,e,n,o={}){if(De(t)||vo(t)){let r={capture:!!o.useCapture,passive:!!o.usePassive},s=this._getProxyEmitter(t,r)||new fp(t,r);this.listenTo(s,e,n,o)}else super.listenTo(t,e,n,o)}stopListening(t,e,n){if(De(t)||vo(t)){let o=this._getAllProxyEmitters(t);for(let r of o)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,o){let r=n[it];return r&&r[o]?r[o].emitter:null}(this,pa(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:ma}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Fe[i]=ma.prototype[i]});class fp extends $(){constructor(t,e){super(),On(this,pa(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;let e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),$().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){$().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){let e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function pa(i,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Nt())}(i);for(let n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Bi;try{Bi={window,document}}catch{Bi={window:{},document:{}}}let V=Bi;function fa(i){let t=[],e=i;for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}function ft(i){return Object.prototype.toString.call(i)=="[object Text]"}function yo(i){return Object.prototype.toString.apply(i)=="[object Range]"}function ka(i){let t=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}let ba=["top","right","bottom","left","width","height"];class kt{constructor(t){let e=yo(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Aa(t)||e)if(e){let n=kt.getDomRangeRects(t);xo(this,kt.getBoundingRect(n))}else xo(this,t.getBoundingClientRect());else if(vo(t)){let{innerWidth:n,innerHeight:o}=t;xo(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else xo(this,t)}clone(){return new kt(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){let e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new kt(e)}getIntersectionArea(t){let e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){let t=this._source,e=this.clone();if(!wa(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!wa(n);){let o=new kt(n),r=e.getIntersection(o);if(!r)return null;r.getArea()<e.getArea()&&(e=r),n=n.parentNode}}return e}isEqual(t){for(let e of ba)if(this[e]!==t[e])return!1;return!0}contains(t){let e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){let t=this._source,e,n,o;if(vo(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{let r=ka(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){let e=[],n=Array.from(t.getClientRects());if(n.length)for(let o of n)e.push(new kt(o));else{let o=t.startContainer;ft(o)&&(o=o.parentNode);let r=new kt(o.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){let e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0},n=0;for(let o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new kt(e))}}function xo(i,t){for(let e of ba)i[e]=t[e]}function wa(i){return!!Aa(i)&&i===i.ownerDocument.body}function Aa(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}class lt{constructor(t,e){lt._observerInstance||lt._createObserver(),this._element=t,this._callback=e,lt._addElementCallback(t,e),lt._observerInstance.observe(t)}destroy(){lt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){lt._elementCallbacks||(lt._elementCallbacks=new Map);let n=lt._elementCallbacks.get(t);n||(n=new Set,lt._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){let n=lt._getElementCallbacks(t);n&&(n.delete(e),n.size||(lt._elementCallbacks.delete(t),lt._observerInstance.unobserve(t))),lt._elementCallbacks&&!lt._elementCallbacks.size&&(lt._observerInstance=null,lt._elementCallbacks=null)}static _getElementCallbacks(t){return lt._elementCallbacks?lt._elementCallbacks.get(t):null}static _createObserver(){lt._observerInstance=new V.window.ResizeObserver(t=>{for(let e of t){let n=lt._getElementCallbacks(e.target);if(n)for(let o of n)o(e)}})}}function kp(i,t){i instanceof HTMLTextAreaElement&&(i.value=t),i.innerHTML=t}function gn(i){return t=>t+i}function Eo(i){let t=0;for(;i.previousSibling;)i=i.previousSibling,t++;return t}function _a(i,t,e){i.insertBefore(e,i.childNodes[t]||null)}function mn(i){return i&&i.nodeType===Node.COMMENT_NODE}function Ve(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function Ca({element:i,target:t,positions:e,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){Le(t)&&(t=t()),Le(n)&&(n=n());let s=function(u){return u&&u.parentNode?u.offsetParent===V.document.body?null:u.offsetParent:null}(i),a=new kt(i),c=new kt(t),l,d=o&&function(u){u=Object.assign({top:0,bottom:0,left:0,right:0},u);let g=new kt(V.window);return g.top+=u.top,g.height-=u.top,g.bottom-=u.bottom,g.height-=u.bottom,g}(r)||null,h={targetRect:c,elementRect:a,positionedElementAncestor:s,viewportRect:d};if(n||o){let u=n&&new kt(n).getVisible();Object.assign(h,{limiterRect:u,viewportRect:d}),l=function(g,m){let{elementRect:p}=m,k=p.getArea(),b=g.map(N=>new Pi(N,m)).filter(N=>!!N.name),A=0,y=null;for(let N of b){let{limiterIntersectionArea:z,viewportIntersectionArea:q}=N;if(z===k)return N;let K=q**2+z**2;K>A&&(A=K,y=N)}return y}(e,h)||new Pi(e[0],h)}else l=new Pi(e[0],h);return l}function va(i){let{scrollX:t,scrollY:e}=V.window;return i.clone().moveBy(t,e)}lt._observerInstance=null,lt._elementCallbacks=null;class Pi{constructor(t,e){let n=t(e.targetRect,e.elementRect,e.viewportRect);if(!n)return;let{left:o,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCorrdinates={left:o,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){let t=this._options.limiterRect;if(t){let e=this._options.viewportRect;if(!e)return t.getIntersectionArea(this._rect);{let n=t.getIntersection(e);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){let t=this._options.viewportRect;return t?t.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=va(this._rect),this._options.positionedElementAncestor&&function(t,e){let n=va(new kt(e)),o=ka(e),r=0,s=0;r-=n.left,s-=n.top,r+=e.scrollLeft,s+=e.scrollTop,r-=o.left,s-=o.top,t.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function ya(i){let t=i.parentNode;t&&t.removeChild(i)}function bp(i,t,e){let n=t.clone().moveBy(0,e),o=t.clone().moveBy(0,-e),r=new kt(i).excludeScrollbarsAndBorders();if(![o,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=i;Ea(o,r)?a-=r.top-t.top+e:xa(n,r)&&(a+=t.bottom-r.bottom+e),Da(t,r)?s-=r.left-t.left+e:Ia(t,r)&&(s+=t.right-r.right+e),i.scrollTo(s,a)}}function wp(i,t){let e=zi(i),n,o;for(;i!=e.document.body;)o=t(),n=new kt(i).excludeScrollbarsAndBorders(),n.contains(o)||(Ea(o,n)?i.scrollTop-=n.top-o.top:xa(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Da(o,n)?i.scrollLeft-=n.left-o.left:Ia(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function xa(i,t){return i.bottom>t.bottom}function Ea(i,t){return i.top<t.top}function Da(i,t){return i.left<t.left}function Ia(i,t){return i.right>t.right}function zi(i){return yo(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function Ap(i){if(yo(i)){let t=i.commonAncestorContainer;return ft(t)&&(t=t.parentNode),t}return i.parentNode}function Ta(i,t){let e=zi(i),n=new kt(i);if(e===t)return n;{let o=e;for(;o!=t;){let r=o.frameElement,s=new kt(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}let _p={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Cp={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},W=function(){let i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)i[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)i[t-48]=t;for(let t=112;t<=123;t++)i["f"+(t-111)]=t;for(let t of"`-=[];',./\\")i[t]=t.charCodeAt(0);return i}(),vp=Object.fromEntries(Object.entries(W).map(([i,t])=>[t,i.charAt(0).toUpperCase()+i.slice(1)]));function pn(i){let t;if(typeof i=="string"){if(t=W[i.toLowerCase()],!t)throw new w("keyboard-unknown-key",null,{key:i})}else t=i.keyCode+(i.altKey?W.alt:0)+(i.ctrlKey?W.ctrl:0)+(i.shiftKey?W.shift:0)+(i.metaKey?W.cmd:0);return t}function Li(i){return typeof i=="string"&&(i=function(t){return t.split("+").map(e=>e.trim())}(i)),i.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return pn(e.slice(0,-1));let n=pn(e);return f.isMac&&n==W.ctrl?W.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Ma(i){let t=Li(i);return Object.entries(f.isMac?_p:Cp).reduce((e,[n,o])=>(t&W[n]&&(t&=~W[n],e+=o),e),"")+(t?vp[t]:"")}function Oi(i,t){let e=t==="ltr";switch(i){case W.arrowleft:return e?"left":"right";case W.arrowright:return e?"right":"left";case W.arrowup:return"up";case W.arrowdown:return"down"}}function xt(i){return Array.isArray(i)?i:[i]}function yp(i,t,e=1){if(typeof e!="number")throw new w("translation-service-quantity-not-a-number",null,{quantity:e});let n=Object.keys(V.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(V.window.CKEDITOR_TRANSLATIONS)[0]);let o=t.id||t.string;if(n===0||!function(c,l){return!!V.window.CKEDITOR_TRANSLATIONS[c]&&!!V.window.CKEDITOR_TRANSLATIONS[c].dictionary[l]}(i,o))return e!==1?t.plural:t.string;let r=V.window.CKEDITOR_TRANSLATIONS[i].dictionary,s=V.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(c=>c===1?0:1),a=r[o];return typeof a=="string"?a:a[Number(s(e))]}V.window.CKEDITOR_TRANSLATIONS||(V.window.CKEDITOR_TRANSLATIONS={});let xp=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Sa(i){return xp.includes(i)?"rtl":"ltr"}class Ep{constructor({uiLanguage:t="en",contentLanguage:e}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=Sa(this.uiLanguage),this.contentLanguageDirection=Sa(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=xt(e),typeof t=="string"&&(t={string:t});let n=t.plural?e[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(yp(this.uiLanguage,t,n),e)}}class ee extends $(){constructor(t={},e={}){super();let n=Wt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(let o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new w("collection-add-item-invalid-index",this);let n=0;for(let o of t){let r=this._getItemIdBeforeAdding(o),s=e+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new w("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{let e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){let[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);let t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new w("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){let e=this._bindToCollection,n=(o,r,s)=>{let a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{let l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(let h of this._skippedIndexesFromExternal)s>h&&d--;for(let h of e._skippedIndexesFromExternal)d>=h&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let h=0;h<e._skippedIndexesFromExternal.length;h++)d<=e._skippedIndexesFromExternal[h]&&e._skippedIndexesFromExternal[h]++}};for(let o of e)n(0,o,e.getIndex(o));this.listenTo(e,"add",n),this.listenTo(e,"remove",(o,r,s)=>{let a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){let e=this._idProperty,n;if(e in t){if(n=t[e],typeof n!="string")throw new w("collection-add-invalid-id",this);if(this.get(n))throw new w("collection-add-item-already-exists",this)}else t[e]=n=Nt();return n}_remove(t){let e,n,o,r=!1,s=this._idProperty;if(typeof t=="string"?(n=t,o=this._itemMap.get(n),r=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],r=!o,o&&(n=o[s])):(o=t,n=o[s],e=this._items.indexOf(o),r=e==-1||!this._itemMap.get(n)),r)throw new w("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);let a=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(a),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function vt(i){let t=i.next();return t.done?null:t.value}class Kt extends Fe(J()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new w("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class de{constructor(){this._listener=new(Fe())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+pn(n),n)})}set(t,e,n={}){let o=Li(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+pn(t),t)}destroy(){this._listener.stopListening()}}function he(i){return Wt(i)?new Map(i):function(t){let e=new Map;for(let n in t)e.set(n,t[n]);return e}(i)}function Na(i,t){return!!(e=i.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(t));var e}function Ba(i,t){return!!(e=i.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}let Dp=function(){let i=/\p{Regional_Indicator}{2}/u.source,t="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(e=>e.source).join("|")+")";return new RegExp(`${i}|${t}(?:\u200D${t})*`,"ug")}();function Ip(i,t){let e=String(i).matchAll(Dp);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class S extends J(){constructor(t){super(),this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Pa,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Pa),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Pa(i){i.return=!1,i.stop()}class U extends J(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",za,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",za),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function za(i){i.return=!1,i.stop()}class La extends U{constructor(t){super(t),this._childCommandsDefinitions=[]}refresh(){}execute(...t){let e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){Ln(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){let t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class Oa extends $(){constructor(t,e=[],n=[]){super(),this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(let o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(let[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(let t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){let e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new w("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){let o=this,r=this._context;(function m(p,k=new Set){p.forEach(b=>{c(b)&&(k.has(b)||(k.add(b),b.pluginName&&!o._availablePlugins.has(b.pluginName)&&o._availablePlugins.set(b.pluginName,b),b.requires&&m(b.requires,k)))})})(t),u(t);let s=[...function m(p,k=new Set){return p.map(b=>c(b)?b:o._availablePlugins.get(b)).reduce((b,A)=>k.has(A)?b:(k.add(A),A.requires&&(u(A.requires,A),m(A.requires,k).forEach(y=>b.add(y))),b.add(A)),new Set)}(t.filter(m=>!d(m,e)))];(function(m,p){for(let k of p){if(typeof k!="function")throw new w("plugincollection-replace-plugin-invalid-type",null,{pluginItem:k});let b=k.pluginName;if(!b)throw new w("plugincollection-replace-plugin-missing-name",null,{pluginItem:k});if(k.requires&&k.requires.length)throw new w("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:b});let A=o._availablePlugins.get(b);if(!A)throw new w("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:b});let y=m.indexOf(A);if(y===-1){if(o._contextPlugins.has(A))return;throw new w("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:b})}if(A.requires&&A.requires.length)throw new w("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:b});m.splice(y,1,k),o._availablePlugins.set(b,k)}})(s,n);let a=function(m){return m.map(p=>{let k=o._contextPlugins.get(p);return k=k||new p(r),o._add(p,k),k})}(s);return g(a,"init").then(()=>g(a,"afterInit")).then(()=>a);function c(m){return typeof m=="function"}function l(m){return c(m)&&m.isContextPlugin}function d(m,p){return p.some(k=>k===m||h(m)===k||h(k)===m)}function h(m){return c(m)?m.pluginName||m.name:m}function u(m,p=null){m.map(k=>c(k)?k:o._availablePlugins.get(k)||k).forEach(k=>{(function(b,A){if(!c(b))throw A?new w("plugincollection-soft-required",r,{missingPlugin:b,requiredBy:h(A)}):new w("plugincollection-plugin-not-found",r,{plugin:b})})(k,p),function(b,A){if(l(A)&&!l(b))throw new w("plugincollection-context-required",r,{plugin:h(b),requiredBy:h(A)})}(k,p),function(b,A){if(A&&d(b,e))throw new w("plugincollection-required",r,{plugin:h(b),requiredBy:h(A)})}(k,p)})}function g(m,p){return m.reduce((k,b)=>b[p]?o._contextPlugins.has(b)?k:k.then(b[p].bind(b)):k,Promise.resolve())}}destroy(){let t=[];for(let[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);let n=t.pluginName;if(n){if(this._plugins.has(n))throw new w("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}class Tp{constructor(t){this.config=new ua(t,this.constructor.defaultConfig);let e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Oa(this,e);let n=this.config.get("language")||{};this.locale=new Ep({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new ee,this._contextOwner=null}initPlugins(){let t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(let n of t.concat(e)){if(typeof n!="function")throw new w("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new w("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new w("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){let t={};for(let e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{let n=new this(t);e(n.initPlugins().then(()=>n))})}}class Do extends J(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var Mp=P(6062),L=P.n(Mp),Ra=P(4717),Sp={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Ra.Z,Sp),Ra.Z.locals;let Io=new WeakMap;function ja(i){let{view:t,element:e,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,s=t.document;Io.has(s)||(Io.set(s,new Map),s.registerPostFixer(a=>Ri(s,a)),s.on("change:isComposing",()=>{t.change(a=>Ri(s,a))},{priority:"high"})),Io.get(s).set(e,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?e:null}),t.change(a=>Ri(s,a))}function Np(i,t){return!!t.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",t),!0)}function Ri(i,t){let e=Io.get(i),n=[],o=!1;for(let[r,s]of e)s.isDirectHost&&(n.push(r),Fa(t,r,s)&&(o=!0));for(let[r,s]of e){if(s.isDirectHost)continue;let a=Bp(r);a&&(n.includes(a)||(s.hostElement=a,Fa(t,r,s)&&(o=!0)))}return o}function Fa(i,t,e){let{text:n,isDirectHost:o,hostElement:r}=e,s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||t.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(u=>!u.is("uiElement")))return!1;let d=a.document,h=d.selection.anchor;return!(d.isComposing&&h&&h.parent===a||!c&&d.isFocused&&(!h||h.parent===a))}(r,e.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(i,r)&&(s=!0):Np(i,r)&&(s=!0),s}function Bp(i){if(i.childCount){let t=i.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class Ue{is(){throw new Error("is() method is abstract")}}let Va=function(i){return Ni(i,4)};class He extends $(Ue){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new w("view-node-not-found-in-parent",this);return t}get nextSibling(){let t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){let t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){let t=[],e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){let e=[],n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){let n=this.getAncestors(e),o=t.getAncestors(e),r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;let e=this.getPath(),n=t.getPath(),o=zt(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){let t=Va(this);return delete t.parent,t}}He.prototype.is=function(i){return i==="node"||i==="view:node"};class X extends He{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof X&&(this===t||this.data===t.data)}_clone(){return new X(this.document,this.data)}}X.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class ue extends Ue{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new w("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new w("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){let e=[],n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}ue.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class ge{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(let e of t)for(let n of this._patterns){let o=Ua(e,n);if(o)return{element:e,pattern:n,match:o}}return null}matchAll(...t){let e=[];for(let n of t)for(let o of this._patterns){let r=Ua(n,o);r&&e.push({element:n,pattern:o,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;let t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Ua(i,t){if(typeof t=="function")return t(i);let e={};return t.name&&(e.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(t.name,i.name),!e.name)||t.attributes&&(e.attributes=function(n,o){let r=new Set(o.getAttributeKeys());return Vt(n)?(n.style!==void 0&&at("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&at("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),ji(n,r,s=>o.getAttribute(s))}(t.attributes,i),!e.attributes)||t.classes&&(e.classes=function(n,o){return ji(n,o.getClassNames(),()=>{})}(t.classes,i),!e.classes)||t.styles&&(e.styles=function(n,o){return ji(n,o.getStyleNames(!0),r=>o.getStyle(r))}(t.styles,i),!e.styles)?null:e}function ji(i,t,e){let n=function(s){return Array.isArray(s)?s.map(a=>Vt(a)?(a.key!==void 0&&a.value!==void 0||at("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):Vt(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(t),r=[];if(n.forEach(([s,a])=>{o.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,h){if(l===!0)return!0;let u=h(d);return l===u||l instanceof RegExp&&!!String(u).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}let To=function(i){return typeof i=="symbol"||Yt(i)&&Ee(i)=="[object Symbol]"};var Pp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zp=/^\w*$/;let Lp=function(i,t){if(Lt(i))return!1;var e=typeof i;return!(e!="number"&&e!="symbol"&&e!="boolean"&&i!=null&&!To(i))||zp.test(i)||!Pp.test(i)||t!=null&&i in Object(t)};function Fi(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=e.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return e.cache=r.set(o,s)||r,s};return e.cache=new(Fi.Cache||wo),e}Fi.Cache=wo;let Op=Fi;var Rp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jp=/\\(\\)?/g,Fp=function(i){var t=Op(i,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t}(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(Rp,function(e,n,o,r){t.push(o?r.replace(jp,"$1"):n||e)}),t});let Vp=Fp,Up=function(i,t){for(var e=-1,n=i==null?0:i.length,o=Array(n);++e<n;)o[e]=t(i[e],e,i);return o};var Ha=le?le.prototype:void 0,Wa=Ha?Ha.toString:void 0;let Hp=function i(t){if(typeof t=="string")return t;if(Lt(t))return Up(t,i)+"";if(To(t))return Wa?Wa.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Vi=function(i){return i==null?"":Hp(i)},Ui=function(i,t){return Lt(i)?i:Lp(i,t)?[i]:Vp(Vi(i))},Wp=function(i){var t=i==null?0:i.length;return t?i[t-1]:void 0},Hi=function(i){if(typeof i=="string"||To(i))return i;var t=i+"";return t=="0"&&1/i==-1/0?"-0":t},qa=function(i,t){for(var e=0,n=(t=Ui(t,i)).length;i!=null&&e<n;)i=i[Hi(t[e++])];return e&&e==n?i:void 0},Ga=function(i,t,e){var n=-1,o=i.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+t];return r},qp=function(i,t){return t.length<2?i:qa(i,Ga(t,0,-1))},Gp=function(i,t){return t=Ui(t,i),(i=qp(i,t))==null||delete i[Hi(Wp(t))]},$p=function(i,t){return i==null||Gp(i,t)},Mo=function(i,t,e){var n=i==null?void 0:qa(i,t);return n===void 0?e:n},Wi=function(i,t,e){(e!==void 0&&!jn(i[t],e)||e===void 0&&!(t in i))&&fi(i,t,e)},Yp=function(i){return function(t,e,n){for(var o=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[i?a:++o];if(e(r[c],c,r)===!1)break}return t}}(),Kp=function(i){return Yt(i)&&_o(i)},qi=function(i,t){if((t!=="constructor"||typeof i[t]!="function")&&t!="__proto__")return i[t]},Qp=function(i){return dn(i,un(i))},Zp=function(i,t,e,n,o,r,s){var a=qi(i,e),c=qi(t,e),l=s.get(c);if(l)Wi(i,e,l);else{var d=r?r(a,c,e+"",i,t,s):void 0,h=d===void 0;if(h){var u=Lt(c),g=!u&&Hn(c),m=!u&&!g&&Ci(c);d=c,u||g||m?Lt(a)?d=a:Kp(a)?d=Ws(a):g?(h=!1,d=Hs(c,!0)):m?(h=!1,d=oa(c,!0)):d=[]:Vt(c)||bi(c)?(d=a,bi(a)?d=Qp(a):gt(a)&&!Le(a)||(d=ra(c))):h=!1}h&&(s.set(c,d),o(d,c,n,r,s),s.delete(c)),Wi(i,e,d)}},Jp=function i(t,e,n,o,r){t!==e&&Yp(e,function(s,a){if(r||(r=new Un),gt(s))Zp(t,e,a,n,i,o,r);else{var c=o?o(qi(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),Wi(t,a,c)}},un)},We=function(i){return i},Xp=function(i,t,e){switch(e.length){case 0:return i.call(t);case 1:return i.call(t,e[0]);case 2:return i.call(t,e[0],e[1]);case 3:return i.call(t,e[0],e[1],e[2])}return i.apply(t,e)};var $a=Math.max;let tf=function(i,t,e){return t=$a(t===void 0?i.length-1:t,0),function(){for(var n=arguments,o=-1,r=$a(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=e(s),Xp(i,this,a)}},ef=function(i){return function(){return i}},nf=Ao?function(i,t){return Ao(i,"toString",{configurable:!0,enumerable:!1,value:ef(t),writable:!0})}:We;var of=Date.now;let rf=function(i){var t=0,e=0;return function(){var n=of(),o=16-(n-e);if(e=n,o>0){if(++t>=800)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}(nf),sf=function(i,t){return rf(tf(i,t,We),i+"")},af=function(i,t,e){if(!gt(e))return!1;var n=typeof t;return!!(n=="number"?_o(e)&&wi(t,e.length):n=="string"&&t in e)&&jn(e[t],i)},Ya=function(i){return sf(function(t,e){var n=-1,o=e.length,r=o>1?e[o-1]:void 0,s=o>2?e[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&af(e[0],e[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var a=e[n];a&&i(t,a,n,r)}return t})},Ka=Ya(function(i,t,e){Jp(i,t,e)}),cf=function(i,t,e,n){if(!gt(i))return i;for(var o=-1,r=(t=Ui(t,i)).length,s=r-1,a=i;a!=null&&++o<r;){var c=Hi(t[o]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return i;if(o!=s){var d=a[c];(l=n?n(d,c,a):void 0)===void 0&&(l=gt(d)?d:wi(t[o+1])?[]:{})}ki(a,c,l),a=a[c]}return i},lf=function(i,t,e){return i==null?i:cf(i,t,e)};class df{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){let t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();let e=Array.from(function(n){let o=null,r=0,s=0,a=null,c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){let d=n.charAt(l);if(o===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":o=d;break;case";":{let h=n.substr(s,l-s);a&&c.set(a.trim(),h.trim()),a=null,r=l+1;break}}else d===o&&(o=null)}return c}(t).entries());for(let[n,o]of e)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(t){if(this.isEmpty)return!1;let e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(gt(t))for(let[n,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){let e=Gi(t);$p(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!gt(this._styles[t]))return this._styles[t];let e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){let t=[],e=Object.keys(this._styles);for(let n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){let e=t.split(".");if(!(e.length>1))return;let n=e.splice(0,e.length-1).join("."),o=Mo(this._styles,n);o&&!Array.from(Object.keys(o)).length&&this.remove(n)}}class hf{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(gt(e))$i(n,Gi(t),e);else if(this._normalizers.has(t)){let o=this._normalizers.get(t),{path:r,value:s}=o(e);$i(n,r,s)}else $i(n,t,e)}getNormalized(t,e){if(!t)return Ka({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){let n=this._extractors.get(t);if(typeof n=="string")return Mo(e,n);let o=n(t,e);if(o)return o}return Mo(e,Gi(t))}getReducedForm(t,e){let n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){let e=Array.from(this._consumables.keys()).filter(o=>{let r=this.getNormalized(o,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(let n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Gi(i){return i.replace("-",".")}function $i(i,t,e){let n=e;gt(e)&&(n=Ka({},Mo(i,t),e)),lf(i,t,n)}class qt extends He{constructor(t,e,n,o){if(super(t),this.name=e,this._attrs=function(r){let s=he(r);for(let[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){let r=this._attrs.get("class");Qa(this._classes,r),this._attrs.delete("class")}this._styles=new df(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){let e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof qt))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(let[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(let e of this._classes)if(!t._classes.has(e))return!1;for(let e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(let e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(let e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){let e=new ge(...t),n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){let t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){let e=[];if(t)for(let o of this.getChildren())e.push(o._clone(t));let n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0,o=function(r,s){return typeof s=="string"?[new X(r,s)]:(Wt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new X(r,a):a instanceof ue?new X(r,a.data):a))}(this.document,e);for(let r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),t=="class"?Qa(this._classes,e):t=="style"?this._styles.setTo(e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(let e of xt(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(let e of xt(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),Vt(t)?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(let e of xt(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Qa(i,t){let e=t.split(/\s+/);i.clear(),e.forEach(n=>i.add(n))}qt.prototype.is=function(i,t){return t?t===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class $n extends qt{constructor(...t){super(...t),this.getFillerOffset=Za}}function Za(){let i=[...this.getChildren()],t=i[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(let e of i)if(!e.is("uiElement"))return null;return this.childCount}$n.prototype.is=function(i,t){return t?t===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class So extends J($n){constructor(...t){super(...t);let e=t[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",n=>n&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}So.prototype.is=function(i,t){return t?t===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};let Ja=Symbol("rootName");class Xa extends So{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Ja)}set rootName(t){this._setCustomProperty(Ja,t)}set _name(t){this.name=t}}Xa.prototype.is=function(i,t){return t?t===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class qe{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new w("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new w("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=B._createAt(t.startPosition):this.position=B._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,o;do o=this.position,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone(),e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof X){if(t.isAtEnd)return this.position=B._createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof qt)return this.shallow?t.offset++:t=new B(o,0),this.position=t,this._formatReturnValue("elementStart",o,e,t,1);if(o instanceof X){if(this.singleCharacters)return t=new B(o,0),this.position=t,this._next();{let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new ue(o,0,s),t=B._createAfter(r)):(r=new ue(o,0,o.data.length),t.offset++),this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;let s=new ue(n,t.offset,r);return t.offset+=r,this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=B._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone(),e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof X){if(t.isAtStart)return this.position=B._createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof qt)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new B(o,o.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof X){if(this.singleCharacters)return t=new B(o,o.data.length),this.position=t,this._previous();{let r,s=o.data.length;if(o==this._boundaryStartParent){let a=this.boundaries.start.offset;r=new ue(o,a,o.data.length-a),s=r.data.length,t=B._createBefore(r)}else r=new ue(o,0,o.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{let a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;let s=new ue(n,t.offset,r);return this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=B._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,r){return e instanceof ue&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=B._createAfter(e.textNode):(o=B._createAfter(e.textNode),this.position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=B._createBefore(e.textNode):(o=B._createBefore(e.textNode),this.position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:r}}}}class B extends Ue{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){let t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof So);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){let e=B._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;let n=new qe(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){let e=this.getAncestors(),n=t.getAncestors(),o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";let e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);let o=zt(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new qe(t)}clone(){return new B(this.parent,this.offset)}static _createAt(t,e){if(t instanceof B)return new this(t.parent,t.offset);{let n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new w("view-createpositionat-offset-required",n)}return new B(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new B(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new w("view-position-after-root",t,{root:t});return new B(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new B(t.textNode,t.offsetInText);if(!t.parent)throw new w("view-position-before-root",t,{root:t});return new B(t.parent,t.index)}}B.prototype.is=function(i){return i==="position"||i==="view:position"};class O extends Ue{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new qe({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(No,{direction:"backward"}),e=this.end.getLastMatchingPosition(No);return t.parent.is("$text")&&t.isAtStart&&(t=B._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=B._createAfter(e.parent)),new O(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(No);if(t.isAfter(this.end)||t.isEqual(this.end))return new O(t,t);let e=this.end.getLastMatchingPosition(No,{direction:"backward"}),n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("$text")&&(t=new B(n,0)),o&&o.is("$text")&&(e=new B(o,o.data.length)),new O(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);let n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){let e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new O(this.start,t.start)),this.containsPosition(t.end)&&e.push(new O(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new O(e,n)}return null}getWalker(t={}){return t.boundaries=this,new qe(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new O(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;let e=new qe(t);for(let n of e)yield n.item}*getPositions(t={}){t.boundaries=this;let e=new qe(t);yield e.position;for(let n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,o){return new this(new B(t,e),new B(n,o))}static _createFromPositionAndShift(t,e){let n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){let e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(B._createBefore(t),e)}}function No(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}O.prototype.is=function(i){return i==="range"||i==="view:range"};class me extends $(Ue){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;let t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;let t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(let t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(let e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(let e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){let t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){let t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(let e of this._ranges){let n=!1;for(let o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;let e=gi(this.getRanges());if(e!=gi(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,o]=t;if(typeof n=="object"&&(o=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(o);else if(e instanceof me||e instanceof Yi)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof O)this._setRanges([e],o&&o.backward),this._setFakeOptions(o);else if(e instanceof B)this._setRanges([new O(e)]),this._setFakeOptions(o);else if(e instanceof He){let r=!!o&&!!o.backward,s;if(n===void 0)throw new w("view-selection-setto-required-second-parameter",this);s=n=="in"?O._createIn(e):n=="on"?O._createOn(e):new O(B._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(o)}else{if(!Wt(e))throw new w("view-selection-setto-not-selectable",this);this._setRanges(e,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new w("view-selection-setfocus-no-ranges",this);let n=B._createAt(t,e);if(n.compareWith(this.focus)=="same")return;let o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new O(n,o),!0):this._addRange(new O(o,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(let n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof O))throw new w("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(let e of this._ranges)if(t.isIntersecting(e))throw new w("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new O(t.start,t.end))}}me.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Yi extends $(Ue){constructor(...t){super(),this._selection=new me,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Yi.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class fn extends ot{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}let Ki=Symbol("bubbling contexts");function Qi(i){return class extends i{fire(t,...e){try{let n=t instanceof ot?t:new ot(this,t),o=Zi(this);if(!o.size)return;if(Yn(n,"capturing",this),kn(o,"$capture",n,...e))return n.return;let r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!tc(o,s),c=s||function(l){if(!l)return null;let d=l.start.parent,h=l.end.parent,u=d.getPath(),g=h.getPath();return u.length>g.length?d:h}(r);if(Yn(n,"atTarget",c),!a){if(kn(o,"$text",n,...e))return n.return;Yn(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(kn(o,"$root",n,...e))return n.return}else if(c.is("element")&&kn(o,c.name,n,...e))return n.return;if(kn(o,c,n,...e))return n.return;c=c.parent,Yn(n,"bubbling",c)}return Yn(n,"bubbling",this),kn(o,"$document",n,...e),n.return}catch(n){w.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){let o=xt(n.context||"$document"),r=Zi(this);for(let s of o){let a=r.get(s);a||(a=new($()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){let n=Zi(this);for(let o of n.values())this.stopListening(o,t,e)}}}{let i=Qi(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{Qi[t]=i.prototype[t]})}function Yn(i,t,e){i instanceof fn&&(i._eventPhase=t,i._currentTarget=e)}function kn(i,t,e,...n){let o=typeof t=="string"?i.get(t):tc(i,t);return!!o&&(o.fire(e,...n),e.stop.called)}function tc(i,t){for(let[e,n]of i)if(typeof e=="function"&&e(t))return n;return null}function Zi(i){return i[Ki]||(i[Ki]=new Map),i[Ki]}class Bo extends Qi(J()){constructor(t){super(),this.selection=new Yi,this.roots=new ee({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(let n of this._postFixers)if(e=n(t),e)break;while(e)}}class Ge extends qt{constructor(...t){super(...t),this.getFillerOffset=uf,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new w("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){let e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function uf(){if(Ji(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Ji(i)>1)return null;i=i.parent}return!i||Ji(i)>1?null:this.childCount}function Ji(i){return Array.from(i.getChildren()).filter(t=>!t.is("uiElement")).length}Ge.DEFAULT_PRIORITY=10,Ge.prototype.is=function(i,t){return t?t===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Xi extends qt{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=gf}_insertChild(t,e){if(e&&(e instanceof He||Array.from(e).length>0))throw new w("view-emptyelement-cannot-add",[this,e]);return 0}}function gf(){return null}Xi.prototype.is=function(i,t){return t?t===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Po extends qt{constructor(...t){super(...t),this.getFillerOffset=pf}_insertChild(t,e){if(e&&(e instanceof He||Array.from(e).length>0))throw new w("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){let e=t.createElement(this.name);for(let n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function mf(i){i.document.on("arrowKey",(t,e)=>function(n,o,r){if(o.keyCode==W.arrowright){let s=o.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||o.shiftKey){let c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let h=!1,u=d.getLastMatchingPosition(g=>(g.item.is("uiElement")&&(h=!0),!(!g.item.is("uiElement")&&!g.item.is("attributeElement"))));if(h){let g=r.viewPositionToDom(u);a?s.collapse(g.parent,g.offset):s.extend(g.parent,g.offset)}}}}(0,e,i.domConverter),{priority:"low"})}function pf(){return null}Po.prototype.is=function(i,t){return t?t===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class tr extends qt{constructor(...t){super(...t),this.getFillerOffset=ff}_insertChild(t,e){if(e&&(e instanceof He||Array.from(e).length>0))throw new w("view-rawelement-cannot-add",[this,e]);return 0}render(){}}function ff(){return null}tr.prototype.is=function(i,t){return t?t===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class $e extends $(Ue){constructor(t,e){super(),this.document=t,this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0,o=function(r,s){return typeof s=="string"?[new X(r,s)]:(Wt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new X(r,a):a instanceof ue?new X(r,a.data):a))}(this.document,e);for(let r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}$e.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class ec{constructor(t){this.document=t,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(...t){this.document.selection._setFocus(...t)}createDocumentFragment(t){return new $e(this.document,t)}createText(t){return new X(this.document,t)}createAttributeElement(t,e,n={}){let o=new Ge(this.document,t,e);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(t,e,n={},o={}){let r=null;Vt(n)?o=n:r=n;let s=new $n(this.document,t,e,r);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){let o=new So(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(t,e,n={}){let o=new Xi(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(t,e,n){let o=new Po(this.document,t,e);return n&&(o.render=n),o}createRawElement(t,e,n,o={}){let r=new tr(this.document,t,e);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Vt(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof B?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){let e=t.parent;if(!e.is("containerElement"))throw new w("view-writer-break-non-container-element",this.document);if(!e.parent)throw new w("view-writer-break-root",this.document);if(t.isAtStart)return B._createBefore(e);if(!t.isAtEnd){let n=e._clone(!1);this.insert(B._createAfter(e),n);let o=new O(t,B._createAt(e,"end")),r=new B(n,0);this.move(o,r)}return B._createAfter(e)}mergeAttributes(t){let e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){let s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new B(s,a))}let o=n.getChild(e-1),r=n.getChild(e);if(!o||!r)return t;if(o.is("$text")&&r.is("$text"))return oc(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){let s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new B(o,s))}return t}mergeContainers(t){let e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new w("view-writer-merge-containers-invalid-position",this.document);let o=e.getChild(e.childCount-1),r=o instanceof X?B._createAt(o,"end"):B._createAt(e,"end");return this.move(O._createIn(n),B._createAt(e,"end")),this.remove(O._createOn(n)),r}insert(t,e){ic(e=Wt(e)?[...e]:[e],this.document);let n=e.reduce((s,a)=>{let c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]),o=null,r=t;for(let{nodes:s,breakAttributes:a}of n){let c=this._insertNodes(r,s,a);o||(o=c.start),r=c.end}return o?new O(o,r):new O(t)}remove(t){let e=t instanceof O?t:O._createOn(t);if(Kn(e,this.document),e.isCollapsed)return new $e(this.document);let{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=o.offset-n.offset,a=r._removeChildren(n.offset,s);for(let l of a)this._removeFromClonedElementsGroup(l);let c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new $e(this.document,a)}clear(t,e){Kn(t,this.document);let n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(let o of n){let r=o.item,s;if(r.is("element")&&e.isSimilar(r))s=O._createOn(r);else if(!o.nextPosition.isAfter(t.start)&&r.is("$textProxy")){let a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=O._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){let o=(e=this._breakAttributes(e,!0)).parent,r=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Ge))throw new w("view-writer-wrap-invalid-attribute",this.document);if(Kn(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,e);let r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new O(o)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Ge))throw new w("view-writer-unwrap-invalid-attribute",this.document);if(Kn(t,this.document),t.isCollapsed)return t;let{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;let c=this.mergeAttributes(s.end);return new O(a,c)}rename(t,e){let n=new $n(this.document,t,e.getAttributes());return this.insert(B._createAfter(e),n),this.move(O._createIn(e),B._createAt(n,0)),this.remove(O._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return B._createAt(t,e)}createPositionAfter(t){return B._createAfter(t)}createPositionBefore(t){return B._createBefore(t)}createRange(...t){return new O(...t)}createRangeOn(t){return O._createOn(t)}createRangeIn(t){return O._createIn(t)}createSelection(...t){return new me(...t)}createSlot(t){if(!this._slotFactory)throw new w("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let o,r;if(o=n?er(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new w("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?nr(t):t;let s=o._insertChild(r.offset,e);for(let d of e)this._addToClonedElementsGroup(d);let a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;let l=this.mergeAttributes(a);return new O(c,l)}_wrapChildren(t,e,n,o){let r=e,s=[];for(;r<n;){let c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(o,c))s.push(new B(t,r));else if(l||!d||kf(o,c)){let h=o._clone();c._remove(),h._appendChild(c),t._insertChild(r,h),this._addToClonedElementsGroup(h),s.push(new B(t,r))}else this._wrapChildren(c,0,c.childCount,o);r++}let a=0;for(let c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return O._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let r=e,s=[];for(;r<n;){let c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(o)){let l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new B(t,r),new B(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(o,c)?(s.push(new B(t,r),new B(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,o),r++);else r++}let a=0;for(let c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return O._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){let{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;let c=this.mergeAttributes(s.end);return new O(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return nc(t.clone());t.parent.is("$text")&&(t=nr(t));let n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);let o=new O(t,t.getShiftedBy(1));this.wrap(o,e);let r=new B(n.parent,n.index);n._remove();let s=r.nodeBefore,a=r.nodeAfter;return s instanceof X&&a instanceof X?oc(s,a):nc(r)}_wrapAttributeElement(t,e){if(!rc(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(let n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(let n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(let n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(let n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(let n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!rc(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(let n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(let n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(let n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){let n=t.start,o=t.end;if(Kn(t,this.document),t.isCollapsed){let c=this._breakAttributes(t.start,e);return new O(c,c)}let r=this._breakAttributes(o,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new O(a,r)}_breakAttributes(t,e=!1){let n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new w("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new w("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new w("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&or(o.parent)||or(o))return t.clone();if(o.is("$text"))return this._breakAttributes(nr(t),e);if(n==o.childCount){let r=new B(o.parent,o.index+1);return this._breakAttributes(r,e)}if(n===0){let r=new B(o.parent,o.index);return this._breakAttributes(r,e)}{let r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);let a=o.childCount-n,c=o._removeChildren(n,a);s._appendChild(c);let l=new B(o.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(let o of t.getChildren())this._addToClonedElementsGroup(o);let e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(let o of t.getChildren())this._removeFromClonedElementsGroup(o);let e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n&&n.delete(t)}}function er(i){let t=i.parent;for(;!or(t);){if(!t)return;t=t.parent}return t}function kf(i,t){return i.priority<t.priority||!(i.priority>t.priority)&&i.getIdentity()<t.getIdentity()}function nc(i){let t=i.nodeBefore;if(t&&t.is("$text"))return new B(t,t.data.length);let e=i.nodeAfter;return e&&e.is("$text")?new B(e,0):i}function nr(i){if(i.offset==i.parent.data.length)return new B(i.parent.parent,i.parent.index+1);if(i.offset===0)return new B(i.parent.parent,i.parent.index);let t=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new X(i.root.document,t)),new B(i.parent.parent,i.parent.index+1)}function oc(i,t){let e=i.data.length;return i._data+=t.data,t._remove(),new B(i,e)}let bf=[X,Ge,$n,Xi,tr,Po];function ic(i,t){for(let e of i){if(!bf.some(n=>e instanceof n))throw new w("view-writer-insert-invalid-node-type",t);e.is("$text")||ic(e.getChildren(),t)}}function or(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Kn(i,t){let e=er(i.start),n=er(i.end);if(!e||!n||e!==n)throw new w("view-writer-invalid-range-container",t)}function rc(i,t){return i.id===null&&t.id===null}let sc=i=>i.createTextNode("\xA0"),ac=i=>{let t=i.createElement("span");return t.dataset.ckeFiller="true",t.innerText="\xA0",t},cc=i=>{let t=i.createElement("br");return t.dataset.ckeFiller="true",t},zo="\u2060".repeat(7);function Gt(i){return ft(i)&&i.data.substr(0,7)===zo}function Qn(i){return i.data.length==7&&Gt(i)}function lc(i){return Gt(i)?i.data.slice(7):i.data}function wf(i,t){if(t.keyCode==W.arrowleft){let e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){let n=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;Gt(n)&&o<=7&&e.collapse(n,0)}}}var dc=P(9315),Af={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(dc.Z,Af),dc.Z.locals;class _f extends J(){constructor(t,e){super(),this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),f.isBlink&&!f.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new w("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!f.isAndroid)return;let t=null,e=!(f.isBlink&&!f.isAndroid)||!this.isSelecting;for(let n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=B._createBefore(t.parent)));for(let n of this.markedAttributes)this._updateAttrs(n);for(let n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(let n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){let n=this.domConverter.viewPositionToDom(t),o=n.parent.ownerDocument;Gt(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=hc(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){if(!this.domConverter.mapViewToDom(t))return;let e=Array.from(this.domConverter.mapViewToDom(t).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),o=this._diffNodeLists(e,n),r=this._findReplaceActions(o,e,n);if(r.indexOf("replace")!==-1){let s={equal:0,insert:0,delete:0};for(let a of r)if(a==="replace"){let c=s.equal+s.insert,l=s.equal+s.delete,d=t.getChild(c);!d||d.is("uiElement")||d.is("rawElement")||this._updateElementMappings(d,e[l]),ya(n[c]),s.equal++}else s[a]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){let t=this.selection.getFirstPosition();return t.parent.is("$text")?B._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&ft(e.parent)&&Gt(e.parent))}_removeInlineFiller(){let t=this._inlineFiller;if(!Gt(t))throw new w("view-renderer-filler-was-lost",this);Qn(t)?t.remove():t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;let a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;let o=t.nodeBefore,r=t.nodeAfter;return!(o instanceof X||r instanceof X)&&(!f.isAndroid||!o&&!r)}_updateText(t,e){let n=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t).data,r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(o=zo+o),mc(n,o)}_updateAttrs(t){let e=this.domConverter.mapViewToDom(t);if(!e)return;let n=Array.from(e.attributes).map(r=>r.name),o=t.getAttributeKeys();for(let r of o)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(let r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){let n=this.domConverter.mapViewToDom(t);if(!n)return;if(f.isAndroid){let h=null;for(let u of Array.from(n.childNodes)){if(h&&ft(h)&&ft(u)){n.normalize();break}h=u}}let o=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));o&&o.parent===t&&hc(n.ownerDocument,s,o.offset);let a=this._diffNodeLists(r,s),c=f.isAndroid?this._findReplaceActions(a,r,s,{replaceText:!0}):a,l=0,d=new Set;for(let h of c)h==="delete"?(d.add(r[l]),ya(r[l])):h!=="equal"&&h!=="replace"||l++;l=0;for(let h of c)h==="insert"?(_a(n,l,s[l]),l++):h==="replace"?(mc(r[l],s[l].data),l++):h==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(let h of d)h.parentNode||this.domConverter.unbindDomElement(h)}_diffNodeLists(t,e){return t=function(n,o){let r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(t,this._fakeSelectionContainer),E(t,e,Cf.bind(null,this.domConverter))}_findReplaceActions(t,e,n,o={}){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[],c={equal:0,insert:0,delete:0};for(let l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(E(s,a,o.replaceText?gc:uc).map(d=>d==="equal"?"replace":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(E(s,a,o.replaceText?gc:uc).map(l=>l==="equal"?"replace":l))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(let e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(f.isBlink&&!f.isAndroid&&this.isSelecting&&!this.markedChildren.size||this._isFocusChanging)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();let t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&f.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){let e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){let a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(e));let n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";let o=e.getSelection(),r=e.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(t){let e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;let n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(o.parent,o.offset),f.isGecko&&function(r,s){let a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;let c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;let e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){let e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(let t of this.domDocuments){let e=t.getSelection();if(e.rangeCount){let n=t.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&e.removeAllRanges()}}}_removeFakeSelection(){let t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){let t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function hc(i,t,e){let n=t instanceof Array?t:t.childNodes,o=n[e];if(ft(o))return o.data=zo+o.data,o;{let r=i.createTextNode(zo);return Array.isArray(t)?n.splice(e,0,r):_a(t,e,r),r}}function uc(i,t){return De(i)&&De(t)&&!ft(i)&&!ft(t)&&!mn(i)&&!mn(t)&&i.tagName.toLowerCase()===t.tagName.toLowerCase()}function gc(i,t){return De(i)&&De(t)&&ft(i)&&ft(t)}function Cf(i,t,e){return t===e||(ft(t)&&ft(e)?t.data===e.data:!(!i.isBlockFiller(t)||!i.isBlockFiller(e)))}function mc(i,t){let e=i.data;if(e==t)return;let n=I(e,t);for(let o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}let vf=cc(V.document),yf=sc(V.document),xf=ac(V.document),Lo="data-ck-unsafe-attribute-",pc="data-ck-unsafe-element";class Oo{constructor(t,e={}){this.document=t,this.renderingMode=e.renderingMode||"editing",this.blockFillerMode=e.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?V.document:V.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new ge,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new me(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){let e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(let n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);let n=new DOMParser().parseFromString(e,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);let s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),a=[],c;for(;c=s.nextNode();)a.push(c);for(let l of a){for(let h of l.getAttributeNames())this.setDomElementAttribute(l,h,l.getAttribute(h));let d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(bc(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e={}){if(t.is("$text")){let n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let n;if(t.is("documentFragment"))n=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(n,t);else{if(t.is("uiElement"))return n=t.name==="$comment"?this._domDocument.createComment(t.getCustomProperty("$rawContent")):t.render(this._domDocument,this),e.bind&&this.bindElements(n,t),n;this._shouldRenameElement(t.name)?(bc(t.name),n=this._createReplacementDomElement(t.name)):n=t.hasAttribute("xmlns")?this._domDocument.createElementNS(t.getAttribute("xmlns"),t.name):this._domDocument.createElement(t.name),t.is("rawElement")&&t.render(n,this),e.bind&&this.bindElements(n,t);for(let o of t.getAttributeKeys())this.setDomElementAttribute(n,o,t.getAttribute(o),t)}if(e.withChildren!==!1)for(let o of this.viewChildrenToDom(t,e))n.appendChild(o);return n}}setDomElementAttribute(t,e,n,o){let r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);r||at("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(Lo+e)&&r&&t.removeAttribute(Lo+e),t.setAttribute(r?e:Lo+e,n)}removeDomElementAttribute(t,e){e!=pc&&(t.removeAttribute(e),t.removeAttribute(Lo+e))}*viewChildrenToDom(t,e={}){let n=t.getFillerOffset&&t.getFillerOffset(),o=0;for(let r of t.getChildren()){n===o&&(yield this._getBlockFiller());let s=r.is("element")&&r.getCustomProperty("dataPipeline:transparentRendering");s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&at("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(t){let e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=this._domDocument.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){let e=t.parent;if(e.is("$text")){let n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return Gt(n)&&(o+=7),{parent:n,offset:o}}{let n,o,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{let s=t.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!o)return null;n=o.parentNode,r=o.nextSibling}return ft(r)&&Gt(r)?{parent:r,offset:7}:{parent:n,offset:o?Eo(o)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;let n=this.getHostViewElement(t);if(n)return n;if(mn(t)&&e.skipComments)return null;if(ft(t)){if(Qn(t))return null;{let o=this._processDataFromDomText(t);return o===""?null:new X(this.document,o)}}{if(this.mapDomToView(t))return this.mapDomToView(t);let o;if(this.isDocumentFragment(t))o=new $e(this.document),e.bind&&this.bindDocumentFragments(t,o);else{o=this._createViewElement(t,e),e.bind&&this.bindElements(t,o);let r=t.attributes;if(r)for(let s=r.length,a=0;a<s;a++)o._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(o,e)||mn(t)){let s=mn(t)?t.data:t.innerHTML;return o._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(t),o}}if(e.withChildren!==!1)for(let r of this.domChildrenToView(t,e))o._appendChild(r);return o}}*domChildrenToView(t,e){for(let n=0;n<t.childNodes.length;n++){let o=t.childNodes[n],r=this.domToView(o,e);r!==null&&(yield r)}}domSelectionToView(t){if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;ft(o)&&(o=o.parentNode);let r=this.fakeSelectionToView(o);if(r)return r}let e=this.isDomSelectionBackward(t),n=[];for(let o=0;o<t.rangeCount;o++){let r=t.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new me(n,{backward:e})}domRangeToView(t){let e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new O(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,Eo(t));let n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return B._createBefore(n);if(ft(t)){if(Qn(t))return this.domPositionToView(t.parentNode,Eo(t));let o=this.findCorrespondingViewText(t),r=e;return o?(Gt(t)&&(r-=7,r=r<0?0:r),new B(o,r)):null}if(e===0){let o=this.mapDomToView(t);if(o)return new B(o,0)}else{let o=t.childNodes[e-1];if(ft(o)&&Qn(o))return this.domPositionToView(o.parentNode,Eo(o));let r=ft(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new B(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Qn(t))return null;let e=this.getHostViewElement(t);if(e)return e;let n=t.previousSibling;if(n){if(!this.isElement(n))return null;let o=this.mapDomToView(n);if(o){let r=o.nextSibling;return r instanceof X?r:null}}else{let o=this.mapDomToView(t.parentNode);if(o){let r=o.getChild(0);return r instanceof X?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){let e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){let e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){let{scrollX:n,scrollY:o}=V.window,r=[];fc(e,s=>{let{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),fc(e,s=>{let[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),V.window.scrollTo(n,o)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(vf):!(t.tagName!=="BR"||!kc(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(xf)||function(e,n){return e.isEqualNode(yf)&&kc(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;let e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}let n=e.collapsed;return e.detach(),n}getHostViewElement(t){let e=fa(t);for(e.pop();e.length;){let n=e.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return sc(this._domDocument);case"markedNbsp":return ac(this._domDocument);case"br":return cc(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(ft(t)&&Gt(t)&&e<7||this.isElement(t)&&Gt(t.childNodes[e]))return!1;let n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){let n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){let n=this._getTouchingInlineViewNode(t,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!o||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;let e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(function(l,d){return fa(l).some(u=>u.tagName&&d.includes(u.tagName.toLowerCase()))}(t,this.preElements))return lc(t);e=e.replace(/[ \n\t\r]{1,}/g," ");let n=this._getTouchingInlineDomNode(t,!1),o=this._getTouchingInlineDomNode(t,!0),r=this._checkShouldLeftTrimDomText(t,n),s=this._checkShouldRightTrimDomText(t,o);r&&(e=e.replace(/^ /,"")),s&&(e=e.replace(/ $/,"")),e=lc(new Text(e)),e=e.replace(/ \u00A0/g,"  ");let a=o&&this.isElement(o)&&o.tagName!="BR",c=o&&ft(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(e)||!o||a||c)&&(e=e.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||(this.isElement(e)?e.tagName==="BR":!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Gt(t)}_getTouchingInlineViewNode(t,e){let n=new qe({startPosition:e?B._createAfter(t):B._createBefore(t),direction:e?"forward":"backward"});for(let o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;let n=e?"firstChild":"lastChild",o=e?"nextSibling":"previousSibling",r=!0,s=t;do if(!r&&s[n]?s=s[n]:s[o]?(s=s[o],r=!1):(s=s.parentNode,r=!0),!s||this._isBlockElement(s))return null;while(!ft(s)&&s.tagName!="BR"&&!this._isInlineObjectElement(s));return s}_isBlockElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isInlineObjectElement(t){return this.isElement(t)&&this.inlineObjectElements.includes(t.tagName.toLowerCase())}_createViewElement(t,e){if(mn(t))return new Po(this.document,"$comment");let n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new qt(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){let e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){let n=this._domDocument.createElement("span");if(n.setAttribute(pc,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(let o of e.getAttributeNames())n.setAttribute(o,e.getAttribute(o))}return n}}function fc(i,t){let e=i;for(;e;)t(e),e=e.parentElement}function kc(i,t){let e=i.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function bc(i){i==="script"&&at("domconverter-unsafe-script-element-detected"),i==="style"&&at("domconverter-unsafe-style-element-detected")}class pe extends Fe(){constructor(t){super(),this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}let wc=Ya(function(i,t){dn(t,un(t),i)});class bn{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,wc(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ie extends pe{constructor(t){super(t),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new bn(this.view,e,n))}}class Ef extends Ie{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){let e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return pn(this)}};this.fire(t.type,t,e)}}let ir=function(){return te.Date.now()};var Df=/\s/;let If=function(i){for(var t=i.length;t--&&Df.test(i.charAt(t)););return t};var Tf=/^\s+/;let Mf=function(i){return i&&i.slice(0,If(i)+1).replace(Tf,"")};var Sf=/^[-+]0x[0-9a-f]+$/i,Nf=/^0b[01]+$/i,Bf=/^0o[0-7]+$/i,Pf=parseInt;let Ac=function(i){if(typeof i=="number")return i;if(To(i))return NaN;if(gt(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=gt(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=Mf(i);var e=Nf.test(i);return e||Bf.test(i)?Pf(i.slice(2),e?2:8):Sf.test(i)?NaN:+i};var zf=Math.max,Lf=Math.min;let Zn=function(i,t,e){var n,o,r,s,a,c,l=0,d=!1,h=!1,u=!0;if(typeof i!="function")throw new TypeError("Expected a function");function g(y){var N=n,z=o;return n=o=void 0,l=y,s=i.apply(z,N)}function m(y){return l=y,a=setTimeout(k,t),d?g(y):s}function p(y){var N=y-c;return c===void 0||N>=t||N<0||h&&y-l>=r}function k(){var y=ir();if(p(y))return b(y);a=setTimeout(k,function(N){var z=t-(N-c);return h?Lf(z,r-(N-l)):z}(y))}function b(y){return a=void 0,u&&n?g(y):(n=o=void 0,s)}function A(){var y=ir(),N=p(y);if(n=arguments,o=this,c=y,N){if(a===void 0)return m(c);if(h)return clearTimeout(a),a=setTimeout(k,t),g(c)}return a===void 0&&(a=setTimeout(k,t)),s}return t=Ac(t)||0,gt(e)&&(d=!!e.leading,r=(h="maxWait"in e)?zf(Ac(e.maxWait)||0,t):r,u="trailing"in e?!!e.trailing:u),A.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=o=a=void 0},A.flush=function(){return a===void 0?s:b(ir())},A};class Of extends pe{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=Zn(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){let t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){let e=this.document.selection,n=new me(e.getRanges(),{backward:e.isBackward,fake:!1});t!=W.arrowleft&&t!=W.arrowup||n.setTo(n.getFirstPosition()),t!=W.arrowright&&t!=W.arrowdown||n.setTo(n.getLastPosition());let o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}let Rf=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},jf=function(i){return this.__data__.has(i)};function Ro(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new wo;++t<e;)this.add(i[t])}Ro.prototype.add=Ro.prototype.push=Rf,Ro.prototype.has=jf;let Ff=Ro,Vf=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1},Uf=function(i,t){return i.has(t)},_c=function(i,t,e,n,o,r){var s=1&e,a=i.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(i),d=r.get(t);if(l&&d)return l==t&&d==i;var h=-1,u=!0,g=2&e?new Ff:void 0;for(r.set(i,t),r.set(t,i);++h<a;){var m=i[h],p=t[h];if(n)var k=s?n(p,m,h,t,i,r):n(m,p,h,i,t,r);if(k!==void 0){if(k)continue;u=!1;break}if(g){if(!Vf(t,function(b,A){if(!Uf(g,A)&&(m===b||o(m,b,e,n,r)))return g.push(A)})){u=!1;break}}else if(m!==p&&!o(m,p,e,n,r)){u=!1;break}}return r.delete(i),r.delete(t),u},Hf=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n,o){e[++t]=[o,n]}),e},Wf=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e};var Cc=le?le.prototype:void 0,rr=Cc?Cc.valueOf:void 0;let qf=function(i,t,e,n,o,r,s){switch(e){case"[object DataView]":if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=t.byteLength||!r(new Co(i),new Co(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jn(+i,+t);case"[object Error]":return i.name==t.name&&i.message==t.message;case"[object RegExp]":case"[object String]":return i==t+"";case"[object Map]":var a=Hf;case"[object Set]":var c=1&n;if(a||(a=Wf),i.size!=t.size&&!c)return!1;var l=s.get(i);if(l)return l==t;n|=2,s.set(i,t);var d=_c(a(i),a(t),n,o,r,s);return s.delete(i),d;case"[object Symbol]":if(rr)return rr.call(i)==rr.call(t)}return!1};var Gf=Object.prototype.hasOwnProperty;let $f=function(i,t,e,n,o,r){var s=1&e,a=Ei(i),c=a.length;if(c!=Ei(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:Gf.call(t,d)))return!1}var h=r.get(i),u=r.get(t);if(h&&u)return h==t&&u==i;var g=!0;r.set(i,t),r.set(t,i);for(var m=s;++l<c;){var p=i[d=a[l]],k=t[d];if(n)var b=s?n(k,p,d,t,i,r):n(p,k,d,i,t,r);if(!(b===void 0?p===k||o(p,k,e,n,r):b)){g=!1;break}m||(m=d=="constructor")}if(g&&!m){var A=i.constructor,y=t.constructor;A==y||!("constructor"in i)||!("constructor"in t)||typeof A=="function"&&A instanceof A&&typeof y=="function"&&y instanceof y||(g=!1)}return r.delete(i),r.delete(t),g};var vc="[object Arguments]",yc="[object Array]",jo="[object Object]",xc=Object.prototype.hasOwnProperty;let Yf=function(i,t,e,n,o,r){var s=Lt(i),a=Lt(t),c=s?yc:qn(i),l=a?yc:qn(t),d=(c=c==vc?jo:c)==jo,h=(l=l==vc?jo:l)==jo,u=c==l;if(u&&Hn(i)){if(!Hn(t))return!1;s=!0,d=!1}if(u&&!d)return r||(r=new Un),s||Ci(i)?_c(i,t,e,n,o,r):qf(i,t,c,e,n,o,r);if(!(1&e)){var g=d&&xc.call(i,"__wrapped__"),m=h&&xc.call(t,"__wrapped__");if(g||m){var p=g?i.value():i,k=m?t.value():t;return r||(r=new Un),o(p,k,e,n,r)}}return!!u&&(r||(r=new Un),$f(i,t,e,n,o,r))},Ec=function i(t,e,n,o,r){return t===e||(t==null||e==null||!Yt(t)&&!Yt(e)?t!=t&&e!=e:Yf(t,e,n,o,i,r))},Kf=function(i,t,e){var n=(e=typeof e=="function"?e:void 0)?e(i,t):void 0;return n===void 0?Ec(i,t,void 0,e):!!n};class Dc extends pe{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(let t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;let e=this.domConverter,n=new Set,o=new Set;for(let s of t){let a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||o.add(a))}for(let s of t){let a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){let c=e.findCorrespondingViewText(s.target);c&&!o.has(c.parent)?n.add(c):!c&&Gt(s.target)&&o.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(let s of n)r=!0,this.renderer.markToSync("text",s);for(let s of o){let a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));Kf(c,l,Qf)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function Qf(i,t){if(!Array.isArray(i))return i===t||!(!i.is("$text")||!t.is("$text"))&&i.data===t.data}class Zf extends pe{constructor(t){super(t),this.mutationObserver=t.getObserver(Dc),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Zn(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Zn(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){let e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(o,r)=>{this.document.isComposing&&!f.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(t,e){if(!this.isEnabled)return;let n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();let o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{let r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document._isFocusChanging=!1,this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Jf extends Ie{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;let e=this.document;e.on("focus",()=>{e.isFocused=!0,e._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{e._isFocusChanging=!1,t.change(()=>{})},50)}),e.on("blur",(n,o)=>{let r=e.selection.editableElement;r!==null&&r!==o.target||(e.isFocused=!1,t.change(()=>{}))})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Xf extends Ie{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];let e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Ic{constructor(t){this.files=function(e){let n=Array.from(e.files||[]),o=Array.from(e.items||[]);return n.length?n:o.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class tk extends Ie{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){let e=t.getTargetRanges(),n=this.view,o=n.document,r=null,s=null,a=[];if(t.dataTransfer&&(r=new Ic(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),o.selection.isFake)a=Array.from(o.selection.getRanges());else if(e.length)a=e.map(c=>n.domConverter.domRangeToView(c));else if(f.isAndroid){let c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(f.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`)){let c=s.split(/\n{1,2}/g),l=a;for(let d=0;d<c.length;d++){let h=c[d];h!=""&&(this.fire(t.type,t,{data:h,dataTransfer:r,targetRanges:l,inputType:t.inputType,isComposing:t.isComposing}),l=[o.selection.getFirstRange()]),d+1<c.length&&(this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:l}),l=[o.selection.getFirstRange()])}}else this.fire(t.type,t,{data:s,dataTransfer:r,targetRanges:a,inputType:t.inputType,isComposing:t.isComposing})}}class ek extends pe{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((o=n.keyCode)==W.arrowright||o==W.arrowleft||o==W.arrowup||o==W.arrowdown)){let r=new fn(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var o})}observe(){}}class nk extends pe{constructor(t){super(t);let e=this.document;e.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=W.tab||o.ctrlKey)return;let r=new fn(e,"tab",e.selection.getFirstRange());e.fire(r,o),r.stop.called&&n.stop()})}observe(){}}class ok extends J(){constructor(t){super(),this.document=new Bo(t),this.domConverter=new Oo(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new _f(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing","_isFocusChanging").to(this.document,"isFocused","isSelecting","isComposing","_isFocusChanging"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new ec(this.document),this.addObserver(Dc),this.addObserver(Zf),this.addObserver(Jf),this.addObserver(Ef),this.addObserver(Of),this.addObserver(Xf),this.addObserver(ek),this.addObserver(tk),this.addObserver(nk),this.document.on("arrowKey",wf,{priority:"low"}),mf(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){let n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();let o={};for(let{name:s,value:a}of Array.from(t.attributes))o[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(t,o);let r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(let s of this._observers.values())s.observe(t,e)}detachDomRoot(t){let e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:o})=>e.removeAttribute(o));let n=this._initialDomRootAttributes.get(e);for(let o in n)e.setAttribute(o,n[o]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(let[n,o]of this.domRoots)e.observe(o,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(let t of this._observers.values())t.disable()}enableObservers(){for(let t of this._observers.values())t.enable()}scrollToTheSelection(){let t=this.document.selection.getFirstRange();t&&function({target:e,viewportOffset:n=0}){let o=zi(e),r=o,s=null;for(;r;){let a;a=Ap(r==o?e:s),wp(a,()=>Ta(e,r));let c=Ta(e,r);if(bp(r,c,n),r.parent!=r){if(s=r.frameElement,r=r.parent,!s)return}else r=null}}({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){let t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new w("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;let e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){w.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.document._isFocusChanging=!1,this.change(()=>{})}destroy(){for(let t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return B._createAt(t,e)}createPositionAfter(t){return B._createAfter(t)}createPositionBefore(t){return B._createBefore(t)}createRange(...t){return new O(...t)}createRangeOn(t){return O._createOn(t)}createRangeIn(t){return O._createIn(t)}createSelection(...t){return new me(...t)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Te{is(){throw new Error("is() method is abstract")}}class Me extends Te{constructor(t){super(),this.parent=null,this._attrs=he(t)}get document(){return null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new w("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new w("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){let t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){let t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){let t=[],e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={}){let e=[],n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){let n=this.getAncestors(e),o=t.getAncestors(e),r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;let e=this.getPath(),n=t.getPath(),o=zt(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){let t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}_clone(t){return new Me(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=he(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}Me.prototype.is=function(i){return i==="node"||i==="model:node"};class Jn{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){let e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){let e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;let e=this._nodes[t];if(!e)throw new w("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(let n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new w("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(let n of e)if(!(n instanceof Me))throw new w("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,o,r,s){if(Math.max(o.length,n.length)>1e4)return n.slice(0,r).concat(o).concat(n.slice(r+s,n.length));{let a=Array.from(n);return a.splice(r,s,...o),a}}(this._nodes,Array.from(e),t,0)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class tt extends Me{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){let t=super.toJSON();return t.data=this.data,t}_clone(){return new tt(this.data,this.getAttributes())}static fromJSON(t){return new tt(t.data,t.attributes)}}tt.prototype.is=function(i){return i==="$text"||i==="model:$text"||i==="text"||i==="model:text"||i==="node"||i==="model:node"};class ne extends Te{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.offsetSize)throw new w("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new w("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){let t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={}){let e=[],n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}ne.prototype.is=function(i){return i==="$textProxy"||i==="model:$textProxy"||i==="textProxy"||i==="model:textProxy"};class Q extends Me{constructor(t,e,n){super(e),this.name=t,this._children=new Jn,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(let n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){let t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(let e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){let e=t?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new Q(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){let n=function(o){return typeof o=="string"?[new tt(o)]:(Wt(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new tt(r):r instanceof ne?new tt(r.data,r.getAttributes()):r))}(e);for(let o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){let n=this._children._removeNodes(t,e);for(let o of n)o.parent=null;return n}static fromJSON(t){let e;if(t.children){e=[];for(let n of t.children)n.name?e.push(Q.fromJSON(n)):e.push(tt.fromJSON(n))}return new Q(t.name,t.attributes,e)}}Q.prototype.is=function(i,t){return t?t===this.name&&(i==="element"||i==="model:element"):i==="element"||i==="model:element"||i==="node"||i==="model:node"};class fe{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new w("model-tree-walker-no-start-position",null);let e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new w("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=M._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,o,r;do o=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o=Xn(e,n),r=o||Tc(e,n,o);if(r instanceof Q)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=r),this.position=e,Ye("elementStart",r,t,e,1);if(r instanceof tt){let s;if(this.singleCharacters)s=1;else{let l=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<l&&(l=this.boundaries.end.offset),s=l-e.offset}let a=e.offset-r.startOffset,c=new ne(r,a,s);return e.offset+=s,this.position=e,Ye("text",c,t,e,s)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Ye("elementEnd",n,t,e)}_previous(){let t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o=e.parent,r=Xn(e,o),s=r||Mc(e,o,r);if(s instanceof Q)return e.offset--,this.shallow?(this.position=e,Ye("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this.position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():Ye("elementEnd",s,t,e));if(s instanceof tt){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=e.offset-d}let c=e.offset-s.startOffset,l=new ne(s,c-a,a);return e.offset-=a,this.position=e,Ye("text",l,t,e,a)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Ye("elementStart",n,t,e,1)}}function Ye(i,t,e,n,o){return{done:!1,value:{type:i,item:t,previousPosition:e,nextPosition:n,length:o}}}class M extends Te{constructor(t,e,n="toNone"){if(super(),!t.is("element")&&!t.is("documentFragment"))throw new w("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new w("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new w("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new w("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Xn(this,this.parent)}get nodeAfter(){let t=this.parent;return Tc(this,t,Xn(this,t))}get nodeBefore(){let t=this.parent;return Mc(this,t,Xn(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";let e=zt(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;let n=new fe(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){let t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){let e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];let e=zt(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){let e=this.getAncestors(),n=t.getAncestors(),o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}getShiftedBy(t){let e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){if(this.root!==t.root)return!1;let e=Math.min(this.path.length,t.path.length);for(let n=0;n<e;n++){let o=this.path[n]-t.path[n];if(o<-1||o>1)return!1;if(o===1)return Sc(t,this,n);if(o===-1)return Sc(this,t,n)}return this.path.length===t.path.length||(this.path.length>t.path.length?sr(this.path,e):sr(t.path,e))}hasSameParentAs(t){return this.root!==t.root?!1:zt(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=M._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){let e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){let e=t.movedRange,n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?M._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){let n=M._createAt(this);if(this.root!=t.root)return n;if(zt(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(zt(t.getParentPath(),this.getParentPath())=="prefix"){let o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;n.path[o]-=e}}return n}_getTransformedByInsertion(t,e){let n=M._createAt(this);if(this.root!=t.root)return n;if(zt(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(zt(t.getParentPath(),this.getParentPath())=="prefix"){let o=t.path.length-1;t.offset<=this.path[o]&&(n.path[o]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return M._createAt(this);let o=this._getTransformedByDeletion(t,n);return o===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):o._getTransformedByInsertion(e,n)}_getCombined(t,e){let n=t.path.length-1,o=M._createAt(e);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-t.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof M)return new M(t.root,t.path,t.stickiness);{let o=t;if(e=="end")e=o.maxOffset;else{if(e=="before")return this._createBefore(o,n);if(e=="after")return this._createAfter(o,n);if(e!==0&&!e)throw new w("model-createpositionat-offset-required",[this,t])}if(!o.is("element")&&!o.is("documentFragment"))throw new w("model-position-parent-incorrect",[this,t]);let r=o.getPath();return r.push(e),new this(o.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new w("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new w("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){let n=new M(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new w("model-position-fromjson-no-root",e,{rootName:t.root});return new M(e.getRoot(t.root),t.path,t.stickiness)}}function Xn(i,t){let e=t.getChild(t.offsetToIndex(i.offset));return e&&e.is("$text")&&e.startOffset<i.offset?e:null}function Tc(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset))}function Mc(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset)-1)}function Sc(i,t,e){return e+1!==i.path.length&&!!sr(t.path,e+1)&&!!function(n,o){let r=n.parent,s=n.path.length-1,a=0;for(;s>=o;){if(n.path[s]+a!==r.maxOffset)return!1;a=1,s--,r=r.parent}return!0}(i,e+1)}function sr(i,t){for(;t<i.length;){if(i[t]!==0)return!1;t++}return!0}M.prototype.is=function(i){return i==="position"||i==="model:position"};class C extends Te{constructor(t,e){super(),this.start=M._createAt(t),this.end=e?M._createAt(e):M._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new fe({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return zt(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);let n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}containsItem(t){let e=M._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){let e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new C(this.start,t.start)),this.containsPosition(t.end)&&e.push(new C(t.end,this.end))):e.push(new C(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new C(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let o=this.start,r=this.end;return t.start.isBefore(o)&&(o=t.start),t.end.isAfter(r)&&(r=t.end),new C(o,r)}getMinimalFlatRanges(){let t=[],e=this.start.getCommonPath(this.end).length,n=M._createAt(this.start),o=n.parent;for(;n.path.length>e+1;){let r=o.maxOffset-n.offset;r!==0&&t.push(new C(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){let r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new C(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new fe(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;let e=new fe(t);for(let n of e)yield n.item}*getPositions(t={}){t.boundaries=this;let e=new fe(t);yield e.position;for(let n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new C(this.start,this.end)]}getTransformedByOperations(t){let e=[new C(this.start,this.end)];for(let n of t)for(let o=0;o<e.length;o++){let r=e[o].getTransformedByOperation(n);e.splice(o,1,...r),o+=r.length-1}for(let n=0;n<e.length;n++){let o=e[n];for(let r=n+1;r<e.length;r++){let s=e[r];(o.containsRange(s)||s.containsRange(o)||o.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){let n=t.sourcePosition,o=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,o,e)}_getTransformedBySplitOperation(t){let e=this.start._getTransformedBySplitOperation(t),n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new C(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new C(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=M._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new C(e,n)):new C(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new C(this.start,t),new C(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{let o=new C(this.start,this.end);return o.start=o.start._getTransformedByInsertion(t,e),o.end=o.end._getTransformedByInsertion(t,e),[o]}}_getTransformedByMove(t,e,n,o=!1){if(this.isCollapsed){let h=this.start._getTransformedByMove(t,e,n);return[new C(h)]}let r=C._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!o&&(r.containsPosition(this.start)||r.containsPosition(this.end))){let h=this.start._getTransformedByMove(t,e,n),u=this.end._getTransformedByMove(t,e,n);return[new C(h,u)]}let a,c=this.getDifference(r),l=null,d=this.getIntersection(r);if(c.length==1?l=new C(c[0].start._getTransformedByDeletion(t,n),c[0].end._getTransformedByDeletion(t,n)):c.length==2&&(l=new C(this.start,this.end._getTransformedByDeletion(t,n))),a=l?l._getTransformedByInsertion(s,n,d!==null||o):[],d){let h=new C(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,h):a.push(h)}return a}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),o=this.end._getTransformedByDeletion(t,e);return n==null&&o==null?null:(n==null&&(n=t),o==null&&(o=t),new C(n,o))}static _createFromPositionAndShift(t,e){let n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return new this(M._createAt(t,0),M._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(M._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new w("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();let e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);let n=t.indexOf(e),o=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(o.start);r++)o.start=M._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(o.end);r++)o.end=M._createAt(t[r].end);return o}static fromJSON(t,e){return new this(M.fromJSON(t.start,e),M.fromJSON(t.end,e))}}C.prototype.is=function(i){return i==="range"||i==="model:range"};class Nc extends $(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;let n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new w("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;let n=this.findMappedViewAncestor(e.viewPosition),o=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=M._createAt(o,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){let n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(let o of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(o);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){let e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){let n=this._markerNameToElements.get(e)||new Set;n.add(t);let o=this._elementToMarkerNames.get(t)||new Set;o.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,o)}unbindElementFromMarkerName(t,e){let n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));let o=this._elementToMarkerNames.get(t);o&&(o.delete(e),o.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){let t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(let[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new C(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new O(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){let e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={}){let n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){let e=this._markerNameToElements.get(t);if(!e)return null;let n=new Set;for(let o of e)if(o.is("attributeElement"))for(let r of o.getElementsWithSameId())n.add(r);else n.add(o);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let o=0;for(let r=0;r<e;r++)o+=this.getModelLength(t.getChild(r));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(let n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,o=0,r=0,s=0;if(t.is("$text"))return new B(t,e);for(;r<e;)n=t.getChild(s),o=this.getModelLength(n),r+=o,s++;return r==e?this._moveViewPositionToTextNode(new B(t,s)):this.findPositionIn(n,e-(r-o))}_moveViewPositionToTextNode(t){let e=t.nodeBefore,n=t.nodeAfter;return e instanceof X?new B(e,e.data.length):n instanceof X?new B(n,0):t}}class ik{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Fo(e),t instanceof ne&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Fo(e),t instanceof ne&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Fo(e),t instanceof ne&&(t=this._getSymbolForTextProxy(t));let n=this._consumable.get(t);if(n===void 0)return null;let o=n.get(e);return o===void 0?null:o}revert(t,e){e=Fo(e),t instanceof ne&&(t=this._getSymbolForTextProxy(t));let n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){let e=[];for(let[n,o]of this._consumable)for(let[r,s]of o){let a=r.split(":")[0];s&&t==a&&e.push({event:r,item:n.name||n.description})}if(e.length)throw new w("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null,n=this._textProxyRegistry.get(t.startOffset);if(n){let o=n.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){let e=t.startOffset,n=t.endOffset,o=t.parent,r=Symbol("$textProxy:"+t.data),s,a;return s=this._textProxyRegistry.get(e),s||(s=new Map,this._textProxyRegistry.set(e,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(o,r),r}}function Fo(i){let t=i.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?i:t.length>1?t[0]+":"+t[1]:t[0]}class Bc extends $(){constructor(t){super(),this._conversionApi={dispatcher:this,...t},this._firedEventsMap=new WeakMap}convertChanges(t,e,n){let o=this._createConversionApi(n,t.getRefreshedItems());for(let s of t.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,o);let r=this._reduceChanges(t.getChanges());for(let s of r)s.type==="insert"?this._convertInsert(C._createFromPositionAndShift(s.position,s.length),o):s.type==="reinsert"?this._convertReinsert(C._createFromPositionAndShift(s.position,s.length),o):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,o):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,o);for(let s of o.mapper.flushUnboundMarkerNames()){let a=e.get(s).getRange();this._convertMarkerRemove(s,a,o),this._convertMarkerAdd(s,a,o)}for(let s of t.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(t,e,n,o={}){let r=this._createConversionApi(n,void 0,o);this._convertInsert(t,r);for(let[s,a]of e)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){let o=Array.from(e.getMarkersAtPosition(t.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,t,o),this.fire("selection",{selection:t},r),t.isCollapsed){for(let s of o){let a=s.getRange();if(!rk(t.getFirstPosition(),s,r.mapper))continue;let c={item:t,markerName:s.name,markerRange:a};r.consumable.test(t,"addMarker:"+s.name)&&this.fire(`addMarker:${s.name}`,c,r)}for(let s of t.getAttributeKeys()){let a={item:t,range:t.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:t.getAttribute(s)};r.consumable.test(t,"attribute:"+a.attributeKey)&&this.fire(`attribute:${a.attributeKey}:$text`,a,r)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,Array.from(t));for(let o of Array.from(t.getWalker({shallow:!0})).map(Pc))this._testAndFire("insert",o,e)}_convertRemove(t,e,n,o){this.fire(`remove:${n}`,{position:t,length:e},o)}_convertAttribute(t,e,n,o,r){this._addConsumablesForRange(r.consumable,t,`attribute:${e}`);for(let s of t){let a={item:s.item,range:C._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${e}`,a,r)}}_convertReinsert(t,e){let n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(let o of n.map(Pc))this._testAndFire("insert",{...o,reconversion:!0},e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;let o=`addMarker:${t}`;if(n.consumable.add(e,o),this.fire(o,{markerName:t,markerRange:e},n),n.consumable.consume(e,o)){this._addConsumablesForRange(n.consumable,e,o);for(let r of e.getItems()){if(!n.consumable.test(r,o))continue;let s={item:r,range:C._createOn(r),markerName:t,markerRange:e};this.fire(o,s,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire(`removeMarker:${t}`,{markerName:t,markerRange:e},n)}_reduceChanges(t){let e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(let n of e){let o=n.item;if(t.test(o,"insert")===null){t.add(o,"insert");for(let r of o.getAttributeKeys())t.add(o,"attribute:"+r)}}return t}_addConsumablesForRange(t,e,n){for(let o of e.getItems())t.add(o,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(let o of n)t.add(e,"addMarker:"+o.name);for(let o of e.getAttributeKeys())t.add(e,"attribute:"+o);return t}_testAndFire(t,e,n){let o=function(c,l){let d=l.item.is("element")?l.item.name:"$text";return`${c}:${d}`}(t,e),r=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(o))return;a.add(o)}else s.set(r,new Set([o]));this.fire(o,e,n)}_testAndFireAddAttributes(t,e){let n={item:t,range:C._createOn(t)};for(let o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,e)}_createConversionApi(t,e=new Set,n={}){let o={...this._conversionApi,consumable:new ik,writer:t,options:n,convertItem:r=>this._convertInsert(C._createOn(r),o),convertChildren:r=>this._convertInsert(C._createIn(r),o,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,o),canReuseView:r=>!e.has(o.mapper.toModelElement(r))};return this._firedEventsMap.set(o,new Map),o}}function rk(i,t,e){let n=t.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function Pc(i){return{item:i.item,range:C._createFromPositionAndShift(i.previousPosition,i.length)}}class ke extends $(Te){constructor(...t){super(),this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t.length&&this.setTo(...t)}get anchor(){if(this._ranges.length>0){let t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){let t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(let e of this._ranges){let n=!1;for(let o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(let t of this._ranges)yield new C(t.start,t.end)}getFirstRange(){let t=null;for(let e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new C(t.start,t.end):null}getLastRange(){let t=null;for(let e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new C(t.start,t.end):null}getFirstPosition(){let t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){let t=this.getLastRange();return t?t.end.clone():null}setTo(...t){let[e,n,o]=t;if(typeof n=="object"&&(o=n,n=void 0),e===null)this._setRanges([]);else if(e instanceof ke)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof C)this._setRanges([e],!!o&&!!o.backward);else if(e instanceof M)this._setRanges([new C(e)]);else if(e instanceof Me){let r=!!o&&!!o.backward,s;if(n=="in")s=C._createIn(e);else if(n=="on")s=C._createOn(e);else{if(n===void 0)throw new w("model-selection-setto-required-second-parameter",[this,e]);s=new C(M._createAt(e,n))}this._setRanges([s],r)}else{if(!Wt(e))throw new w("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,o&&!!o.backward)}}_setRanges(t,e=!1){let n=Array.from(t),o=n.some(r=>{if(!(r instanceof C))throw new w("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(s=>!s.isEqual(r))});(n.length!==this._ranges.length||o)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0}))}setFocus(t,e){if(this.anchor===null)throw new w("model-selection-setfocus-no-ranges",[this,t]);let n=M._createAt(t,e);if(n.compareWith(this.focus)=="same")return;let o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new C(n,o)),this._lastRangeBackward=!0):(this._pushRange(new C(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){let t=new WeakSet;for(let e of this.getRanges()){let n=Lc(e.start,t);n&&ar(n,e)&&(yield n);for(let r of e.getWalker()){let s=r.item;r.type=="elementEnd"&&sk(s,t,e)&&(yield s)}let o=Lc(e.end,t);o&&!e.end.isTouching(M._createAt(o,0))&&ar(o,e)&&(yield o)}}containsEntireContent(t=this.anchor.root){let e=M._createAt(t,0),n=M._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new C(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new w("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_replaceAllRanges(t){this._removeAllRanges();for(let e of t)this._pushRange(e)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function zc(i,t){return!t.has(i)&&(t.add(i),i.root.document.model.schema.isBlock(i)&&!!i.parent)}function sk(i,t,e){return zc(i,t)&&ar(i,e)}function Lc(i,t){let e=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0}),o=!1,r=n.find(s=>!o&&(o=e.isLimit(s),!o&&zc(s,t)));return n.forEach(s=>t.add(s)),r}function ar(i,t){let e=function(n){let o=n.root.document.model.schema,r=n.parent;for(;r;){if(o.isBlock(r))return r;r=r.parent}}(i);return e?!t.containsRange(C._createOn(e),!0):!0}ke.prototype.is=function(i){return i==="selection"||i==="model:selection"};class oe extends $(C){constructor(t,e){super(t,e),ak.call(this)}detach(){this.stopListening()}toRange(){return new C(this.start,this.end)}static fromRange(t){return new oe(t.start,t.end)}}function ak(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{let e=t[0];e.isDocumentOperation&&ck.call(this,e)},{priority:"low"})}function ck(i){let t=this.getTransformedByOperation(i),e=C._createFromRanges(t),n=!e.isEqual(this),o=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,i),r=null;if(n){e.root.rootName=="$graveyard"&&(r=i.type=="remove"?i.sourcePosition:i.deletionPosition);let s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}oe.prototype.is=function(i){return i==="liveRange"||i==="model:liveRange"||i=="range"||i==="model:range"};let to="selection:";class Qt extends $(Te){constructor(t){super(),this._selection=new lk(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(...t){this._selection.setTo(...t)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return to+t}static _isStoreAttributeKey(t){return t.startsWith(to)}}Qt.prototype.is=function(i){return i==="selection"||i=="model:selection"||i=="documentSelection"||i=="model:documentSelection"};class lk extends ke{constructor(t){super(),this.markers=new ee({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,n)=>{let o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(e,n,o,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(o,r){let s=o.document.differ;for(let a of s.getChanges()){if(a.type!="insert")continue;let c=a.position.parent;a.length===c.maxOffset&&o.enqueueChange(r,l=>{let d=Array.from(c.getAttributeKeys()).filter(h=>h.startsWith(to));for(let h of d)l.removeAttribute(h,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...t){super.setTo(...t),this._updateAttributes(!0),this.updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this.updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){let n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){let e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){let t=Nt();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new w("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this.updateMarkers()}_replaceAllRanges(t){this._validateSelectionRanges(t),super._replaceAllRanges(t)}_popRange(){this._ranges.pop().detach()}_pushRange(t){let e=this._prepareRange(t);e&&this._ranges.push(e)}_validateSelectionRanges(t){for(let e of t)if(!this._document._validateSelectionRange(e))throw new w("document-selection-wrong-position",this,{range:e})}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;let e=oe.fromRange(t);return e.on("change:range",(n,o,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;let s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}updateMarkers(){if(!this._observedMarkers.size)return;let t=[],e=!1;for(let o of this._model.markers){let r=o.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;let s=o.getRange();for(let a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&t.push(o)}let n=Array.from(this.markers);for(let o of t)this.markers.has(o)||(this.markers.add(o),e=!0);for(let o of Array.from(this.markers))t.includes(o)||(this.markers.remove(o),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){let n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1,r=Array.from(this.markers),s=this.markers.has(t);if(e){let a=!1;for(let c of this.getRanges())if(e.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(t),o=!0):!a&&s&&(this.markers.remove(t),o=!0)}else s&&(this.markers.remove(t),o=!0);o&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){let e=he(this._getSurroundingAttributes()),n=he(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(let[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);let o=[];for(let[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||o.push(r);for(let[r]of n)this.hasAttribute(r)||o.push(r);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,n=!0){let o=n?"normal":"low";return o=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0)}_removeAttribute(t,e=!0){let n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){let e=new Set;for(let[n,o]of this.getAttributes())t.get(n)!==o&&this._removeAttribute(n,!1);for(let[n,o]of t)this._setAttribute(n,o,!1)&&e.add(n);return e}*getStoredAttributes(){let t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(let e of t.getAttributeKeys())e.startsWith(to)&&(yield[e.substr(to.length),t.getAttribute(e)])}_getSurroundingAttributes(){let t=this.getFirstPosition(),e=this._model.schema,n=null;if(this.isCollapsed){let o=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=Vo(o)),n||(n=Vo(r)),!this.isGravityOverridden&&!n){let s=o;for(;s&&!e.isInline(s)&&!n;)s=s.previousSibling,n=Vo(s)}if(!n){let s=r;for(;s&&!e.isInline(s)&&!n;)s=s.nextSibling,n=Vo(s)}n||(n=this.getStoredAttributes())}else{let o=this.getFirstRange();for(let r of o){if(r.item.is("element")&&e.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){let e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function Vo(i){return i instanceof ne||i instanceof tt?i.getAttributes():null}class Oc{constructor(t){this._dispatchers=t}add(t){for(let e of this._dispatchers)t(e);return this}}let Ke=function(i){return Ni(i,5)};class dk extends Oc{elementToElement(t){return this.add(function(e){let n=Fc(e.model),o=eo(e.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,function(s,a=uk){return(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;let h=s(l.item,d,l);if(!h)return;a(l.item,d.consumable);let u=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,h),d.writer.insert(u,h),d.convertAttributes(l.item),qc(h,l.item.getChildren(),d,{reconversion:l.reconversion})}}(o,Wc(n)),{priority:e.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",Hc(n),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){let n=Fc(e.model),o=eo(e.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new w("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var s,a;r.on(`insert:${n.name}`,(s=o,a=Wc(n),(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;let h=new Map;d.writer._registerSlotFactory(function(m,p,k){return(b,A="children")=>{let y=b.createContainerElement("$slot"),N=null;if(A==="children")N=Array.from(m.getChildren());else{if(typeof A!="function")throw new w("conversion-slot-mode-unknown",k.dispatcher,{modeOrFilter:A});N=Array.from(m.getChildren()).filter(z=>A(z))}return p.set(y,N),y}}(l.item,h,d));let u=s(l.item,d,l);if(d.writer._clearSlotFactory(),!u)return;(function(m,p,k){let b=Array.from(p.values()).flat(),A=new Set(b);if(A.size!=b.length)throw new w("conversion-slot-filter-overlap",k.dispatcher,{element:m});if(A.size!=m.childCount)throw new w("conversion-slot-filter-incomplete",k.dispatcher,{element:m})})(l.item,h,d),a(l.item,d.consumable);let g=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,u),d.writer.insert(g,u),d.convertAttributes(l.item),function(m,p,k,b){k.mapper.on("modelToViewPosition",N,{priority:"highest"});let A=null,y=null;for([A,y]of p)qc(m,y,k,b),k.writer.move(k.writer.createRangeIn(A),k.writer.createPositionBefore(A)),k.writer.remove(A);function N(z,q){let K=q.modelPosition.nodeAfter,yt=y.indexOf(K);yt<0||(q.viewPosition=q.mapper.findPositionIn(A,yt))}k.mapper.off("modelToViewPosition",N)}(u,h,d,{reconversion:l.reconversion})}),{priority:e.converterPriority||"normal"}),r.on("reduceChanges",Hc(n),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=Ke(e);let n=e.model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(let s of n.values)e.view[s]=eo(e.view[s],"attribute");else e.view=eo(e.view,"attribute");let r=Vc(e);return s=>{s.on(o,function(a){return(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;let h=a(l.attributeOldValue,d,l),u=a(l.attributeNewValue,d,l);if(!h&&!u)return;d.consumable.consume(l.item,c.name);let g=d.writer,m=g.document.selection;if(l.item instanceof ke||l.item instanceof Qt)g.wrap(m.getFirstRange(),u);else{let p=d.mapper.toViewRange(l.range);l.attributeOldValue!==null&&h&&(p=g.unwrap(p,h)),l.attributeNewValue!==null&&u&&g.wrap(p,u)}}}(r),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=Ke(e);let n=e.model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(let s of n.values)e.view[s]=Uc(e.view[s]);else e.view=Uc(e.view);let r=Vc(e);return s=>{var a;s.on(o,(a=r,(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;let h=a(l.attributeOldValue,d,l),u=a(l.attributeNewValue,d,l);if(!h&&!u)return;d.consumable.consume(l.item,c.name);let g=d.mapper.toViewElement(l.item),m=d.writer;if(!g)throw new w("conversion-attribute-to-attribute-on-text",d.dispatcher,l);if(l.attributeOldValue!==null&&h)if(h.key=="class"){let p=xt(h.value);for(let k of p)m.removeClass(k,g)}else if(h.key=="style"){let p=Object.keys(h.value);for(let k of p)m.removeStyle(k,g)}else m.removeAttribute(h.key,g);if(l.attributeNewValue!==null&&u)if(u.key=="class"){let p=xt(u.value);for(let k of p)m.addClass(k,g)}else if(u.key=="style"){let p=Object.keys(u.value);for(let k of p)m.setStyle(k,u.value[k],g)}else m.setAttribute(u.key,u.value,g)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){let n=eo(e.view,"ui");return o=>{var r;o.on(`addMarker:${e.model}`,(r=n,(s,a,c)=>{a.isOpening=!0;let l=r(a,c);a.isOpening=!1;let d=r(a,c);if(!l||!d)return;let h=a.markerRange;if(h.isCollapsed&&!c.consumable.consume(h,s.name))return;for(let m of h)if(!c.consumable.consume(m.item,s.name))return;let u=c.mapper,g=c.writer;g.insert(u.toViewPosition(h.start),l),c.mapper.bindElementToMarker(l,a.markerName),h.isCollapsed||(g.insert(u.toViewPosition(h.end),d),c.mapper.bindElementToMarker(d,a.markerName)),s.stop()}),{priority:e.converterPriority||"normal"}),o.on(`removeMarker:${e.model}`,(s,a,c)=>{let l=c.mapper.markerNameToElements(a.markerName);if(l){for(let d of l)c.mapper.unbindElementFromMarkerName(d,a.markerName),c.writer.clear(c.writer.createRangeOn(d),d);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}},{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var o;n.on(`addMarker:${e.model}`,(o=e.view,(r,s,a)=>{if(!s.item||!(s.item instanceof ke||s.item instanceof Qt||s.item.is("$textProxy")))return;let c=cr(o,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;let l=a.writer,d=Rc(l,c),h=l.document.selection;if(s.item instanceof ke||s.item instanceof Qt)l.wrap(h.getFirstRange(),d);else{let u=a.mapper.toViewRange(s.range),g=l.wrap(u,d);for(let m of g.getItems())if(m.is("attributeElement")&&m.isSimilar(d)){a.mapper.bindElementToMarker(m,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on(`addMarker:${e.model}`,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof Q))return;let l=cr(r,a,c);if(!l||!c.consumable.test(a.item,s.name))return;let d=c.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(let h of C._createIn(a.item))c.consumable.consume(h.item,s.name);d.getCustomProperty("addHighlight")(d,l,c.writer),c.mapper.bindElementToMarker(d,a.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on(`removeMarker:${e.model}`,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;let l=cr(r,a,c);if(!l)return;let d=Rc(c.writer,l),h=c.mapper.markerNameToElements(a.markerName);if(h){for(let u of h)c.mapper.unbindElementFromMarkerName(u,a.markerName),u.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(u),d):u.getCustomProperty("removeHighlight")(u,l.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){e=Ke(e);let n=e.model,o=e.view;return o||(o=r=>({group:n,name:r.substr(e.model.length+1)})),r=>{var s;r.on(`addMarker:${n}`,(s=o,(a,c,l)=>{let d=s(c.markerName,l);if(!d)return;let h=c.markerRange;l.consumable.consume(h,a.name)&&(jc(h,!1,l,c,d),jc(h,!0,l,c,d),a.stop())}),{priority:e.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(a){return(c,l,d)=>{let h=a(l.markerName,d);if(!h)return;let u=d.mapper.markerNameToElements(l.markerName);if(u){for(let m of u)d.mapper.unbindElementFromMarkerName(m,l.markerName),m.is("containerElement")?(g(`data-${h.group}-start-before`,m),g(`data-${h.group}-start-after`,m),g(`data-${h.group}-end-before`,m),g(`data-${h.group}-end-after`,m)):d.writer.clear(d.writer.createRangeOn(m),m);d.writer.clearClonedElementsGroup(l.markerName),c.stop()}function g(m,p){if(p.hasAttribute(m)){let k=new Set(p.getAttribute(m).split(","));k.delete(h.name),k.size==0?d.writer.removeAttribute(m,p):d.writer.setAttribute(m,Array.from(k).join(","),p)}}}}(o),{priority:e.converterPriority||"normal"})}}(t))}}function Rc(i,t){let e=i.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function jc(i,t,e,n,o){let r=t?i.start:i.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,l;t&&s||!t&&!a?(c=s,l=!0):(c=a,l=!1);let d=e.mapper.toViewElement(c);if(d)return void function(h,u,g,m,p,k){let b=`data-${k.group}-${u?"start":"end"}-${g?"before":"after"}`,A=h.hasAttribute(b)?h.getAttribute(b).split(","):[];A.unshift(k.name),m.writer.setAttribute(b,A.join(","),h),m.mapper.bindElementToMarker(h,p.markerName)}(d,t,l,e,n,o)}(function(c,l,d,h,u){let g=`${u.group}-${l?"start":"end"}`,m=u.name?{name:u.name}:null,p=d.writer.createUIElement(g,m);d.writer.insert(c,p),d.mapper.bindElementToMarker(p,h.markerName)})(e.mapper.toViewPosition(r),t,e,n,o)}function Fc(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function eo(i,t){return typeof i=="function"?i:(e,n)=>function(o,r,s){typeof o=="string"&&(o={name:o});let a,c=r.writer,l=Object.assign({},o.attributes);if(s=="container")a=c.createContainerElement(o.name,l);else if(s=="attribute"){let d={priority:o.priority||Ge.DEFAULT_PRIORITY};a=c.createAttributeElement(o.name,l,d)}else a=c.createUIElement(o.name,l);if(o.styles){let d=Object.keys(o.styles);for(let h of d)c.setStyle(h,o.styles[h],a)}if(o.classes){let d=o.classes;if(typeof d=="string")c.addClass(d,a);else for(let h of d)c.addClass(h,a)}return a}(i,n,t)}function Vc(i){return i.model.values?(t,e,n)=>{let o=i.view[t];return o?o(t,e,n):null}:i.view}function Uc(i){return typeof i=="string"?t=>({key:i,value:t}):typeof i=="object"?i.value?()=>i:t=>({key:i.key,value:t}):i}function cr(i,t,e){let n=typeof i=="function"?i(t,e):i;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Hc(i){let t=function(e){return(n,o)=>{if(!n.is("element",e.name))return!1;if(o.type=="attribute"){if(e.attributes.includes(o.attributeKey))return!0}else if(e.children)return!0;return!1}}(i);return(e,n)=>{let o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(let r of n.changes){let s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(s&&t(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);let a=M._createBefore(s);o.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else o.push(r)}n.changes=o}}function Wc(i){return(t,e,n={})=>{let o=["insert"];for(let r of i.attributes)t.hasAttribute(r)&&o.push(`attribute:${r}`);return!!o.every(r=>e.test(t,r))&&(n.preflight||o.forEach(r=>e.consume(t,r)),!0)}}function qc(i,t,e,n){for(let o of t)hk(i.root,o,e,n)||e.convertItem(o)}function hk(i,t,e,n){let{writer:o,mapper:r}=e;if(!n.reconversion)return!1;let s=r.toViewElement(t);return!(!s||s.root==i)&&!!e.canReuseView(s)&&(o.move(o.createRangeOn(s),r.toViewPosition(M._createBefore(t))),!0)}function uk(i,t,{preflight:e}={}){return e?t.test(i,"insert"):t.consume(i,"insert")}function Gc(i){let{schema:t,document:e}=i.model;for(let n of e.getRootNames()){let o=e.getRoot(n);if(o.isEmpty&&!t.checkChild(o,"$text")&&t.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function $c(i,t,e){let n=e.createContext(i);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function Yc(i,t){let e=t.createElement("paragraph");return t.insert(e,i),t.createPositionAt(e,0)}class gk extends Oc{elementToElement(t){return this.add(Kc(t))}elementToAttribute(t){return this.add(function(e){e=Ke(e),Qc(e);let n=Zc(e,!1),o=lr(e.view),r=o?`element:${o}`:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=Ke(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});let s=r.view.key,a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(e)),Qc(e,n);let o=Zc(e,!0);return r=>{r.on("element",o,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){let n=function(o){return(r,s)=>{let a=typeof o=="string"?o:o(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(e.model);return Kc({...e,model:n})}(t))}dataToMarker(t){return this.add(function(e){e=Ke(e),e.model||(e.model=s=>s?e.view+":"+s:e.view);let n={view:e.view,model:e.model},o=dr(Jc(n,"start")),r=dr(Jc(n,"end"));return s=>{s.on(`element:${e.view}-start`,o,{priority:e.converterPriority||"normal"}),s.on(`element:${e.view}-end`,r,{priority:e.converterPriority||"normal"});let a=$t.get("low"),c=$t.get("highest"),l=$t.get(e.converterPriority)/c;s.on("element",function(d){return(h,u,g)=>{let m=`data-${d.view}`;function p(k,b){for(let A of b){let y=d.model(A,g),N=g.writer.createElement("$marker",{"data-name":y});g.writer.insert(N,k),u.modelCursor.isEqual(k)?u.modelCursor=u.modelCursor.getShiftedBy(1):u.modelCursor=u.modelCursor._getTransformedByInsertion(k,1),u.modelRange=u.modelRange._getTransformedByInsertion(k,1)[0]}}(g.consumable.test(u.viewItem,{attributes:m+"-end-after"})||g.consumable.test(u.viewItem,{attributes:m+"-start-after"})||g.consumable.test(u.viewItem,{attributes:m+"-end-before"})||g.consumable.test(u.viewItem,{attributes:m+"-start-before"}))&&(u.modelRange||Object.assign(u,g.convertChildren(u.viewItem,u.modelCursor)),g.consumable.consume(u.viewItem,{attributes:m+"-end-after"})&&p(u.modelRange.end,u.viewItem.getAttribute(m+"-end-after").split(",")),g.consumable.consume(u.viewItem,{attributes:m+"-start-after"})&&p(u.modelRange.end,u.viewItem.getAttribute(m+"-start-after").split(",")),g.consumable.consume(u.viewItem,{attributes:m+"-end-before"})&&p(u.modelRange.start,u.viewItem.getAttribute(m+"-end-before").split(",")),g.consumable.consume(u.viewItem,{attributes:m+"-start-before"})&&p(u.modelRange.start,u.viewItem.getAttribute(m+"-start-before").split(",")))}}(n),{priority:a+l})}}(t))}}function Kc(i){let t=dr(i=Ke(i)),e=lr(i.view),n=e?`element:${e}`:"element";return o=>{o.on(n,t,{priority:i.converterPriority||"normal"})}}function lr(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function dr(i){let t=new ge(i.view);return(e,n,o)=>{let r=t.match(n.viewItem);if(!r)return;let s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;let a=function(c,l,d){return c instanceof Function?c(l,d):d.writer.createElement(c)}(i.model,n.viewItem,o);a&&o.safeInsert(a,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,a),o.updateConversionResult(a,n))}}function Qc(i,t=null){let e=t===null||(r=>r.getAttribute(t)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?e:i.model.value;i.model={key:n,value:o}}function Zc(i,t){let e=new ge(i.view);return(n,o,r)=>{if(!o.modelRange&&t)return;let s=e.match(o.viewItem);if(!s||(function(d,h){let u=typeof d=="function"?d(h):d;return typeof u=="object"&&!lr(u)?!1:!u.classes&&!u.attributes&&!u.styles}(i.view,o.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(o.viewItem,s.match)))return;let a=i.model.key,c=typeof i.model.value=="function"?i.model.value(o.viewItem,r):i.model.value;if(c===null)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)),function(d,h,u,g){let m=!1;for(let p of Array.from(d.getItems({shallow:u})))g.schema.checkAttribute(p,h.key)&&(m=!0,p.hasAttribute(h.key)||g.writer.setAttribute(h.key,h.value,p));return m}(o.modelRange,{key:a,value:c},t,r)&&(r.consumable.test(o.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(o.viewItem,s.match))}}function Jc(i,t){return{view:`${i.view}-${t}`,model:(e,n)=>{let o=e.getAttribute("name"),r=i.model(o,n);return n.writer.createElement("$marker",{"data-name":r})}}}class mk extends J(){constructor(t,e){super(),this.model=t,this.view=new ok(e),this.mapper=new Nc,this.downcastDispatcher=new Bc({mapper:this.mapper,schema:t.schema});let n=this.model.document,o=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(o,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(c,l)=>{let d=l.newSelection,h=[];for(let g of d.getRanges())h.push(a.toModelRange(g));let u=s.createSelection(h,{backward:d.isBackward});u.isEqual(s.document.selection)||s.change(g=>{g.setSelection(u)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,c)=>{if(!c.consumable.consume(a.item,s.name))return;let l=c.writer,d=c.mapper.toViewPosition(a.range.start),h=l.createText(a.item.data);l.insert(d,h)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,a,c)=>{c.convertAttributes(a.item),a.reconversion||!a.item.is("element")||a.item.isEmpty||c.convertChildren(a.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,c)=>{let l=c.mapper.toViewPosition(a.position),d=a.position.getShiftedBy(a.length),h=c.mapper.toViewPosition(d,{isPhantom:!0}),u=c.writer.createRange(l,h),g=c.writer.remove(u.getTrimmed());for(let m of c.writer.createRangeIn(g).getItems())c.mapper.unbindViewElement(m,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{let l=c.writer,d=l.document.selection;for(let h of d.getRanges())h.isCollapsed&&h.end.parent.isAttached()&&c.writer.mergeAttributes(h.start);l.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,a,c)=>{let l=a.selection;if(l.isCollapsed||!c.consumable.consume(l,"selection"))return;let d=[];for(let h of l.getRanges())d.push(c.mapper.toViewRange(h));c.writer.setSelection(d,{backward:l.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{let l=a.selection;if(!l.isCollapsed||!c.consumable.consume(l,"selection"))return;let d=c.writer,h=l.getFirstPosition(),u=c.mapper.toViewPosition(h),g=d.breakAttributes(u);d.setSelection(g)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;let a=new Xa(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){let e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new w("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}class no{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new pk(t),this._consumables.set(t,n)),n.add(e))}test(t,e){let n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){let n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){let e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(let s of n)s!="style"&&s!="class"&&e.attributes.push(s);let o=t.getClassNames();for(let s of o)e.classes.push(s);let r=t.getStyleNames();for(let s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new no),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,no.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(let n of t.getChildren())e=no.createFrom(n,e);return e}}let Uo=["attributes","classes","styles"];class pk{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(let e of Uo)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(let e of Uo)if(e in t){let n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(let e of Uo)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(let e of Uo)e in t&&this._revert(e,t[e])}_add(t,e){let n=Lt(e)?e:[e],o=this._consumables[t];for(let r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new w("viewconsumable-invalid-attribute",this);if(o.set(r,!0),t==="styles")for(let s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!0)}}_test(t,e){let n=Lt(e)?e:[e],o=this._consumables[t];for(let r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){let s=o.get(r);if(s===void 0)return null;if(!s)return!1}else{let s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(t,e){let n=Lt(e)?e:[e],o=this._consumables[t];for(let r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(o.set(r,!1),t=="styles")for(let s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!1)}else{let s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){let n=Lt(e)?e:[e],o=this._consumables[t];for(let r of n)if(t!=="attributes"||r!=="class"&&r!=="style")o.get(r)===!1&&o.set(r,!0);else{let s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class fk extends J(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new Qe(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new Qe(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new w("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new w("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:"is"in t&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){let e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){let e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){let e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){let e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){let e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){let e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){let n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e){if(t instanceof M){let n=t.nodeBefore,o=t.nodeAfter;if(!(n instanceof Q))throw new w("schema-check-merge-no-element-before",this);if(!(o instanceof Q))throw new w("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(let n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,o])=>{if(!o)return;let r=t(n,o);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,o])=>{let r=t(n,o);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof M?e=t.parent:e=(t instanceof C?[t]:Array.from(t.getRanges())).reduce((n,o)=>{let r=o.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){let n=[...t.getFirstPosition().getAncestors(),new tt("",t.getAttributes())];return this.checkAttribute(n,e)}{let n=t.getRanges();for(let o of n)for(let r of o)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(let o of n)yield*o.getMinimalFlatRanges()}(t);for(let n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new C(t);let n,o,r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new fe({boundaries:C._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(o=new fe({boundaries:C._createIn(r),startPosition:t}));for(let s of function*(a,c){let l=!1;for(;!l;){if(l=!0,a){let d=a.next();d.done||(l=!1,yield{walker:a,value:d.value})}if(c){let d=c.next();d.done||(l=!1,yield{walker:c,value:d.value})}}}(n,o)){let a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return C._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new C(c.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(t,e,n){let o=n.model;for(let[r,s]of Object.entries(e))o.schema.checkAttribute(t,r)&&n.setAttribute(r,s,t)}removeDisallowedAttributes(t,e){for(let n of t)if(n.is("$text"))Xc(this,n,e);else{let o=C._createIn(n).getPositions();for(let r of o)Xc(this,r.nodeBefore||r.parent,e)}}getAttributesWithProperty(t,e,n){let o={};for(let[r,s]of t.getAttributes()){let a=this.getAttributeProperties(r);a[e]!==void 0&&(n!==void 0&&n!==a[e]||(o[r]=s))}return o}createContext(t){return new Qe(t)}_clearCache(){this._compiledDefinitions=null}_compile(){let t={},e=this._sourceDefinitions,n=Object.keys(e);for(let o of n)t[o]=kk(e[o],o);for(let o of n)bk(t,o);for(let o of n)wk(t,o);for(let o of n)Ak(t,o);for(let o of n)_k(t,o),Ck(t,o);for(let o of n)vk(t,o),yk(t,o),xk(t,o);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){let o=e.getItem(n);if(t.allowIn.includes(o.name)){if(n==0)return!0;{let r=this.getDefinition(o);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,o=t.start;for(let r of t.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(C._createIn(r),e)),this.checkAttribute(r,e)||(n.isEqual(o)||(yield new C(n,o)),n=M._createAfter(r)),o=M._createAfter(r);n.isEqual(o)||(yield new C(n,o))}}class Qe{constructor(t){if(t instanceof Qe)return t;let e;e=typeof t=="string"?[t]:Array.isArray(t)?t:t.getAncestors({includeSelf:!0}),this._items=e.map(Dk)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){let e=new Qe([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function kk(i,t){let e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(let r of n){let s=Object.keys(r).filter(a=>a.startsWith("is"));for(let a of s)o[a]=!!r[a]}}(i,e),Ze(i,e,"allowIn"),Ze(i,e,"allowContentOf"),Ze(i,e,"allowWhere"),Ze(i,e,"allowAttributes"),Ze(i,e,"allowAttributesOf"),Ze(i,e,"allowChildren"),Ze(i,e,"inheritTypesFrom"),function(n,o){for(let r of n){let s=r.inheritAllFrom;s&&(o.allowContentOf.push(s),o.allowWhere.push(s),o.allowAttributesOf.push(s),o.inheritTypesFrom.push(s))}}(i,e),e}function bk(i,t){let e=i[t];for(let n of e.allowChildren){let o=i[n];o&&o.allowIn.push(t)}e.allowChildren.length=0}function wk(i,t){for(let e of i[t].allowContentOf)i[e]&&Ek(i,e).forEach(n=>{n.allowIn.push(t)});delete i[t].allowContentOf}function Ak(i,t){for(let e of i[t].allowWhere){let n=i[e];if(n){let o=n.allowIn;i[t].allowIn.push(...o)}}delete i[t].allowWhere}function _k(i,t){for(let e of i[t].allowAttributesOf){let n=i[e];if(n){let o=n.allowAttributes;i[t].allowAttributes.push(...o)}}delete i[t].allowAttributesOf}function Ck(i,t){let e=i[t];for(let n of e.inheritTypesFrom){let o=i[n];if(o){let r=Object.keys(o).filter(s=>s.startsWith("is"));for(let s of r)s in e||(e[s]=o[s])}}delete e.inheritTypesFrom}function vk(i,t){let e=i[t],n=e.allowIn.filter(o=>i[o]);e.allowIn=Array.from(new Set(n))}function yk(i,t){let e=i[t];for(let n of e.allowIn)i[n].allowChildren.push(t)}function xk(i,t){let e=i[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function Ze(i,t,e){for(let n of i){let o=n[e];typeof o=="string"?t[e].push(o):Array.isArray(o)&&t[e].push(...o)}}function Ek(i,t){let e=i[t];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(e.name));var n}function Dk(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:t=>i.getAttribute(t)}}function Xc(i,t,e){for(let n of t.getAttributeKeys())i.checkAttribute(t,n)||e.removeAttribute(n,t)}class Ik extends $(){constructor(t){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...t,consumable:null,writer:null,store:null,convertItem:(e,n)=>this._convertItem(e,n),convertChildren:(e,n)=>this._convertChildren(e,n),safeInsert:(e,n)=>this._safeInsert(e,n),updateConversionResult:(e,n)=>this._updateConversionResult(e,n),splitToAllowedParent:(e,n)=>this._splitToAllowedParent(e,n),getSplitParts:e=>this._getSplitParts(e),keepEmptyElement:e=>this._keepEmptyElement(e)}}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,a){let c;for(let l of new Qe(s)){let d={};for(let u of l.getAttributeKeys())d[u]=l.getAttribute(u);let h=a.createElement(l.name,d);c&&a.insert(h,c),c=M._createAt(h,0)}return c}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=no.createFrom(t),this.conversionApi.store={};let{modelRange:o}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(o){this._removeEmptyElements();for(let s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,a){let c=new Set,l=new Map,d=C._createIn(s).getItems();for(let h of d)h.is("element","$marker")&&c.add(h);for(let h of c){let u=h.getAttribute("data-name"),g=a.createPositionBefore(h);l.has(u)?l.get(u).end=g.clone():l.set(u,new C(g.clone())),a.remove(h)}return l}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){let n={viewItem:t,modelCursor:e,modelRange:null};if(t.is("element")?this.fire(`element:${t.name}`,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof C))throw new w("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:M._createAt(e,0),o=new C(n);for(let r of Array.from(t.getChildren())){let s=this._convertItem(r,n);s.modelRange instanceof C&&(o.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(t,e){let n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){let n=this._getSplitParts(t),o=this.conversionApi.writer;e.modelRange||(e.modelRange=o.createRange(o.createPositionBefore(t),o.createPositionAfter(n[n.length-1])));let r=this._cursorParents.get(t);e.modelCursor=r?o.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){let{schema:n,writer:o}=this.conversionApi,r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return $c(e,t,n)?{position:Yc(e,o)}:null;let s=this.conversionApi.writer.split(e,r),a=[];for(let l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{let d=a.pop(),h=l.item;this._registerSplitPair(d,h)}let c=s.range.end.parent;return this._cursorParents.set(t,c),{position:s.position,cursorParent:c}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);let n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(let e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}class Tk{getHtml(t){let e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class Mk{constructor(t){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new Oo(t,{renderingMode:"data"}),this.htmlWriter=new Tk}toData(t){let e=this.domConverter.viewToDom(t);return this.htmlWriter.getHtml(e)}toView(t){let e=this._toDom(t);return this.domConverter.domToView(e,{skipComments:this.skipComments})}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);let e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class Sk extends $(){constructor(t,e){super(),this.model=t,this.mapper=new Nc,this.downcastDispatcher=new Bc({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,o,r)=>{if(!r.consumable.consume(o.item,n.name))return;let s=r.writer,a=r.mapper.toViewPosition(o.range.start),c=s.createText(o.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,r)=>{r.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||r.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new Ik({schema:t.schema}),this.viewDocument=new Bo(e),this.stylesProcessor=e,this.htmlProcessor=new Mk(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new ec(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:r,consumable:s,writer:a})=>{let c=o.modelCursor;if(!s.test(o.viewItem))return;if(!r.checkChild(c,"$text")){if(!$c(c,"$text",r)||o.viewItem.data.trim().length==0)return;c=Yc(c,a)}s.consume(o.viewItem);let l=a.createText(o.viewItem.data);a.insert(l,c),o.modelRange=a.createRange(c,c.getShiftedBy(l.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){let{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){let{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),J().prototype.decorate.call(this,"init"),J().prototype.decorate.call(this,"set"),J().prototype.decorate.call(this,"get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Gc)},{priority:"lowest"})}get(t={}){let{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new w("datacontroller-get-non-existent-root",this);let o=this.model.document.getRoot(e);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,t):""}stringify(t,e={}){let n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){let n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();let r=C._createIn(t),s=new $e(n);this.mapper.bindElements(t,s);let a=t.is("documentFragment")?t.markers:function(c){let l=[],d=c.root.document;if(!d)return new Map;let h=C._createIn(c);for(let u of d.model.markers){let g=u.getRange(),m=g.isCollapsed,p=g.start.isEqual(h.start)||g.end.isEqual(h.end);if(m&&p)l.push([u.name,g]);else{let k=h.getIntersection(g);k&&l.push([u.name,k])}}return l.sort(([u,g],[m,p])=>{if(g.end.compareWith(p.start)!=="after")return 1;if(g.start.compareWith(p.end)!=="before")return-1;switch(g.start.compareWith(p.start)){case"before":return 1;case"after":return-1;default:switch(g.end.compareWith(p.end)){case"before":return 1;case"after":return-1;default:return m.localeCompare(u)}}}),new Map(l)}(t);return this.downcastDispatcher.convert(r,a,o,e),s}init(t){if(this.model.document.version)throw new w("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new w("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(let o of Object.keys(e)){let r=this.model.document.getRoot(o);n.insert(this.parse(e[o],r),r,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new w("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(let r of Object.keys(n)){let s=this.model.document.getRoot(r);o.remove(o.createRangeIn(s)),o.insert(this.parse(n[r],s),s,0)}})}parse(t,e="$root"){let n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(let e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}class Nk{constructor(t,e){this._helpers=new Map,this._downcast=xt(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=xt(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){let n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new w("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new w("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(let{model:e,view:n}of hr(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(let{model:e,view:n}of hr(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(let{model:e,view:n}of hr(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new w("conversion-group-exists",this);let o=n?new dk(e):new gk(e);this._helpers.set(t,o)}}function*hr(i){if(i.model.values)for(let t of i.model.values){let e={key:i.model.key,value:t},n=i.view[t],o=i.upcastAlso?i.upcastAlso[t]:void 0;yield*tl(e,n,o)}else yield*tl(i.model,i.view,i.upcastAlso)}function*tl(i,t,e){if(yield{model:i,view:t},e)for(let n of xt(e))yield{model:i,view:n}}class Zt{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){let t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t,e){return new this(t.baseVersion)}}function ur(i,t){let e=nl(t),n=e.reduce((s,a)=>s+a.offsetSize,0),o=i.parent;ro(i);let r=i.index;return o._insertChild(r,e),io(o,r+e.length),io(o,r),new C(i,i.getShiftedBy(n))}function el(i){if(!i.isFlat)throw new w("operation-utils-remove-range-not-flat",this);let t=i.start.parent;ro(i.start),ro(i.end);let e=t._removeChildren(i.start.index,i.end.index-i.start.index);return io(t,i.start.index),e}function oo(i,t){if(!i.isFlat)throw new w("operation-utils-move-range-not-flat",this);let e=el(i);return ur(t=t._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),e)}function nl(i){let t=[];(function e(n){if(typeof n=="string")t.push(new tt(n));else if(n instanceof ne)t.push(new tt(n.data,n.getAttributes()));else if(n instanceof Me)t.push(n);else if(Wt(n))for(let o of n)e(o)})(i);for(let e=1;e<t.length;e++){let n=t[e],o=t[e-1];n instanceof tt&&o instanceof tt&&ol(n,o)&&(t.splice(e-1,2,new tt(o.data+n.data,o.getAttributes())),e--)}return t}function io(i,t){let e=i.getChild(t-1),n=i.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&ol(e,n)){let o=new tt(e.data+n.data,e.getAttributes());i._removeChildren(t-1,2),i._insertChild(t-1,o)}}function ro(i){let t=i.textNode,e=i.parent;if(t){let n=i.offset-t.startOffset,o=t.index;e._removeChildren(o,1);let r=new tt(t.data.substr(0,n),t.getAttributes()),s=new tt(t.data.substr(n),t.getAttributes());e._insertChild(o,[r,s])}}function ol(i,t){let e=i.getAttributes(),n=t.getAttributes();for(let o of e){if(o[1]!==t.getAttribute(o[0]))return!1;n.next()}return n.next().done}class Y extends Zt{constructor(t,e,n,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new Y(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){let t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Y(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){let t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new w("move-operation-nodes-do-not-exist",this);if(t===e&&n<o&&o<n+this.howMany)throw new w("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&zt(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){let r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new w("move-operation-node-into-itself",this)}}_execute(){oo(C._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){let t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){let n=M.fromJSON(t.sourcePosition,e),o=M.fromJSON(t.targetPosition,e);return new this(n,t.howMany,o,t.baseVersion)}}class Et extends Zt{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Jn(nl(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){let t=new Jn([...this.nodes].map(n=>n._clone(!0))),e=new Et(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){let t=this.position.root.document.graveyard,e=new M(t,[0]);return new Y(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){let t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new w("insert-operation-position-invalid",this)}_execute(){let t=this.nodes;this.nodes=new Jn([...t].map(e=>e._clone(!0))),ur(this.position,t)}toJSON(){let t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){let n=[];for(let r of t.nodes)r.name?n.push(Q.fromJSON(r)):n.push(tt.fromJSON(r));let o=new Et(M.fromJSON(t.position,e),n,t.baseVersion);return o.shouldReceiveAttributes=t.shouldReceiveAttributes,o}}class Ut extends Zt{constructor(t,e,n,o,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new Ut(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Ut(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){let t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new Ut(t.name,t.oldRange?C.fromJSON(t.oldRange,e):null,t.newRange?C.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}let il=function(i,t){return Ec(i,t)};class _t extends Zt{constructor(t,e,n,o,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new _t(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new _t(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){let t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new w("attribute-operation-range-not-flat",this);for(let t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!il(t.getAttribute(this.key),this.oldValue))throw new w("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new w("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){il(this.oldValue,this.newValue)||function(t,e,n){ro(t.start),ro(t.end);for(let o of t.getItems({shallow:!0})){let r=o.is("$textProxy")?o.textNode:o;n!==null?r._setAttribute(e,n):r._removeAttribute(e),io(r.parent,r.index)}io(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new _t(C.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Dt extends Zt{get type(){return"noop"}clone(){return new Dt(this.baseVersion)}getReversed(){return new Dt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class Ht extends Zt{constructor(t,e,n,o){super(o),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new Ht(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ht(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){let t=this.position.nodeAfter;if(!(t instanceof Q))throw new w("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new w("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){let t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new Ht(M.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class _e extends Zt{constructor(t,e,n,o,r){super(r),this.root=t,this.key=e,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new _e(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new _e(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new w("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new w("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new w("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){let t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new w("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new _e(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class bt extends Zt{constructor(t,e,n,o,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new M(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){let t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new C(this.sourcePosition,t)}clone(){return new bt(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new M(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new et(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){let t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new w("merge-operation-source-position-invalid",this);if(!e.parent)throw new w("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new w("merge-operation-how-many-invalid",this)}_execute(){let t=this.sourcePosition.parent;oo(C._createIn(t),this.targetPosition),oo(C._createOn(t),this.graveyardPosition)}toJSON(){let t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){let n=M.fromJSON(t.sourcePosition,e),o=M.fromJSON(t.targetPosition,e),r=M.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,o,r,t.baseVersion)}}class et extends Zt{constructor(t,e,n,o,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){let t=this.insertionPosition.path.slice();return t.push(0),new M(this.insertionPosition.root,t)}get movedRange(){let t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new C(this.splitPosition,t)}clone(){return new et(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let t=this.splitPosition.root.document.graveyard,e=new M(t,[0]);return new bt(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){let t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new w("split-operation-position-invalid",this);if(!t.parent)throw new w("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new w("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new w("split-operation-graveyard-position-invalid",this)}_execute(){let t=this.splitPosition.parent;if(this.graveyardPosition)oo(C._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{let e=t._clone();ur(this.insertionPosition,e)}oo(new C(M._createAt(t,this.splitPosition.offset),M._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){let t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){let e=t.path.slice(0,-1);return e[e.length-1]++,new M(t.root,e,"toPrevious")}static fromJSON(t,e){let n=M.fromJSON(t.splitPosition,e),o=M.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?M.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,o,r,t.baseVersion)}}let ie={};ie[_t.className]=_t,ie[Et.className]=Et,ie[Ut.className]=Ut,ie[Y.className]=Y,ie[Dt.className]=Dt,ie[Zt.className]=Zt,ie[Ht.className]=Ht,ie[_e.className]=_e,ie[et.className]=et,ie[bt.className]=bt;class Bk{static fromJSON(t,e){return ie[t.__className].fromJSON(t,e)}}let gr=new Map;function G(i,t,e){let n=gr.get(i);n||(n=new Map,gr.set(i,n)),n.set(t,e)}function Pk(i){return[i]}function rl(i,t,e={}){let n=function(o,r){let s=gr.get(o);return s&&s.has(r)?s.get(r):Pk}(i.constructor,t.constructor);try{return n(i=i.clone(),t,e)}catch(o){throw o}}function zk(i,t,e){i=i.slice(),t=t.slice();let n=new Lk(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(t);let o=n.originalOperations;if(i.length==0||t.length==0)return{operationsA:i,operationsB:t,originalOperations:o};let r=new WeakMap;for(let c of i)r.set(c,0);let s={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:t.length},a=0;for(;a<i.length;){let c=i[a],l=r.get(c);if(l==t.length){a++;continue}let d=t[l],h=rl(c,d,n.getContext(c,d,!0)),u=rl(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(h,c),n.setOriginalOperations(u,d);for(let g of h)r.set(g,l+u.length);i.splice(a,1,...h),t.splice(l,1,...u)}if(e.padWithNoOps){let c=i.length-s.originalOperationsACount,l=t.length-s.originalOperationsBCount;al(i,l-c),al(t,c-l)}return sl(i,s.nextBaseVersionB),sl(t,s.nextBaseVersionA),{operationsA:i,operationsB:t,originalOperations:o}}class Lk{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){let n=e?this.originalOperations.get(e):null;for(let o of t)this.originalOperations.set(o,n||o)}updateRelation(t,e){if(t instanceof Y)e instanceof bt?t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter"):e instanceof Y&&(t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter"));else if(t instanceof et){if(e instanceof bt)t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");else if(e instanceof Y)if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{let n=C._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){let o=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:o,offset:r})}}}else if(t instanceof bt)e instanceof bt?(t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement")):e instanceof et&&t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource");else if(t instanceof Ut){let n=t.newRange;if(!n)return;if(e instanceof Y){let o=C._createFromPositionAndShift(e.sourcePosition,e.howMany),r=o.containsPosition(n.start)||o.start.isEqual(n.start),s=o.containsPosition(n.end)||o.end.isEqual(n.end);!r&&!s||o.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(e instanceof bt){let o=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),a=n.end.isEqual(e.sourcePosition);(o||r||s||a)&&this._setRelation(t,e,{wasInLeftElement:o,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){let e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){let n=this.originalOperations.get(e),o=this._history.getUndoneOperation(n);if(!o)return null;let r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(o)||null}_setRelation(t,e,n){let o=this.originalOperations.get(t),r=this.originalOperations.get(e),s=this._relations.get(o);s||(s=new Map,this._relations.set(o,s)),s.set(r,n)}}function sl(i,t){for(let e of i)e.baseVersion=t++}function al(i,t){for(let e=0;e<t;e++)i.push(new Dt(0))}function cl(i,t,e){let n=i.nodes.getNode(0).getAttribute(t);if(n==e)return null;let o=new C(i.position,i.position.getShiftedBy(i.howMany));return new _t(o,t,n,e,0)}function ll(i,t){return i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function wn(i,t){let e=[];for(let n=0;n<i.length;n++){let o=i[n],r=new Y(o.start,o.end.offset-o.start.offset,t,0);e.push(r);for(let s=n+1;s<i.length;s++)i[s]=i[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}G(_t,_t,(i,t,e)=>{if(i.key===t.key&&i.range.start.hasSameParentAs(t.range.start)){let n=i.range.getDifference(t.range).map(r=>new _t(r,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(t.range);return o&&e.aIsStrong&&n.push(new _t(o,t.key,t.newValue,i.newValue,0)),n.length==0?[new Dt(0)]:n}return[i]}),G(_t,Et,(i,t)=>{if(i.range.start.hasSameParentAs(t.position)&&i.range.containsPosition(t.position)){let e=i.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new _t(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(t.shouldReceiveAttributes){let n=cl(t,i.key,i.oldValue);n&&e.unshift(n)}return e}return i.range=i.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[i]}),G(_t,bt,(i,t)=>{let e=[];i.range.start.hasSameParentAs(t.deletionPosition)&&(i.range.containsPosition(t.deletionPosition)||i.range.start.isEqual(t.deletionPosition))&&e.push(C._createFromPositionAndShift(t.graveyardPosition,1));let n=i.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(o=>new _t(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),G(_t,Y,(i,t)=>function(n,o){let r=C._createFromPositionAndShift(o.sourcePosition,o.howMany),s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];let c=[];for(let l of a){l=l._getTransformedByDeletion(o.sourcePosition,o.howMany);let d=o.getMovedRangeStart(),h=l.start.hasSameParentAs(d),u=l._getTransformedByInsertion(d,o.howMany,h);c.push(...u)}return s&&c.push(s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),c}(i.range,t).map(n=>new _t(n,i.key,i.oldValue,i.newValue,i.baseVersion))),G(_t,et,(i,t)=>{if(i.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(t.splitPosition)&&i.range.containsPosition(t.splitPosition)){let e=i.clone();return e.range=new C(t.moveTargetPosition.clone(),i.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),i.range.end=t.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,e]}return i.range=i.range._getTransformedBySplitOperation(t),[i]}),G(Et,_t,(i,t)=>{let e=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(i.position)){let n=cl(i,t.key,t.newValue);n&&e.push(n)}return e}),G(Et,Et,(i,t,e)=>(i.position.isEqual(t.position)&&e.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(t)),[i])),G(Et,Y,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),G(Et,et,(i,t)=>(i.position=i.position._getTransformedBySplitOperation(t),[i])),G(Et,bt,(i,t)=>(i.position=i.position._getTransformedByMergeOperation(t),[i])),G(Ut,Et,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(t)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(t)[0]),[i])),G(Ut,Ut,(i,t,e)=>{if(i.name==t.name){if(!e.aIsStrong)return[new Dt(0)];i.oldRange=t.newRange?t.newRange.clone():null}return[i]}),G(Ut,bt,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(t)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(t)),[i])),G(Ut,Y,(i,t,e)=>{if(i.oldRange&&(i.oldRange=C._createFromRanges(i.oldRange._getTransformedByMoveOperation(t))),i.newRange){if(e.abRelation){let n=C._createFromRanges(i.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(i.newRange.start))return i.newRange.end=n.end,i.newRange.start.path=e.abRelation.path,[i];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=e.abRelation.path,[i]}i.newRange=C._createFromRanges(i.newRange._getTransformedByMoveOperation(t))}return[i]}),G(Ut,et,(i,t,e)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(t)),i.newRange){if(e.abRelation){let n=i.newRange._getTransformedBySplitOperation(t);return i.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?i.newRange.start=M._createAt(t.insertionPosition):i.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(i.newRange.start=M._createAt(t.moveTargetPosition)),i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?i.newRange.end=M._createAt(t.moveTargetPosition):i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?i.newRange.end=M._createAt(t.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(t)}return[i]}),G(bt,Et,(i,t)=>(i.sourcePosition.hasSameParentAs(t.position)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(t),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t),[i])),G(bt,bt,(i,t,e)=>{if(i.sourcePosition.isEqual(t.sourcePosition)&&i.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){let n=t.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new M(t.graveyardPosition.root,n),i.howMany=0,[i]}return[new Dt(0)]}if(i.sourcePosition.isEqual(t.sourcePosition)&&!i.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){let n=i.targetPosition.root.rootName=="$graveyard",o=t.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){let r=t.targetPosition._getTransformedByMergeOperation(t),s=i.targetPosition._getTransformedByMergeOperation(t);return[new Y(r,i.howMany,s,0)]}return[new Dt(0)]}return i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(t),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),i.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),G(bt,Y,(i,t,e)=>{let n=C._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&i.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new Dt(0)]:(i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition.hasSameParentAs(t.sourcePosition)&&(i.howMany-=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(t),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(t),i.graveyardPosition.isEqual(t.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)),[i])}),G(bt,et,(i,t,e)=>{if(t.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),i.deletionPosition.isEqual(t.graveyardPosition)&&(i.howMany=t.howMany)),i.targetPosition.isEqual(t.splitPosition)){let n=t.howMany!=0,o=t.graveyardPosition&&i.deletionPosition.isEqual(t.graveyardPosition);if(n||o||e.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),[i]}if(i.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i];if(e.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=t.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}return i.sourcePosition.hasSameParentAs(t.splitPosition)&&(i.howMany=t.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}),G(Y,Et,(i,t)=>{let e=C._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(t,!1)[0];return i.sourcePosition=e.start,i.howMany=e.end.offset-e.start.offset,i.targetPosition.isEqual(t.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t)),[i]}),G(Y,Y,(i,t,e)=>{let n=C._createFromPositionAndShift(i.sourcePosition,i.howMany),o=C._createFromPositionAndShift(t.sourcePosition,t.howMany),r,s=e.aIsStrong,a=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?a=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(a=!1),r=i.targetPosition.isEqual(t.targetPosition)&&a?i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):i.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),ll(i,t)&&ll(t,i))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),wn([n],r);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),wn([n],r);let c=zt(i.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),wn([n],r);i.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?i.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;let l=[],d=n.getDifference(o);for(let u of d){u.start=u.start._getTransformedByDeletion(t.sourcePosition,t.howMany),u.end=u.end._getTransformedByDeletion(t.sourcePosition,t.howMany);let g=zt(u.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",m=u._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,g);l.push(...m)}let h=n.getIntersection(o);return h!==null&&s&&(h.start=h.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),h.end=h.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),l.length===0?l.push(h):l.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?l.unshift(h):l.push(h):l.splice(1,0,h)),l.length===0?[new Dt(i.baseVersion)]:wn(l,r)}),G(Y,et,(i,t,e)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(t));let o=C._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let s=new C(t.splitPosition,o.end);return s=s._getTransformedBySplitOperation(t),wn([new C(o.start,t.splitPosition),s],n)}i.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),i.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=i.targetPosition);let r=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){let s=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);i.howMany>1&&s&&!e.aWasUndone&&r.push(C._createFromPositionAndShift(t.insertionPosition,1))}return wn(r,n)}),G(Y,bt,(i,t,e)=>{let n=C._createFromPositionAndShift(i.sourcePosition,i.howMany);if(t.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(i.type!="remove"||e.forceWeakRemove){if(i.howMany==1)return e.bWasUndone?(i.sourcePosition=t.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]):[new Dt(0)]}else if(!e.aWasUndone){let r=[],s=t.graveyardPosition.clone(),a=t.targetPosition._getTransformedByMergeOperation(t);i.howMany>1&&(r.push(new Y(i.sourcePosition,i.howMany-1,i.targetPosition,0)),s=s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));let c=t.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),l=new Y(s,1,c,0),d=l.getMovedRangeStart().path.slice();d.push(0);let h=new M(l.targetPosition.root,d);a=a._getTransformedByMove(s,c,1);let u=new Y(a,t.howMany,h,0);return r.push(l),r.push(u),r}}let o=C._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(t);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]}),G(Ht,Et,(i,t)=>(i.position=i.position._getTransformedByInsertOperation(t),[i])),G(Ht,bt,(i,t)=>i.position.isEqual(t.deletionPosition)?(i.position=t.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(t),[i])),G(Ht,Y,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),G(Ht,Ht,(i,t,e)=>{if(i.position.isEqual(t.position)){if(!e.aIsStrong)return[new Dt(0)];i.oldName=t.newName}return[i]}),G(Ht,et,(i,t)=>{if(zt(i.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){let e=new Ht(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,e]}return i.position=i.position._getTransformedBySplitOperation(t),[i]}),G(_e,_e,(i,t,e)=>{if(i.root===t.root&&i.key===t.key){if(!e.aIsStrong||i.newValue===t.newValue)return[new Dt(0)];i.oldValue=t.newValue}return[i]}),G(et,Et,(i,t)=>(i.splitPosition.hasSameParentAs(t.position)&&i.splitPosition.offset<t.position.offset&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(t),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(t),[i])),G(et,bt,(i,t,e)=>{if(!i.graveyardPosition&&!e.bWasUndone&&i.splitPosition.hasSameParentAs(t.sourcePosition)){let n=t.graveyardPosition.path.slice();n.push(0);let o=new M(t.graveyardPosition.root,n),r=et.getInsertionPosition(new M(t.graveyardPosition.root,n)),s=new et(o,0,r,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=et.getInsertionPosition(i.splitPosition),i.graveyardPosition=s.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[s,i]}return i.splitPosition.hasSameParentAs(t.deletionPosition)&&!i.splitPosition.isAfter(t.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=et.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),G(et,Y,(i,t,e)=>{let n=C._createFromPositionAndShift(t.sourcePosition,t.howMany);if(i.graveyardPosition){let r=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!e.bWasUndone&&r){let s=i.splitPosition._getTransformedByMoveOperation(t),a=i.graveyardPosition._getTransformedByMoveOperation(t),c=a.path.slice();c.push(0);let l=new M(a.root,c);return[new Y(s,i.howMany,l,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)}let o=i.splitPosition.isEqual(t.targetPosition);if(o&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return i.howMany+=t.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),i.insertionPosition=et.getInsertionPosition(i.splitPosition),[i];if(o&&e.abRelation&&e.abRelation.howMany){let{howMany:r,offset:s}=e.abRelation;return i.howMany+=r,i.splitPosition=i.splitPosition.getShiftedBy(s),[i]}if(i.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.splitPosition)){let r=t.howMany-(i.splitPosition.offset-t.sourcePosition.offset);return i.howMany-=r,i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany),i.splitPosition=t.sourcePosition.clone(),i.insertionPosition=et.getInsertionPosition(i.splitPosition),[i]}return t.sourcePosition.isEqual(t.targetPosition)||(i.splitPosition.hasSameParentAs(t.sourcePosition)&&i.splitPosition.offset<=t.sourcePosition.offset&&(i.howMany-=t.howMany),i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(t),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(t):i.insertionPosition=et.getInsertionPosition(i.splitPosition),[i]}),G(et,et,(i,t,e)=>{if(i.splitPosition.isEqual(t.splitPosition)){if(!i.graveyardPosition&&!t.graveyardPosition)return[new Dt(0)];if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition))return[new Dt(0)];if(e.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t),[i]}if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition)){let n=i.splitPosition.root.rootName=="$graveyard",o=t.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){let r=[];return t.howMany&&r.push(new Y(t.moveTargetPosition,t.howMany,t.splitPosition,0)),i.howMany&&r.push(new Y(i.splitPosition,i.howMany,i.moveTargetPosition,0)),r}return[new Dt(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t)),i.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return i.howMany++,[i];if(t.splitPosition.isEqual(i.insertionPosition)&&e.baRelation=="splitBefore"){let n=t.insertionPosition.path.slice();n.push(0);let o=new M(t.insertionPosition.root,n);return[i,new Y(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(t.splitPosition)&&i.splitPosition.offset<t.splitPosition.offset&&(i.howMany-=t.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(t),i.insertionPosition=et.getInsertionPosition(i.splitPosition),[i]});class Mt extends $(M){constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new w("model-liveposition-root-not-rootelement",t);Ok.call(this)}detach(){this.stopListening()}toPosition(){return new M(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function Ok(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{let e=t[0];e.isDocumentOperation&&Rk.call(this,e)},{priority:"low"})}function Rk(i){let t=this.getTransformedByOperation(i);if(!this.isEqual(t)){let e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}Mt.prototype.is=function(i){return i==="livePosition"||i==="model:livePosition"||i=="position"||i==="model:position"};class An{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},at("batch-constructor-deprecated-string-type"));let{isUndoable:e=!0,isLocal:n=!0,isUndo:o=!1,isTyping:r=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=o,this.isTyping=r}get type(){return at("batch-type-deprecated"),"default"}get baseVersion(){for(let t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class jk{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(t){let e=t;switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(let n of e.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;let n=this._isInInsertedElement(e.sourcePosition.parent),o=this._isInInsertedElement(e.targetPosition.parent);n||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),o||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);let n=C._createFromPositionAndShift(e.position,1);for(let o of this._markerCollection.getMarkersIntersectingRange(n)){let r=o.getData();this.bufferMarkerChange(o.name,r,r)}break}case"split":{let n=e.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{let n=e.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);let o=e.graveyardPosition.parent;this._markInsert(o,e.graveyardPosition.offset,1);let r=e.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,e.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){let o=this._changedMarkers.get(t);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{newMarkerData:n,oldMarkerData:e})}getMarkersToRemove(){let t=[];for(let[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){let t=[];for(let[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(let{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){let n=t.range&&!e.range,o=!t.range&&e.range,r=t.range&&e.range&&!t.range.isEqual(e.range);if(n||o||r)return!0}}return!1}getChanges(t={}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(let n of this._changesInElement.keys()){let o=this._changesInElement.get(n).sort((d,h)=>d.offset===h.offset?d.type!=h.type?d.type=="remove"?-1:1:0:d.offset<h.offset?-1:1),r=this._elementSnapshots.get(n),s=dl(n.getChildren()),a=Fk(r.length,o),c=0,l=0;for(let d of a)if(d==="i")e.push(this._getInsertDiff(n,c,s[c])),c++;else if(d==="r")e.push(this._getRemoveDiff(n,c,r[l])),l++;else if(d==="a"){let h=s[c].attributes,u=r[l].attributes,g;if(s[c].name=="$text")g=new C(M._createAt(n,c),M._createAt(n,c+1));else{let m=n.offsetToIndex(c);g=new C(M._createAt(n,c),M._createAt(n.getChild(m),0))}e.push(...this._getAttributesDiff(g,u,h)),c++,l++}else c++,l++}e.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<e.length;n++){let r=e[o],s=e[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):o=n}e=e.filter(n=>n);for(let n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(Vk),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);let e=C._createOn(t);for(let n of this._markerCollection.getMarkersIntersectingRange(e)){let o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(t,e,n){let o={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,n){let o={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){let e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);let n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,dl(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(let n of e){let o=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){let s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:o,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=t.howMany;else if(o<=r)if(t.offset<n.offset){let s=o-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){let s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(o<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){let s=o-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(o<=r){let s=n.howMany;n.howMany=t.offset-n.offset;let a=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&o>n.offset){if(o>r){let s={type:"attribute",offset:r,howMany:o-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(o>r?(t.nodesToHandle=o-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&o>n.offset){let s={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&o<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&o>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:M._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:M._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){let o=[];n=new Map(n);for(let[r,s]of e){let a=n.has(r)?n.get(r):null;a!==s&&o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(let[r,s]of n)o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return o}_isInInsertedElement(t){let e=t.parent;if(!e)return!1;let n=this._changesInElement.get(e),o=t.startOffset;if(n){for(let r of n)if(r.type=="insert"&&o>=r.offset&&o<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){let o=new C(M._createAt(t,e),M._createAt(t,e+n));for(let r of o.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function dl(i){let t=[];for(let e of i)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function Fk(i,t){let e=[],n=0,o=0;for(let r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");o+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,o+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,o+=r.howMany}if(o<i)for(let r=0;r<i-o-n;r++)e.push("e");return e}function Vk(i){let t="position"in i&&i.position.root.rootName=="$graveyard",e="range"in i&&i.range.root.rootName=="$graveyard";return!t&&!e}class Uk{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new w("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];let n=this._operations[0];t===void 0&&(t=n.baseVersion);let o=e-1;for(let[a,c]of this._gaps)t>a&&t<c&&(t=c),o>a&&o<c&&(o=a-1);if(o<n.baseVersion||t>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(t);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(o);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(t){let e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Ho extends Q{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}Ho.prototype.is=function(i,t){return t?t===this.name&&(i==="rootElement"||i==="model:rootElement"||i==="element"||i==="model:element"):i==="rootElement"||i==="model:rootElement"||i==="element"||i==="model:element"||i==="node"||i==="model:node"};let mr="$graveyard";class Hk extends $(){constructor(t){super(),this.model=t,this.history=new Uk,this.selection=new Qt(this),this.roots=new ee({idProperty:"rootName"}),this.differ=new jk(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",mr),this.listenTo(t,"applyOperation",(e,n)=>{let o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{let o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,o,r,s)=>{let a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),o===null&&n.on("change",(c,l)=>{let d=n.getData();this.differ.bufferMarkerChange(n.name,{...d,range:l},d)})})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(mr)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new w("model-document-createroot-name-exists",this,{name:e});let n=new Ho(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=mr)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){let t=Va(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(let t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){let t=this._getDefaultRoot(),e=this.model,n=e.schema,o=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(o)||e.createRange(o)}_validateSelectionRange(t){return hl(t.start)&&hl(t.end)}_callPostFixers(t){let e=!1;do for(let n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function hl(i){let t=i.textNode;if(t){let e=t.data,n=i.offset-t.startOffset;return!Na(e,n)&&!Ba(e,n)}return!0}class Wk extends $(){constructor(){super(),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){let e=t instanceof _n?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,o=!1){let r=t instanceof _n?t.name:t;if(r.includes(","))throw new w("markercollection-incorrect-marker-name",this);let s=this._markers.get(r);if(s){let l=s.getData(),d=s.getRange(),h=!1;return d.isEqual(e)||(s._attachLiveRange(oe.fromRange(e)),h=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,h=!0),typeof o=="boolean"&&o!=s.affectsData&&(s._affectsData=o,h=!0),h&&this.fire(`update:${r}`,s,d,e,l),s}let a=oe.fromRange(e),c=new _n(r,a,n,o);return this._markers.set(r,c),this.fire(`update:${r}`,c,null,e,{...c.getData(),range:null}),c}_remove(t){let e=t instanceof _n?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire(`update:${e}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){let e=t instanceof _n?t.name:t,n=this._markers.get(e);if(!n)throw new w("markercollection-refresh-marker-not-exists",this);let o=n.getRange();this.fire(`update:${e}`,n,o,o,n.getData())}*getMarkersAtPosition(t){for(let e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(let e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(let t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(let e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}class _n extends $(Te){constructor(t,e,n,o){super(),this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new w("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new w("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new w("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new w("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new w("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}_n.prototype.is=function(i){return i==="marker"||i==="model:marker"};class qk extends Zt{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){let t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new w("detach-operation-on-document-node",this)}_execute(){el(C._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Ce extends Te{constructor(t){super(),this.markers=new Map,this._children=new Jn,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(let n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){let t=[];for(let e of this._children)t.push(e.toJSON());return t}static fromJSON(t){let e=[];for(let n of t)n.name?e.push(Q.fromJSON(n)):e.push(tt.fromJSON(n));return new Ce(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){let n=function(o){return typeof o=="string"?[new tt(o)]:(Wt(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new tt(r):r instanceof ne?new tt(r.data,r.getAttributes()):r))}(e);for(let o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){let n=this._children._removeNodes(t,e);for(let o of n)o.parent=null;return n}}Ce.prototype.is=function(i){return i==="documentFragment"||i==="model:documentFragment"};class Gk{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new tt(t,e)}createElement(t,e){return new Q(t,e)}createDocumentFragment(){return new Ce}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof tt&&t.data=="")return;let o=M._createAt(e,n);if(t.parent){if(ml(t.root,o.root))return void this.move(C._createOn(t),o);if(t.root.document)throw new w("model-writer-insert-forbidden-move",this);this.remove(t)}let r=o.root.document?o.root.document.version:null,s=new Et(o,t,r);if(t instanceof tt&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof Ce)for(let[a,c]of t.markers){let l=M._createAt(c.root,0),d={range:new C(c.start._getCombined(l,o),c.end._getCombined(l,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(t,e,n,o){e instanceof Ce||e instanceof Q||e instanceof M?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,o)}insertElement(t,e,n,o){e instanceof Ce||e instanceof Q||e instanceof M?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Ce||e instanceof Q?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Ce||e instanceof Q?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof C){let o=n.getMinimalFlatRanges();for(let r of o)ul(this,t,e,r)}else gl(this,t,e,n)}setAttributes(t,e){for(let[n,o]of he(t))this.setAttribute(n,o,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof C){let n=e.getMinimalFlatRanges();for(let o of n)ul(this,t,null,o)}else gl(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();let e=n=>{for(let o of n.getAttributeKeys())this.removeAttribute(o,n)};if(t instanceof C)for(let n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof C))throw new w("writer-move-invalid-range",this);if(!t.isFlat)throw new w("writer-move-range-not-flat",this);let o=M._createAt(e,n);if(o.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!ml(t.root,o.root))throw new w("writer-move-different-document",this);let r=t.root.document?t.root.document.version:null,s=new Y(t.start,t.end.offset-t.start.offset,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();let e=(t instanceof C?t:C._createOn(t)).getMinimalFlatRanges().reverse();for(let n of e)this._addOperationForAffectedMarkers("move",n),$k(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();let e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof Q))throw new w("writer-merge-no-element-before",this);if(!(n instanceof Q))throw new w("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(...t){return this.model.createSelection(...t)}_mergeDetached(t){let e=t.nodeBefore,n=t.nodeAfter;this.move(C._createIn(n),M._createAt(e,"end")),this.remove(n)}_merge(t){let e=M._createAt(t.nodeBefore,"end"),n=M._createAt(t.nodeAfter,0),o=t.root.document.graveyard,r=new M(o,[0]),s=t.root.document.version,a=new bt(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Q))throw new w("writer-rename-not-element-instance",this);let n=t.root.document?t.root.document.version:null,o=new Ht(M._createBefore(t),t.name,e,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(t,e){this._assertWriterUsedCorrectly();let n,o,r=t.parent;if(!r.parent)throw new w("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new w("writer-split-invalid-limit-element",this);do{let s=r.root.document?r.root.document.version:null,a=r.maxOffset-t.offset,c=et.getInsertionPosition(t),l=new et(t,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),n||o||(n=r,o=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new C(M._createAt(n,"end"),M._createAt(o,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new w("writer-wrap-range-not-flat",this);let n=e instanceof Q?e:new Q(e);if(n.childCount>0)throw new w("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new w("writer-wrap-element-attached",this);this.insert(n,t.start);let o=new C(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(o,M._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new w("writer-unwrap-element-no-parent",this);this.move(C._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new w("writer-addmarker-no-usingoperation",this);let n=e.usingOperation,o=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new w("writer-addmarker-marker-exists",this);if(!o)throw new w("writer-addmarker-no-range",this);return n?(so(this,t,null,o,r),this.model.markers.get(t)):this.model.markers._set(t,o,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();let n=typeof t=="string"?t:t.name,o=this.model.markers.get(n);if(!o)throw new w("writer-updatemarker-marker-not-exists",this);if(!e)return at("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);let r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",a=s?e.affectsData:o.affectsData;if(!r&&!e.range&&!s)throw new w("writer-updatemarker-wrong-options",this);let c=o.getRange(),l=e.range?e.range:c;r&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?so(this,n,null,l,a):(so(this,n,c,null,a),this.model.markers._set(n,l,void 0,a)):o.managedUsingOperations?so(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(t){this._assertWriterUsedCorrectly();let e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new w("writer-removemarker-no-marker",this);let n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);so(this,e,n.getRange(),null,n.affectsData)}setSelection(...t){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...t)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(let[n,o]of he(t))this._setSelectionAttribute(n,o)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(let e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){let n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){let o=Qt._getStoreAttributeKey(t);this.setAttribute(o,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){let e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){let n=Qt._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new w("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(let n of this.model.markers){if(!n.managedUsingOperations)continue;let o=n.getRange(),r=!1;if(t==="move"){let s=e;r=s.containsPosition(o.start)||s.start.isEqual(o.start)||s.containsPosition(o.end)||s.end.isEqual(o.end)}else{let s=e,a=s.nodeBefore,c=s.nodeAfter,l=o.start.parent==a&&o.start.isAtEnd,d=o.end.parent==c&&o.end.offset==0,h=o.end.nodeAfter==c,u=o.start.nodeAfter==c;r=l||d||h||u}r&&this.updateMarker(n.name,{range:o})}}}function ul(i,t,e,n){let o=i.model,r=o.document,s,a,c,l=n.start;for(let h of n.getWalker({shallow:!0}))c=h.item.getAttribute(t),s&&a!=c&&(a!=e&&d(),l=s),s=h.nextPosition,a=c;function d(){let h=new C(l,s),u=h.root.document?r.version:null,g=new _t(h,t,a,e,u);i.batch.addOperation(g),o.applyOperation(g)}s instanceof M&&s!=l&&a!=e&&d()}function gl(i,t,e,n){let o=i.model,r=o.document,s=n.getAttribute(t),a,c;if(s!=e){if(n.root===n){let l=n.document?r.version:null;c=new _e(n,t,s,e,l)}else{a=new C(M._createBefore(n),i.createPositionAfter(n));let l=a.root.document?r.version:null;c=new _t(a,t,s,e,l)}i.batch.addOperation(c),o.applyOperation(c)}}function so(i,t,e,n,o){let r=i.model,s=r.document,a=new Ut(t,e,n,r.markers,!!o,s.version);i.batch.addOperation(a),r.applyOperation(a)}function $k(i,t,e,n){let o;if(i.root.document){let r=n.document,s=new M(r.graveyard,[0]);o=new Y(i,t,s,r.version)}else o=new qk(i,t);e.addOperation(o),n.applyOperation(o)}function ml(i,t){return i===t||i instanceof Ho&&t instanceof Ho}function Yk(i){i.document.registerPostFixer(t=>function(e,n){let o=n.document.selection,r=n.schema,s=[],a=!1;for(let c of o.getRanges()){let l=Kk(c,r);l&&!l.isEqual(c)?(s.push(l),a=!0):s.push(c)}return a&&e.setSelection(function(c){let l=[...c],d=new Set,h=1;for(;h<l.length;){let u=l[h],g=l.slice(0,h);for(let[m,p]of g.entries())if(!d.has(m)){if(u.isEqual(p))d.add(m);else if(u.isIntersecting(p)){d.add(m),d.add(h);let k=u.getJoined(p);l.push(k)}}h++}return l.filter((u,g)=>!d.has(g))}(s),{backward:o.isBackward}),!1}(t,i))}function Kk(i,t){return i.isCollapsed?function(e,n){let o=e.start,r=n.getNearestSelectionRange(o);if(!r){let a=o.getAncestors().reverse().find(c=>n.isObject(c));return a?C._createOn(a):null}if(!r.isCollapsed)return r;let s=r.start;return o.isEqual(s)?null:new C(s)}(i,t):function(e,n){let{start:o,end:r}=e,s=n.checkChild(o,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(o),l=n.getLimitElement(r);if(c===l){if(s&&a)return null;if(function(u,g,m){let p=u.nodeAfter&&!m.isLimit(u.nodeAfter)||m.checkChild(u,"$text"),k=g.nodeBefore&&!m.isLimit(g.nodeBefore)||m.checkChild(g,"$text");return p||k}(o,r,n)){let u=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),g=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),m=u?u.start:o,p=g?g.end:r;return new C(m,p)}}let d=c&&!c.is("rootElement"),h=l&&!l.is("rootElement");if(d||h){let u=o.nodeAfter&&r.nodeBefore&&o.nodeAfter.parent===r.nodeBefore.parent,g=d&&(!u||!fl(o.nodeAfter,n)),m=h&&(!u||!fl(r.nodeBefore,n)),p=o,k=r;return g&&(p=M._createBefore(pl(c,n))),m&&(k=M._createAfter(pl(l,n))),new C(p,k)}return null}(i,t)}function pl(i,t){let e=i,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function fl(i,t){return i&&t.isSelectable(i)}function Qk(i,t,e={}){if(t.isCollapsed)return;let n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;let o=i.schema;i.change(r=>{if(!e.doNotResetEntireContent&&function(l,d){let h=l.getLimitElement(d);if(!d.containsEntireContent(h))return!1;let u=d.getFirstRange();return u.start.parent==u.end.parent?!1:l.checkChild(h,"paragraph")}(o,t))return void function(l,d){let h=l.model.schema.getLimitElement(d);l.remove(l.createRangeIn(h)),wl(l,l.createPositionAt(h,0),d)}(r,t);let s={};if(!e.doNotAutoparagraph){let l=t.getSelectedElement();l&&Object.assign(s,o.getAttributesWithProperty(l,"copyOnReplace",!0))}let[a,c]=function(l){let d=l.root.document.model,h=l.start,u=l.end;if(d.hasContent(l,{ignoreMarkers:!0})){let g=function(m){let p=m.parent,k=p.root.document.model.schema,b=p.getAncestors({parentFirst:!0,includeSelf:!0});for(let A of b){if(k.isLimit(A))return null;if(k.isBlock(A))return A}}(u);if(g&&u.isTouching(d.createPositionAt(g,0))){let m=d.createSelection(l);d.modifySelection(m,{direction:"backward"});let p=m.getLastPosition(),k=d.createRange(p,u);d.hasContent(k,{ignoreMarkers:!0})||(u=p)}}return[Mt.fromPosition(h,"toPrevious"),Mt.fromPosition(u,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),e.leaveUnmerged||(function(l,d,h){let u=l.model;if(!pr(l.model.schema,d,h))return;let[g,m]=function(p,k){let b=p.getAncestors(),A=k.getAncestors(),y=0;for(;b[y]&&b[y]==A[y];)y++;return[b[y],A[y]]}(d,h);!g||!m||(!u.hasContent(g,{ignoreMarkers:!0})&&u.hasContent(m,{ignoreMarkers:!0})?bl(l,d,h,g.parent):kl(l,d,h,g.parent))}(r,a,c),o.removeDisallowedAttributes(a.parent.getChildren(),r)),Al(r,t,a),!e.doNotAutoparagraph&&function(l,d){let h=l.checkChild(d,"$text"),u=l.checkChild(d,"paragraph");return!h&&u}(o,a)&&wl(r,a,t,s),a.detach(),c.detach()})}function kl(i,t,e,n){let o=t.parent,r=e.parent;if(o!=n&&r!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(r)).isEqual(t)||i.insert(r,t),i.merge(t);e.parent.isEmpty;){let s=e.parent;e=i.createPositionBefore(s),i.remove(s)}pr(i.model.schema,t,e)&&kl(i,t,e,n)}}function bl(i,t,e,n){let o=t.parent,r=e.parent;if(o!=n&&r!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(r)).isEqual(t)||i.insert(o,e);t.parent.isEmpty;){let s=t.parent;t=i.createPositionBefore(s),i.remove(s)}e=i.createPositionBefore(r),function(s,a){let c=a.nodeBefore,l=a.nodeAfter;c.name!=l.name&&s.rename(c,l.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(l.getAttributes()),c),s.merge(a)}(i,e),pr(i.model.schema,t,e)&&bl(i,t,e,n)}}function pr(i,t,e){let n=t.parent,o=e.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(r,s,a){let c=new C(r,s);for(let l of c.getWalker())if(a.isLimit(l.item))return!1;return!0}(t,e,i)}function wl(i,t,e,n={}){let o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,t),Al(i,e,i.createPositionAt(o,0))}function Al(i,t,e){t instanceof Qt?i.setSelection(e):t.setTo(e)}function _l(i,t){let e=[];Array.from(i.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){let r=t.createRangeOn(o);o=o.parent,t.remove(r)}})}class Zk{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t){for(let e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){let e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new w("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?C._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new C(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;let t=Mt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new w("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=t:this._nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Mt.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Mt.fromPosition(t,"toNext"))}_mergeOnLeft(){let t=this._firstNode;if(!(t instanceof Q)||!this._canMergeLeft(t))return;let e=Mt._createBefore(t);e.stickiness="toNext";let n=Mt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=Mt._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Mt._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){let t=this._lastNode;if(!(t instanceof Q)||!this._canMergeRight(t))return;let e=Mt._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new w("insertcontent-invalid-insertion-position",this);this.position=M._createAt(e.nodeBefore,"end");let n=Mt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=Mt._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Mt._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){let e=t.previousSibling;return e instanceof Q&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){let e=t.nextSibling;return e instanceof Q&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){let e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();let e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){let e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){let n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{let n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function Cl(i,t,e="auto"){let n=i.getSelectedElement();if(n&&t.schema.isObject(n)&&!t.schema.isInline(n))return e=="before"||e=="after"?t.createRange(t.createPositionAt(n,e)):t.createRangeOn(n);let o=vt(i.getSelectedBlocks());if(!o)return t.createRange(i.focus);if(o.isEmpty)return t.createRange(t.createPositionAt(o,0));let r=t.createPositionAfter(o);return i.focus.isTouching(r)?t.createRange(r):t.createRange(t.createPositionBefore(o))}function Jk(i,t,e,n,o={}){if(!i.schema.isObject(t))throw new w("insertobject-element-not-an-object",i,{object:t});let r;r=e?e instanceof ke||e instanceof Qt?e:i.createSelection(e,n):i.document.selection;let s=r;o.findOptimalPosition&&i.schema.isBlock(t)&&(s=i.createSelection(Cl(r,i,o.findOptimalPosition)));let a=vt(r.getSelectedBlocks()),c={};return a&&Object.assign(c,i.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),i.change(l=>{s.isCollapsed||i.deleteContent(s,{doNotAutoparagraph:!0});let d=t,h=s.anchor.parent;!i.schema.checkChild(h,t)&&i.schema.checkChild(h,"paragraph")&&i.schema.checkChild("paragraph",t)&&(d=l.createElement("paragraph"),l.insert(t,d)),i.schema.setAllowedAttributes(d,c,l);let u=i.insertContent(d,s);return u.isCollapsed||o.setSelection&&function(g,m,p,k){let b=g.model;if(p=="on")return void g.setSelection(m,"on");if(p!="after")throw new w("insertobject-invalid-place-parameter-value",b);let A=m.nextSibling;if(b.schema.isInline(m))return void g.setSelection(m,"after");!(A&&b.schema.checkChild(A,"$text"))&&b.schema.checkChild(m.parent,"paragraph")&&(A=g.createElement("paragraph"),b.schema.setAllowedAttributes(A,k,g),b.insertContent(A,g.createPositionAfter(m))),A&&g.setSelection(A,0)}(l,t,o.setSelection,c),u})}function Xk(i,t){let{isForward:e,walker:n,unit:o,schema:r,treatEmojiAsSingleUnit:s}=i,{type:a,item:c,nextPosition:l}=t;if(a=="text")return i.unit==="word"?function(d,h){let u=d.position.textNode;for(u||(u=h?d.position.nodeAfter:d.position.nodeBefore);u&&u.is("$text");){let g=d.position.offset-u.startOffset;if(nb(u,g,h))u=h?d.position.nodeAfter:d.position.nodeBefore;else{if(eb(u.data,g,h))break;d.next()}}return d.position}(n,e):function(d,h,u){let g=d.position.textNode;if(g){let m=g.data,p=d.position.offset-g.startOffset;for(;Na(m,p)||h=="character"&&Ba(m,p)||u&&Ip(m,p);)d.next(),p=d.position.offset-g.startOffset}return d.position}(n,o,s);if(a==(e?"elementStart":"elementEnd")){if(r.isSelectable(c))return M._createAt(c,e?"after":"before");if(r.checkChild(l,"$text"))return l}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(l,"$text"))return l}}function tb(i,t){let e=i.root,n=M._createAt(e,t?"end":0);return t?new C(i,n):new C(n,i)}function eb(i,t,e){let n=t+(e?0:-1);return' ,.?!:;"-()'.includes(i.charAt(n))}function nb(i,t,e){return t===(e?i.offsetSize:0)}class ob extends J(){constructor(){super(),this.markers=new Wk,this.document=new Hk(this),this.schema=new fk,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),Yk(this),this.document.registerPostFixer(Gc)}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new An,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){w.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new An):t instanceof An||(t=new An(t)):t=new An,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){w.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(o,r,s,a){return o.change(c=>{let l;l=s?s instanceof ke||s instanceof Qt?s:c.createSelection(s,a):o.document.selection,l.isCollapsed||o.deleteContent(l,{doNotAutoparagraph:!0});let d=new Zk(o,c,l.anchor),h=[],u;if(r.is("documentFragment")){if(r.markers.size){let p=[];for(let[k,b]of r.markers){let{start:A,end:y}=b,N=A.isEqual(y);p.push({position:A,name:k,isCollapsed:N},{position:y,name:k,isCollapsed:N})}p.sort(({position:k},{position:b})=>k.isBefore(b)?1:-1);for(let{position:k,name:b,isCollapsed:A}of p){let y=null,N=null,z=k.parent===r&&k.isAtStart,q=k.parent===r&&k.isAtEnd;z||q?A&&(N=z?"start":"end"):(y=c.createElement("$marker"),c.insert(y,k)),h.push({name:b,element:y,collapsed:N})}}u=r.getChildren()}else u=[r];d.handleNodes(u);let g=d.getSelectionRange();if(r.is("documentFragment")&&h.length){let p=g?oe.fromRange(g):null,k={};for(let b=h.length-1;b>=0;b--){let{name:A,element:y,collapsed:N}=h[b],z=!k[A];if(z&&(k[A]=[]),y){let q=c.createPositionAt(y,"before");k[A].push(q),c.remove(y)}else{let q=d.getAffectedRange();if(!q){N&&k[A].push(d.position);continue}N?k[A].push(q[N]):k[A].push(z?q.start:q.end)}}for(let[b,[A,y]]of Object.entries(k))A&&y&&A.root===y.root&&c.addMarker(b,{usingOperation:!0,affectsData:!0,range:new C(A,y)});p&&(g=p.toRange(),p.detach())}g&&(l instanceof Qt?c.setSelection(g):l.setTo(g));let m=d.getAffectedRange()||o.createRange(l.anchor);return d.destroy(),m})}(this,t,e,n)}insertObject(t,e,n,o){return Jk(this,t,e,n,o)}deleteContent(t,e){Qk(this,t,e)}modifySelection(t,e){(function(n,o,r={}){let s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",l=!!r.treatEmojiAsSingleUnit,d=o.focus,h=new fe({boundaries:tb(d,a),singleCharacters:!0,direction:a?"forward":"backward"}),u={walker:h,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:l},g;for(;g=h.next();){if(g.done)return;let m=Xk(u,g.value);if(m)return void(o instanceof Qt?n.change(p=>{p.setSelectionFocus(m)}):o.setFocus(m))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(o=>{let r=o.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;let a=s.start.root,c=s.start.getCommonPath(s.end),l=a.getNodeByPath(c),d;d=s.start.parent==s.end.parent?s:o.createRange(o.createPositionAt(l,s.start.path[c.length]),o.createPositionAt(l,s.end.path[c.length]+1));let h=d.end.offset-d.start.offset;for(let u of d.getItems({shallow:!0}))u.is("$textProxy")?o.appendText(u.data,u.getAttributes(),r):o.append(o.cloneElement(u,!0),r);if(d!=s){let u=s._getTransformedByMove(d.start,o.createPositionAt(r,0),h)[0],g=o.createRange(o.createPositionAt(r,0),u.start);_l(o.createRange(u.end,o.createPositionAt(r,"end")),o),_l(g,o)}return r})}(this,t)}hasContent(t,e={}){let n=t instanceof C?t:C._createIn(t);if(n.isCollapsed)return!1;let{ignoreWhitespaces:o=!1,ignoreMarkers:r=!1}=e;if(!r){for(let s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(let s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!o||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(t,e,n){return new M(t,e,n)}createPositionAt(t,e){return M._createAt(t,e)}createPositionAfter(t){return M._createAfter(t)}createPositionBefore(t){return M._createBefore(t)}createRange(t,e){return new C(t,e)}createRangeIn(t){return C._createIn(t)}createRangeOn(t){return C._createOn(t)}createSelection(...t){return new ke(...t)}createBatch(t){return new An(t)}createOperationFromJSON(t){return Bk.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){let t=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){let e=this._pendingChanges[0].batch;this._currentWriter=new Gk(this,e);let n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return t}}class ib extends Ie{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class fr extends Ie{constructor(t){super(t),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class Cn{constructor(t){this.document=t}createDocumentFragment(t){return new $e(this.document,t)}createElement(t,e,n){return new qt(this.document,t,e,n)}createText(t){return new X(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){let e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){let n=t.parent;if(n){let o=n.getChildIndex(t);return this.removeChildren(o,1,n),this.insertChild(o,e,n),!0}return!1}unwrapElement(t){let e=t.parent;if(e){let n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){let n=new qt(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Vt(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return B._createAt(t,e)}createPositionAfter(t){return B._createAfter(t)}createPositionBefore(t){return B._createBefore(t)}createRange(t,e){return new O(t,e)}createRangeOn(t){return O._createOn(t)}createRangeIn(t){return O._createIn(t)}createSelection(...t){return new me(...t)}}class rb{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){let n=this.get(t);if(!n)throw new w("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(let t of this.commands())t.destroy()}}class sb extends de{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){let o=e;e=(r,s)=>{this.editor.execute(o),s()}}super.set(t,e,n)}}class ab extends J(){constructor(t={}){super();let e=this.constructor,n=t.language||e.defaultConfig&&e.defaultConfig.language;this._context=t.context||new Tp({language:n}),this._context._addEditor(this,!t.context);let o=Array.from(e.builtinPlugins||[]);this.config=new ua(t,e.defaultConfig),this.config.define("plugins",o),this.config.define(this._context._getEditorConfig()),this.plugins=new Oa(this,o,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new rb,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new ob;let r=new hf;this.data=new Sk(this.model,r),this.editing=new mk(this.model,r),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Nk([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new sb(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new w("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new w("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new w("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){let t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],o=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(o),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(t,...e){try{return this.commands.execute(t,...e)}catch(n){w.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}class cb{constructor(t){this.editor=t,this._components=new Map}*names(){for(let t of this._components.values())yield t.originalName}add(t,e){this._components.set(kr(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new w("componentfactory-item-missing",this,{name:t});return this._components.get(kr(t)).callback(this.editor.locale)}has(t){return this._components.has(kr(t))}}function kr(i){return String(i).toLowerCase()}class Je extends ee{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(let e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new w("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(let n of this)for(let o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(let r of t)o.delegate(r).to(e)}),this.on("remove",(n,o)=>{for(let r of t)o.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}class re extends $(){constructor(t){super(),Object.assign(this,El(xl(t))),this._isRendered=!1,this._revertData=null}render(){let t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new w("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(let n of e.children)qo(n)?yield n:br(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new lb({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,r)=>new vl({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:r})}}static extend(t,e){if(t._isRendered)throw new w("template-extend-render",[this,t]);Ml(t,El(xl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new w("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Wo(this.text)?this._bindToObservable({schema:this.text,updater:db(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;let e=t.node,n=t.revertData;for(let o in this.attributes){let r=e.getAttribute(o),s=this.attributes[o];n&&(n.attributes[o]=r);let a=Sl(s)?s[0].ns:null;if(Wo(s)){let c=Sl(s)?s[0].value:s;n&&Nl(o)&&c.unshift(r),this._bindToObservable({schema:c,updater:hb(e,o,a),data:t})}else if(o=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],t);else{n&&r&&Nl(o)&&s.unshift(r);let c=s.map(l=>l&&l.value||l).reduce((l,d)=>l.concat(d),[]).reduce(Il,"");vn(c)||e.setAttributeNS(a,o,c)}}}_renderStyleAttribute(t,e){let n=e.node;for(let o in t){let r=t[o];Wo(r)?this._bindToObservable({schema:[r],updater:ub(n,o),data:e}):n.style[o]=r}}_renderElementChildren(t){let e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying,r=0;for(let s of this.children)if(wr(s)){if(!o){s.setParent(e);for(let a of s)n.appendChild(a.element)}}else if(qo(s))o||(s.isRendered||s.render(),n.appendChild(s.element));else if(De(s))n.appendChild(s);else if(o){let a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(let e in this.eventListeners){let n=this.eventListeners[e].map(o=>{let[r,s]=e.split("@");return o.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){let o=n.revertData;yl(t,e,n);let r=t.filter(s=>!vn(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));o&&o.bindings.push(r)}_revertTemplateFromNode(t,e){for(let o of e.bindings)for(let r of o)r();if(e.text)return void(t.textContent=e.text);let n=t;for(let o in e.attributes){let r=e.attributes[o];r===null?n.removeAttribute(o):n.setAttribute(o,r)}for(let o=0;o<e.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],e.children[o])}}class ao{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){let e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){let o=()=>yl(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class lb extends ao{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){let o=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class vl extends ao{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!vn(super.getValue(t))&&(this.valueIfTrue||!0)}}function Wo(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Wo):i instanceof ao)}function yl(i,t,{node:e}){let n=function(r,s){return r.map(a=>a instanceof ao?a.getValue(s):a)}(i,e),o;o=i.length==1&&i[0]instanceof vl?n[0]:n.reduce(Il,""),vn(o)?t.remove():t.set(o)}function db(i){return{set(t){i.textContent=t},remove(){i.textContent=""}}}function hb(i,t,e){return{set(n){i.setAttributeNS(e,t,n)},remove(){i.removeAttributeNS(e,t)}}}function ub(i,t){return{set(e){i.style[t]=e},remove(){i.style[t]=null}}}function xl(i){return ha(i,t=>{if(t&&(t instanceof ao||br(t)||qo(t)||wr(t)))return t})}function El(i){if(typeof i=="string"?i=function(t){return{text:[t]}}(i):i.text&&function(t){t.text=xt(t.text)}(i),i.on&&(i.eventListeners=function(t){for(let e in t)Dl(t,e);return t}(i.on),delete i.on),!i.text){i.attributes&&function(e){for(let n in e)e[n].value&&(e[n].value=xt(e[n].value)),Dl(e,n)}(i.attributes);let t=[];if(i.children)if(wr(i.children))t.push(i.children);else for(let e of i.children)br(e)||qo(e)||De(e)?t.push(e):t.push(new re(e));i.children=t}return i}function Dl(i,t){i[t]=xt(i[t])}function Il(i,t){return vn(t)?i:vn(i)?t:`${i} ${t}`}function Tl(i,t){for(let e in t)i[e]?i[e].push(...t[e]):i[e]=t[e]}function Ml(i,t){if(t.attributes&&(i.attributes||(i.attributes={}),Tl(i.attributes,t.attributes)),t.eventListeners&&(i.eventListeners||(i.eventListeners={}),Tl(i.eventListeners,t.eventListeners)),t.text&&i.text.push(...t.text),t.children&&t.children.length){if(i.children.length!=t.children.length)throw new w("ui-template-extend-children-mismatch",i);let e=0;for(let n of t.children)Ml(i.children[e++],n)}}function vn(i){return!i&&i!==0}function qo(i){return i instanceof H}function br(i){return i instanceof re}function wr(i){return i instanceof Je}function Sl(i){return gt(i[0])&&i[0].ns}function Nl(i){return i=="class"||i=="style"}var Bl=P(4793),gb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Bl.Z,gb),Bl.Z.locals;class H extends Fe(J()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new ee,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=re.bind(this,this)}createCollection(t){let e=new Je(t);return this._viewCollections.add(e),e}registerChild(t){Wt(t)||(t=[t]);for(let e of t)this._unboundChildren.add(e)}deregisterChild(t){Wt(t)||(t=[t]);for(let e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new re(t)}extendTemplate(t){re.extend(this.template,t)}render(){if(this.isRendered)throw new w("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}var Pl=P(8793),mb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Pl.Z,mb),Pl.Z.locals;let zl=gn("px"),Ll=V.document.body;class Ot extends H{constructor(t){super(t);let e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",n=>`ck-balloon-panel_${n}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",zl),left:e.to("left",zl)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();let e=Ot.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast,e.viewportStickyNorth],limiter:Ll,fitInViewport:!0},t),o=Ot._getOptimalPosition(n),r=parseInt(o.left),s=parseInt(o.top),a=o.name,c=o.config||{},{withArrow:l=!0}=c;this.top=s,this.left=r,this.position=a,this.withArrow=l}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);let e=Ar(t.target),n=t.limiter?Ar(t.limiter):Ll;this.listenTo(V.document,"scroll",(o,r)=>{let s=r.target,a=e&&s.contains(e),c=n&&s.contains(n);!a&&!c&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(V.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(V.document,"scroll"),this.stopListening(V.window,"resize")}}function Ar(i){return Gn(i)?i:yo(i)?i.commonAncestorContainer:typeof i=="function"?Ar(i()):null}function Ol(i={}){let{sideOffset:t=Ot.arrowSideOffset,heightOffset:e=Ot.arrowHeightOffset,stickyVerticalOffset:n=Ot.stickyVerticalOffset,config:o}=i;return{northWestArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left-t,name:"arrow_sw",...o&&{config:o}}),northWestArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left-.25*c.width-t,name:"arrow_smw",...o&&{config:o}}),northWestArrowSouth:(a,c)=>({top:r(a,c),left:a.left-c.width/2,name:"arrow_s",...o&&{config:o}}),northWestArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left-.75*c.width+t,name:"arrow_sme",...o&&{config:o}}),northWestArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left-c.width+t,name:"arrow_se",...o&&{config:o}}),northArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-t,name:"arrow_sw",...o&&{config:o}}),northArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-.25*c.width-t,name:"arrow_smw",...o&&{config:o}}),northArrowSouth:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s",...o&&{config:o}}),northArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-.75*c.width+t,name:"arrow_sme",...o&&{config:o}}),northArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width+t,name:"arrow_se",...o&&{config:o}}),northEastArrowSouthWest:(a,c)=>({top:r(a,c),left:a.right-t,name:"arrow_sw",...o&&{config:o}}),northEastArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.right-.25*c.width-t,name:"arrow_smw",...o&&{config:o}}),northEastArrowSouth:(a,c)=>({top:r(a,c),left:a.right-c.width/2,name:"arrow_s",...o&&{config:o}}),northEastArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.right-.75*c.width+t,name:"arrow_sme",...o&&{config:o}}),northEastArrowSouthEast:(a,c)=>({top:r(a,c),left:a.right-c.width+t,name:"arrow_se",...o&&{config:o}}),southWestArrowNorthWest:a=>({top:s(a),left:a.left-t,name:"arrow_nw",...o&&{config:o}}),southWestArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left-.25*c.width-t,name:"arrow_nmw",...o&&{config:o}}),southWestArrowNorth:(a,c)=>({top:s(a),left:a.left-c.width/2,name:"arrow_n",...o&&{config:o}}),southWestArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left-.75*c.width+t,name:"arrow_nme",...o&&{config:o}}),southWestArrowNorthEast:(a,c)=>({top:s(a),left:a.left-c.width+t,name:"arrow_ne",...o&&{config:o}}),southArrowNorthWest:a=>({top:s(a),left:a.left+a.width/2-t,name:"arrow_nw",...o&&{config:o}}),southArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left+a.width/2-.25*c.width-t,name:"arrow_nmw",...o&&{config:o}}),southArrowNorth:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n",...o&&{config:o}}),southArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left+a.width/2-.75*c.width+t,name:"arrow_nme",...o&&{config:o}}),southArrowNorthEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width+t,name:"arrow_ne",...o&&{config:o}}),southEastArrowNorthWest:a=>({top:s(a),left:a.right-t,name:"arrow_nw",...o&&{config:o}}),southEastArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.right-.25*c.width-t,name:"arrow_nmw",...o&&{config:o}}),southEastArrowNorth:(a,c)=>({top:s(a),left:a.right-c.width/2,name:"arrow_n",...o&&{config:o}}),southEastArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.right-.75*c.width+t,name:"arrow_nme",...o&&{config:o}}),southEastArrowNorthEast:(a,c)=>({top:s(a),left:a.right-c.width+t,name:"arrow_ne",...o&&{config:o}}),westArrowEast:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.left-c.width-e,name:"arrow_e",...o&&{config:o}}),eastArrowWest:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.right+e,name:"arrow_w",...o&&{config:o}}),viewportStickyNorth:(a,c,l)=>a.getIntersection(l)?{top:l.top+n,left:a.left+a.width/2-c.width/2,name:"arrowless",config:{withArrow:!1,...o}}:null};function r(a,c){return a.top-c.height-e}function s(a){return a.bottom+e}}Ot.arrowSideOffset=25,Ot.arrowHeightOffset=10,Ot.stickyVerticalOffset=20,Ot._getOptimalPosition=Ca,Ot.defaultPositions=Ol();var Rl=P(3332),pb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Rl.Z,pb),Rl.Z.locals;let jl="ck-tooltip";class It extends Fe(){constructor(t){if(super(),It._editors.add(t),It._instance)return It._instance;It._instance=this,this.tooltipTextView=new H(t.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Ot(t.locale),this.balloonPanelView.class=jl,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=Zn(this._pinTooltip,600),this.listenTo(V.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(V.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(V.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(V.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(V.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(t){let e=t.ui.view&&t.ui.view.body;It._editors.delete(t),this.stopListening(t.ui),e&&e.has(this.balloonPanelView)&&e.remove(this.balloonPanelView),It._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),It._instance=null)}static getPositioningFunctions(t){let e=It.defaultBalloonPositions;return{s:[e.southArrowNorth,e.southArrowNorthEast,e.southArrowNorthWest],n:[e.northArrowSouth],e:[e.eastArrowWest],w:[e.westArrowEast],sw:[e.southArrowNorthEast],se:[e.southArrowNorthWest]}[t]}_onEnterOrFocus(t,{target:e}){let n=_r(e);var o;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(o=n).dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(t,{target:e,relatedTarget:n}){if(t.name==="mouseleave"){if(!Gn(e)||this._currentElementWithTooltip&&e!==this._currentElementWithTooltip)return;let o=_r(e),r=_r(n);o&&o!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&e!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(t,{target:e}){this._currentElementWithTooltip&&(e.contains(this.balloonPanelView.element)&&e.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(t,{text:e,position:n,cssClass:o}){let r=vt(It._editors.values()).ui.view.body;r.has(this.balloonPanelView)||r.add(this.balloonPanelView),this.tooltipTextView.text=e,this.balloonPanelView.pin({target:t,positions:It.getPositioningFunctions(n)}),this._resizeObserver=new lt(t,()=>{Ve(t)||this._unpinTooltip()}),this.balloonPanelView.class=[jl,o].filter(s=>s).join(" ");for(let s of It._editors)this.listenTo(s.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=t,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(let t of It._editors)this.stopListening(t.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){Ve(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:It.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function _r(i){return Gn(i)?i.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}It.defaultBalloonPositions=Ol({heightOffset:5,sideOffset:13}),It._editors=new Set,It._instance=null;class fb extends J(){constructor(t){super(),this.editor=t,this.componentFactory=new cb(t),this.focusTracker=new Kt,this.tooltipManager=new It(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(let t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);let n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){let t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;let n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){let t=this.editor,e=t.editing.view,n,o;t.keystrokes.set("Alt+F10",(r,s)=>{let a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);let c=this._getCurrentFocusedToolbarDefinition();c&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<o.length;l++){let d=o.shift();if(o.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{let a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){let t=[];for(let e of this._focusableToolbarDefinitions){let{toolbarView:n,options:o}=e;(Ve(n.element)||o.beforeFocus)&&t.push(e)}return t.sort((e,n)=>Fl(e)-Fl(n)),t}_getCurrentFocusedToolbarDefinition(){for(let t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){let{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!Ve(e.element)&&(e.focus(),!0)}}function Fl(i){let{toolbarView:t,options:e}=i,n=10;return Ve(t.element)&&n--,e.isContextual&&n--,n}function Go(i){return class extends i{setData(t){this.data.set(t)}getData(t){return this.data.get(t)}}}{let i=Go(Object);Go.setData=i.prototype.setData,Go.getData=i.prototype.getData}function Cr(i){return class extends i{updateSourceElement(t=this.data.get()){if(!this.sourceElement)throw new w("editor-missing-sourceelement",this);let e=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;kp(this.sourceElement,e||n?t:"")}}}Cr.updateSourceElement=Cr(Object).prototype.updateSourceElement;class Vl extends Do{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new ee({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new w("pendingactions-add-invalid-message",this);let e=new(J());return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}let wt={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};function vr({emitter:i,activator:t,callback:e,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!t())return;let s=typeof r.composedPath=="function"?r.composedPath():[];for(let a of n)if(a.contains(r.target)||s.includes(a))return;e()})}function yr(i){let t=i;t.set("_isCssTransitionsDisabled",!1),t.disableCssTransitions=()=>{t._isCssTransitionsDisabled=!0},t.enableCssTransitions=()=>{t._isCssTransitionsDisabled=!1},t.extendTemplate({attributes:{class:[t.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function xr({view:i}){i.listenTo(i.element,"submit",(t,e)=>{e.preventDefault(),i.fire("submit")},{useCapture:!0})}class kb extends Je{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new re({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=xs(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();let t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var Ul=P(6574),bb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Ul.Z,bb),Ul.Z.locals;class Xe extends H{constructor(){super();let t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",t.if("isColorInherited","ck-icon_inherit-color")],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){let t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");e&&(this.viewBox=e);for(let{name:n,value:o}of Array.from(t.attributes))Xe.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,o);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}Xe.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Hl=P(4906),wb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Hl.Z,wb),Hl.Z.locals;class st extends H{constructor(t){super(t);let e=this.bindTemplate,n=Nt();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new Xe,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));let o={tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",r=>!r),e.if("isVisible","ck-hidden",r=>!r),e.to("isOn",r=>r?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",r=>r||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,r=>!r),"aria-pressed":e.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":e.to("_tooltipString"),"data-cke-tooltip-position":e.to("tooltipPosition")},children:this.children,on:{click:e.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};f.isSafari&&(o.on.mousedown=e.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(t){let e=new H,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){let t=new H;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>Ma(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=Ma(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Wl=P(5332),Ab={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Wl.Z,Ab),Wl.Z.locals;class $o extends st{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){let t=new H;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var ql=P(6781),_b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(ql.Z,_b),ql.Z.locals;let Gl='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Cb extends st{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){let t=new Xe;return t.content=Gl,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var $l=P(7686),vb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()($l.Z,vb),$l.Z.locals;class Er extends H{constructor(t){super(t);let e=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new de,this.focusTracker=new Kt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){let t=new st;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){let t=new st,e=t.bindTemplate;return t.icon=Gl,t.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":e.to("isOn"),"aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}class yb extends H{constructor(t){super(t);let e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){if(this.children.length){let t=this.children.first;typeof t.focus=="function"?t.focus():at("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){let t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var Yl=P(5485),xb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Yl.Z,xb),Yl.Z.locals;class yn extends H{constructor(t,e,n){super(t);let o=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new de,this.focusTracker=new Kt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(e,n,o)=>{o&&(this.panelPosition==="auto"?this.panelView.position=yn._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);let t=(e,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(e,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(e,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){let{south:t,north:e,southEast:n,southWest:o,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:l,northMiddleWest:d}=yn.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,a,c,t,r,s,l,d,e]:[o,n,c,a,t,s,r,d,l,e]}}yn.defaultPanelPositions={south:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,t)=>({top:i.bottom,left:i.left-t.width+i.width,name:"sw"}),southMiddleEast:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/4,name:"sme"}),southMiddleWest:(i,t)=>({top:i.bottom,left:i.left-3*(t.width-i.width)/4,name:"smw"}),north:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/2,name:"n"}),northEast:(i,t)=>({top:i.top-t.height,left:i.left,name:"ne"}),northWest:(i,t)=>({top:i.top-t.height,left:i.left-t.width+i.width,name:"nw"}),northMiddleEast:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/4,name:"nme"}),northMiddleWest:(i,t)=>({top:i.top-t.height,left:i.left-3*(t.width-i.width)/4,name:"nmw"})},yn._getOptimalPosition=Ca;class xn{constructor(t){if(this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(let e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(let o of n)t.keystrokeHandler.set(o,(r,s)=>{this[e](),s()})}}get first(){return this.focusables.find(Dr)||null}get last(){return this.focusables.filter(Dr).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{let o=e.element===this.focusTracker.focusedElement;return o&&(t=n),o}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){let e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let o=(e+n+t)%n;do{let r=this.focusables.get(o);if(Dr(r))return r;o=(o+n+t)%n}while(o!==e);return null}}function Dr(i){return!(!i.focus||!Ve(i.element))}class Kl extends H{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Eb extends H{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Ql(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var Zl=P(5542),Db={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Zl.Z,Db),Zl.Z.locals;let{threeVerticalDots:Jl}=wt,Ib={alignLeft:wt.alignLeft,bold:wt.bold,importExport:wt.importExport,paragraph:wt.paragraph,plus:wt.plus,text:wt.text,threeVerticalDots:wt.threeVerticalDots};class Ir extends H{constructor(t,e){super(t);let n=this.bindTemplate,o=this.t;this.options=e||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Kt,this.keystrokes=new de,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new Tb(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();let r=t.uiLanguageDirection==="rtl";this._focusCycler=new xn({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});let s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new Sb(this):new Mb(this)}render(){super.render();for(let t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e,n){let o=Ql(t),r=n||o.removeItems,s=this._cleanItemsConfiguration(o.items,e,r).map(a=>gt(a)?this._createNestedToolbarDropdown(a,e,r):a==="|"?new Kl:a==="-"?new Eb:e.create(a)).filter(a=>!!a);this.items.addMany(s)}_cleanItemsConfiguration(t,e,n){let o=t.filter((r,s,a)=>r==="|"||n.indexOf(r)===-1&&(r==="-"?!this.options.shouldGroupWhenFull||(at("toolbarview-line-break-ignored-when-grouping-items",a),!1):!(!gt(r)&&!e.has(r))||(at("toolbarview-item-unavailable",{item:r}),!1)));return this._cleanSeparatorsAndLineBreaks(o)}_cleanSeparatorsAndLineBreaks(t){let e=s=>s!=="-"&&s!=="|",n=t.length,o=t.findIndex(e);if(o===-1)return[];let r=n-t.slice().reverse().findIndex(e);return t.slice(o,r).filter((s,a,c)=>e(s)?!0:!(a>0&&c[a-1]===s))}_createNestedToolbarDropdown(t,e,n){let{label:o,icon:r,items:s,tooltip:a=!0,withText:c=!1}=t;if(s=this._cleanItemsConfiguration(s,e,n),!s.length)return null;let l=Se(this.locale);return o||at("toolbarview-nested-toolbar-dropdown-missing-label",t),l.class="ck-toolbar__nested-toolbar-dropdown",l.buttonView.set({label:o,tooltip:a,withText:!!c}),r!==!1?l.buttonView.icon=Ib[r]||r||Jl:l.buttonView.withText=!0,Tr(l,[]),l.toolbarView.fillFromConfig(s,e,n),l}}class Tb extends H{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class Mb{constructor(t){let e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class Sb{constructor(t){this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("change",this._updateFocusCycleableItems.bind(this)),t.children.on("change",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{let o=n.index,r=Array.from(n.added);for(let s of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=o;s<o+r.length;s++){let a=r[s-o];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Ve(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);let t=this.groupedItems.length,e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;let t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new kt(t.lastChild),o=new kt(t);if(!this.cachedPadding){let r=V.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new lt(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Kl),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){let t=this.viewLocale,e=t.t,n=Se(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",Tr(n,[]),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:Jl}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Xl=P(1046),Nb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Xl.Z,Nb),Xl.Z.locals;class Bb extends H{constructor(t){super(t),this.items=this.createCollection(),this.focusTracker=new Kt,this.keystrokes=new de,this._focusCycler=new xn({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(let t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class td extends H{constructor(t){super(t);let e=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",e.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class Pb extends H{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var ed=P(7339),zb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(ed.Z,zb),ed.Z.locals;var nd=P(3949),Lb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(nd.Z,Lb),nd.Z.locals;function Se(i,t=Cb){let e=new t(i),n=new yb(i),o=new yn(i,e,n);return e.bind("isEnabled").to(o),e instanceof Er?e.arrowView.bind("isOn").to(o,"isOpen"):e.bind("isOn").to(o,"isOpen"),function(r){(function(s){s.on("render",()=>{vr({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof $o||(s.isOpen=!1)})}(r),function(s){s.focusTracker.on("change:isFocused",(a,c,l)=>{s.isOpen&&!l&&(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r),function(s){s.on("change:isOpen",(a,c,l)=>{l||s.panelView.element.contains(V.document.activeElement)&&s.buttonView.focus()})}(r),function(s){s.on("change:isOpen",(a,c,l)=>{l&&s.panelView.focus()},{priority:"low"})}(r)}(o),o}function Tr(i,t,e={}){let n=i.locale,o=n.t,r=i.toolbarView=new Ir(n);r.set("ariaLabel",o("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(s=>r.items.add(s)),e.enableActiveItemFocusOnDropdownOpen&&id(i,()=>r.items.find(s=>s.isOn)),i.panelView.children.add(r),r.items.delegate("execute").to(i)}function od(i,t){let e=i.locale,n=i.listView=new Bb(e);n.items.bindTo(t).using(o=>{if(o.type==="separator")return new Pb(e);if(o.type==="button"||o.type==="switchbutton"){let r=new td(e),s;return s=o.type==="button"?new st(e):new $o(e),s.bind(...Object.keys(o.model)).to(o.model),s.delegate("execute").to(r),r.children.add(s),r}return null}),i.panelView.children.add(n),n.items.delegate("execute").to(i),id(i,()=>n.items.find(o=>o instanceof td&&o.children.first.isOn))}function id(i,t){i.on("change:isOpen",()=>{if(!i.isOpen)return;let e=t();e&&(typeof e.focus=="function"?e.focus():at("ui-dropdown-focus-child-on-open-child-missing-focus",{view:e}))},{priority:$t.low-10})}var rd=P(9688),Ob={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(rd.Z,Ob),rd.Z.locals;class Rb extends H{constructor(t){super(t),this.body=new kb(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var sd=P(3662),jb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(sd.Z,jb),sd.Z.locals;class ad extends H{constructor(t){super(t),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${Nt()}`;let e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class Fb extends Rb{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){let t=this.t,e=new ad;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class Vb extends H{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){let t=this._editingView;function e(n){t.change(o=>{let r=t.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(o){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(o):e(o)})}(this):e(this)}}class Ub extends Vb{constructor(t,e,n,o={}){super(t,e,n);let r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();let t=this._editingView;t.change(e=>{let n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}var cd=P(8847),Hb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(cd.Z,Hb),cd.Z.locals;var ld=P(4879),Wb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(ld.Z,Wb),ld.Z.locals;class qb extends H{constructor(t){super(t),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new Kt,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");let e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),inputmode:e.to("inputMode"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}class Gb extends qb{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var dd=P(2577),$b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(dd.Z,$b),dd.Z.locals;class Mr extends H{constructor(t,e){super(t);let n=`ck-labeled-field-view-${Nt()}`,o=`ck-labeled-field-view-status-${Nt()}`;this.fieldView=e(this,n,o),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);let r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(t){let e=new ad(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){let e=new H(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}function Sr(i,t,e){let n=new Gb(i.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class Nr extends Do{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){let e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class hd extends J(){constructor(t,e){super(),e&&wc(this,e),t&&this.set(t)}}var ud=P(4650),Yb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(ud.Z,Yb),ud.Z.locals;var gd=P(7676),Kb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(gd.Z,Kb),gd.Z.locals;let Yo=gn("px");class Ko extends S{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=()=>{let e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new Ot(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new w("contextualballoon-add-view-exist",[this,t]);let e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));let n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new w("contextualballoon-remove-view-not-exist",[this,t]);let e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;let e=this._idToStack.get(t);if(!e)throw new w("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){let t=Array.from(this._idToStack.values()),e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){let t=Array.from(this._idToStack.values()),e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){let t=new Qb(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";let r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,o])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){let t=new Zb(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class Qb extends H{constructor(t){super(t);let e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Kt,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){let n=new st(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Zb extends H{constructor(t,e){super(t);let n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Yo),left:n.to("left",Yo),width:n.to("width",Yo),height:n.to("height",Yo)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){let e=new H;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){let e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){let{top:t,left:e}=this._balloonPanelView,{width:n,height:o}=new kt(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:o})}}}var md=P(5868),Jb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(md.Z,Jb),md.Z.locals;let co=gn("px");class Xb extends H{constructor(t){super(t);let e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new re({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?co(this._panelRect.height):null)}}}).render(),this._contentPanel=new re({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?co(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",n=>n?co(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",n=>n?co(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(V.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){let t=this._panelRect=this._contentPanel.getBoundingClientRect(),e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:co(-V.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}gn("px");var pd=P(9695),tw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(pd.Z,tw),pd.Z.locals,gn("px"),gn("px");let{pilcrow:n0}=wt;class ew extends fb{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Ql(t.config.get("toolbar")),this._elementReplacer=new Rg}get element(){return this.view.element}init(t){let e=this.editor,n=this.view,o=e.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();let a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();let t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){let t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){let t=this.editor,e=t.editing.view,n=e.document.getRoot(),o=t.sourceElement,r=t.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");r&&ja({view:e,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var fd=P(3143),nw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(fd.Z,nw),fd.Z.locals;class ow extends Fb{constructor(t,e,n={}){super(t),this.stickyPanel=new Xb(t),this.toolbar=new Ir(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new Ub(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class iw extends Go(Cr(ab)){constructor(t,e={}){if(!Qo(t)&&e.initialData!==void 0)throw new w("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Qo(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(t)),Qo(t)&&(this.sourceElement=t),this.model.document.createRoot();let n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new ow(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new ew(this,o),function(r){if(!Le(r.updateSourceElement))throw new w("attachtoform-missing-elementapi-interface",r);let s=r.sourceElement;if(function(a){return!!a&&a.tagName.toLowerCase()==="textarea"}(s)&&s.form){let a,c=s.form,l=()=>r.updateSourceElement();Le(c.submit)&&(a=c.submit,c.submit=()=>{l(),a.apply(c)}),c.addEventListener("submit",l),r.on("destroy",()=>{c.removeEventListener("submit",l),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{let o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init(Qo(t)?t:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}function Qo(i){return Gn(i)}class Br extends Ie{constructor(t){super(t);let e=this.document;function n(o){return(r,s)=>{s.preventDefault();let a=s.dropRange?[s.dropRange]:null,c=new ot(e,o);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){let e={dataTransfer:new Ic("clipboardData"in t?t.clipboardData:t.dataTransfer)};t.type!="drop"&&t.type!="dragover"||(e.dropRange=function(n,o){let r=o.target.ownerDocument,s=o.clientX,a=o.clientY,c;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,a)?c=r.caretRangeFromPoint(s,a):o.rangeParent&&(c=r.createRange(),c.setStart(o.rangeParent,o.rangeOffset),c.collapse(!0)),c?n.domConverter.domRangeToView(c):null}(this.view,t)),this.fire(t.type,t,e)}}let kd=["figcaption","li"];function bd(i){let t="";if(i.is("$text")||i.is("$textProxy"))t=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))t=i.getAttribute("alt");else if(i.is("element","br"))t=`
`;else{let e=null;for(let n of i.getChildren()){let o=bd(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(kd.includes(e.name)||kd.includes(n.name)?t+=`
`:t+=`

`),t+=o,e=n}}return t}class be extends S{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(Br),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){let t=this.editor,e=t.model,n=t.editing.view,o=n.document;this.listenTo(o,"clipboardInput",r=>{t.isReadOnly&&r.stop()},{priority:"highest"}),this.listenTo(o,"clipboardInput",(r,s)=>{let a=s.dataTransfer,c;if(s.content)c=s.content;else{let h="";a.getData("text/html")?h=function(u){return u.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(g,m)=>m.length==1?" ":m).replace(/<!--[\s\S]*?-->/g,"")}(a.getData("text/html")):a.getData("text/plain")&&(((l=(l=a.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).includes("</p><p>")||l.includes("<br>"))&&(l=`<p>${l}</p>`),h=l),c=this.editor.data.htmlProcessor.toView(h)}var l;let d=new ot(this,"inputTransformation");this.fire(d,{content:c,dataTransfer:a,targetRanges:s.targetRanges,method:s.method}),d.stop.called&&r.stop(),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(r,s)=>{if(s.content.isEmpty)return;let a=this.editor.data.toModel(s.content,"$clipboardHolder");a.childCount!=0&&(r.stop(),e.change(()=>{this.fire("contentInsertion",{content:a,method:s.method,dataTransfer:s.dataTransfer,targetRanges:s.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(r,s)=>{s.resultRange=e.insertContent(s.content)},{priority:"low"})}_setupCopyCut(){let t=this.editor,e=t.model.document,n=t.editing.view.document,o=(r,s)=>{let a=s.dataTransfer;s.preventDefault();let c=t.data.toView(t.model.getSelectedContent(e.selection));n.fire("clipboardOutput",{dataTransfer:a,content:c,method:r.name})};this.listenTo(n,"copy",o,{priority:"low"}),this.listenTo(n,"cut",(r,s)=>{t.isReadOnly?s.preventDefault():o(r,s)},{priority:"low"}),this.listenTo(n,"clipboardOutput",(r,s)=>{s.content.isEmpty||(s.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(s.content)),s.dataTransfer.setData("text/plain",bd(s.content))),s.method=="cut"&&t.model.deleteContent(e.selection)},{priority:"low"})}}class wd{constructor(t,e=20){this._batch=null,this.model=t,this._size=0,this.limit=e,this._isLocked=!1,this._changeCallback=(n,o)=>{o.isLocal&&o.isUndoable&&o!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(t){this._size+=t,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t=!1){this.isLocked&&!t||(this._batch=null,this._size=0)}}class rw extends U{constructor(t,e){super(t),this._buffer=new wd(t.model,e)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){let e=this.editor.model,n=e.document,o=t.text||"",r=o.length,s=n.selection;t.selection?s=t.selection:t.range&&(s=e.createSelection(t.range));let a=t.resultRange;e.enqueueChange(this._buffer.batch,c=>{this._buffer.lock(),e.deleteContent(s),o&&e.insertContent(c.createText(o,n.selection.getAttributes()),s),a?c.setSelection(a):s.is("documentSelection")||c.setSelection(s),this._buffer.unlock(),this._buffer.input(r)})}}let Ad=["insertText","insertReplacementText"];class sw extends pe{constructor(t){super(t),f.isAndroid&&Ad.push("insertCompositionText");let e=t.document;e.on("beforeinput",(n,o)=>{if(!this.isEnabled)return;let{data:r,targetRanges:s,inputType:a,domEvent:c}=o;if(!Ad.includes(a))return;let l=new ot(e,"insertText");e.fire(l,new bn(t,c,{text:r,selection:t.createSelection(s)})),l.stop.called&&n.stop()}),e.on("compositionend",(n,{data:o,domEvent:r})=>{this.isEnabled&&!f.isAndroid&&o&&e.fire("insertText",new bn(t,r,{text:o,selection:e.selection}))},{priority:"lowest"})}observe(){}}class _d extends S{static get pluginName(){return"Input"}init(){let t=this.editor,e=t.model,n=t.editing.view,o=e.document.selection;n.addObserver(sw);let r=new rw(t,t.config.get("typing.undoStep")||20);t.commands.add("insertText",r),t.commands.add("input",r),this.listenTo(n.document,"insertText",(s,a)=>{n.document.isComposing||a.preventDefault();let{text:c,selection:l,resultRange:d}=a,h=Array.from(l.getRanges()).map(m=>t.editing.mapper.toModelRange(m)),u=c;if(f.isAndroid){let m=Array.from(h[0].getItems()).reduce((p,k)=>p+(k.is("$textProxy")?k.data:""),"");m&&(m.length<=u.length?u.startsWith(m)&&(u=u.substring(m.length),h[0].start=h[0].start.getShiftedBy(m.length)):m.startsWith(u)&&(h[0].start=h[0].start.getShiftedBy(u.length),u=""))}let g={text:u,selection:e.createSelection(h)};d&&(g.resultRange=t.editing.mapper.toModelRange(d)),t.execute("insertText",g)}),f.isAndroid?this.listenTo(n.document,"keydown",(s,a)=>{!o.isCollapsed&&a.keyCode==229&&n.document.isComposing&&Cd(e,r)}):this.listenTo(n.document,"compositionstart",()=>{o.isCollapsed||Cd(e,r)})}}function Cd(i,t){if(!t.isEnabled)return;let e=t.buffer;e.lock(),i.enqueueChange(e.batch,()=>{i.deleteContent(i.document.selection)}),e.unlock()}class vd extends U{constructor(t,e){super(t),this.direction=e,this._buffer=new wd(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){let e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,o=>{this._buffer.lock();let r=o.createSelection(t.selection||n.selection),s=t.sequence||1,a=r.isCollapsed;if(r.isCollapsed&&e.modifySelection(r,{direction:this.direction,unit:t.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(s))return void this._replaceEntireContentWithParagraph(o);if(this._shouldReplaceFirstBlockWithParagraph(r,s))return void this.editor.execute("paragraph",{selection:r});if(r.isCollapsed)return;let c=0;r.getFirstRange().getMinimalFlatRanges().forEach(l=>{c+=gi(l.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(r,{doNotResetEntireContent:a,direction:this.direction}),this._buffer.input(c),o.setSelection(r),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;let e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(o))||!e.schema.checkChild(o,"paragraph"))return!1;let r=o.getChild(0);return!r||!r.is("element","paragraph")}_replaceEntireContentWithParagraph(t){let e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n),r=t.createElement("paragraph");t.remove(t.createRangeIn(o)),t.insert(r,o),t.setSelection(r,0)}_shouldReplaceFirstBlockWithParagraph(t,e){let n=this.editor.model;if(e>1||this.direction!="backward"||!t.isCollapsed)return!1;let o=t.getFirstPosition(),r=n.schema.getLimitElement(o),s=r.getChild(0);return o.parent==s&&!!t.containsEntireContent(s)&&!!n.schema.checkChild(r,"paragraph")&&s.name!="paragraph"}}let yd="word",Ne="selection",En="backward",lo="forward",xd={deleteContent:{unit:Ne,direction:En},deleteContentBackward:{unit:"codePoint",direction:En},deleteWordBackward:{unit:yd,direction:En},deleteHardLineBackward:{unit:Ne,direction:En},deleteSoftLineBackward:{unit:Ne,direction:En},deleteContentForward:{unit:"character",direction:lo},deleteWordForward:{unit:yd,direction:lo},deleteHardLineForward:{unit:Ne,direction:lo},deleteSoftLineForward:{unit:Ne,direction:lo}};class aw extends pe{constructor(t){super(t);let e=t.document,n=0;e.on("keydown",()=>{n++}),e.on("keyup",()=>{n=0}),e.on("beforeinput",(o,r)=>{if(!this.isEnabled)return;let{targetRanges:s,domEvent:a,inputType:c}=r,l=xd[c];if(!l)return;let d={direction:l.direction,unit:l.unit,sequence:n};d.unit==Ne&&(d.selectionToRemove=t.createSelection(s[0])),f.isAndroid&&c==="deleteContentBackward"&&(d.sequence=1,s.length!=1||s[0].start.parent==s[0].end.parent&&s[0].start.offset+1==s[0].end.offset||(d.unit=Ne,d.selectionToRemove=t.createSelection(s)));let h=new fn(e,"delete",s[0]);e.fire(h,new bn(t,a,d)),h.stop.called&&o.stop()}),f.isBlink&&function(o){let r=o.view,s=r.document,a=null,c=!1;function l(h){return h==W.backspace||h==W.delete}function d(h){return h==W.backspace?En:lo}s.on("keydown",(h,{keyCode:u})=>{a=u,c=!1}),s.on("keyup",(h,{keyCode:u,domEvent:g})=>{let m=s.selection,p=o.isEnabled&&u==a&&l(u)&&!m.isCollapsed&&!c;if(a=null,p){let k=m.getFirstRange(),b=new fn(s,"delete",k),A={unit:Ne,direction:d(u),selectionToRemove:m};s.fire(b,new bn(r,g,A))}}),s.on("beforeinput",(h,{inputType:u})=>{let g=xd[u];l(a)&&g&&g.direction==d(a)&&(c=!0)},{priority:"high"}),s.on("beforeinput",(h,{inputType:u,data:g})=>{a==W.delete&&u=="insertText"&&g=="\x7F"&&h.stop()},{priority:"high"})}(this)}observe(){}}class Be extends S{static get pluginName(){return"Delete"}init(){let t=this.editor,e=t.editing.view,n=e.document,o=t.model.document;e.addObserver(aw),this._undoOnBackspace=!1;let r=new vd(t,"forward");t.commands.add("deleteForward",r),t.commands.add("forwardDelete",r),t.commands.add("delete",new vd(t,"backward")),this.listenTo(n,"delete",(s,a)=>{n.isComposing||a.preventDefault();let{direction:c,sequence:l,selectionToRemove:d,unit:h}=a,u=c==="forward"?"deleteForward":"delete",g={sequence:l};if(h=="selection"){let m=Array.from(d.getRanges()).map(p=>t.editing.mapper.toModelRange(p));g.selection=t.model.createSelection(m)}else g.unit=h;t.execute(u,g),e.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(s,a)=>{this._undoOnBackspace&&a.direction=="backward"&&a.sequence==1&&a.unit=="codePoint"&&(this._undoOnBackspace=!1,t.execute("undo"),a.preventDefault(),s.stop())},{context:"$capture"}),this.listenTo(o,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class cw extends S{static get requires(){return[_d,Be]}static get pluginName(){return"Typing"}}function Ed(i,t){let e=i.start;return{text:Array.from(i.getItems()).reduce((n,o)=>o.is("$text")||o.is("$textProxy")?n+o.data:(e=t.createPositionAfter(o),""),""),range:t.createRange(e,i.end)}}class Dd extends J(){constructor(t,e){super(),this.model=t,this.testCallback=e,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(t.document.selection),this.stopListening(t.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){let t=this.model.document;this.listenTo(t.selection,"change:range",(e,{directChange:n})=>{n&&(t.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1))}),this.listenTo(t,"change:data",(e,n)=>{!n.isUndo&&n.isLocal&&this._evaluateTextBeforeSelection("data",{batch:n})})}_evaluateTextBeforeSelection(t,e={}){let n=this.model,o=n.document.selection,r=n.createRange(n.createPositionAt(o.focus.parent,0),o.focus),{text:s,range:a}=Ed(r,n),c=this.testCallback(s);if(!c&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!c,c){let l=Object.assign(e,{text:s,range:a});typeof c=="object"&&Object.assign(l,c),this.fire(`matched:${t}`,l)}}}class Id extends S{static get pluginName(){return"TwoStepCaretMovement"}constructor(t){super(t),this.attributes=new Set,this._overrideUid=null}init(){let t=this.editor,e=t.model,n=t.editing.view,o=t.locale,r=e.document.selection;this.listenTo(n.document,"arrowKey",(s,a)=>{if(!r.isCollapsed||a.shiftKey||a.altKey||a.ctrlKey)return;let c=a.keyCode==W.arrowright,l=a.keyCode==W.arrowleft;if(!c&&!l)return;let d=o.contentLanguageDirection,h=!1;h=d==="ltr"&&c||d==="rtl"&&l?this._handleForwardMovement(a):this._handleBackwardMovement(a),h===!0&&s.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(r,"change:range",(s,a)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!a.directChange&&Jo(r.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(t){this.attributes.add(t)}_handleForwardMovement(t){let e=this.attributes,n=this.editor.model.document.selection,o=n.getFirstPosition();return!this._isGravityOverridden&&(!o.isAtStart||!Pr(n,e))&&!!Jo(o,e)&&(Zo(t),this._overrideGravity(),!0)}_handleBackwardMovement(t){let e=this.attributes,n=this.editor.model,o=n.document.selection,r=o.getFirstPosition();return this._isGravityOverridden?(Zo(t),this._restoreGravity(),zr(n,e,r),!0):r.isAtStart?!!Pr(o,e)&&(Zo(t),zr(n,e,r),!0):!!function(s,a){let c=s.getShiftedBy(-1);return Jo(c,a)}(r,e)&&(r.isAtEnd&&!Pr(o,e)&&Jo(r,e)?(Zo(t),zr(n,e,r),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1))}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Pr(i,t){for(let e of t)if(i.hasAttribute(e))return!0;return!1}function zr(i,t,e){let n=e.nodeBefore;i.change(o=>{n?o.setSelectionAttribute(n.getAttributes()):o.removeSelectionAttribute(t)})}function Zo(i){i.preventDefault()}function Jo(i,t){let{nodeBefore:e,nodeAfter:n}=i;for(let o of t){let r=e?e.getAttribute(o):void 0;if((n?n.getAttribute(o):void 0)!==r)return!0}return!1}var Td=/[\\^$.*+?()[\]{}|]/g,lw=RegExp(Td.source);let dw=function(i){return(i=Vi(i))&&lw.test(i)?i.replace(Td,"\\$&"):i},Md={copyright:{from:"(c)",to:"\xA9"},registeredTrademark:{from:"(r)",to:"\xAE"},trademark:{from:"(tm)",to:"\u2122"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"\xBD",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"\u2153",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"\u2154",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"\xBC",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"\xBE",null]},lessThanOrEqual:{from:"<=",to:"\u2264"},greaterThanOrEqual:{from:">=",to:"\u2265"},notEqual:{from:"!=",to:"\u2260"},arrowLeft:{from:"<-",to:"\u2190"},arrowRight:{from:"->",to:"\u2192"},horizontalEllipsis:{from:"...",to:"\u2026"},enDash:{from:/(^| )(--)( )$/,to:[null,"\u2013",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"\u2014",null]},quotesPrimary:{from:Dn('"'),to:[null,"\u201C",null,"\u201D"]},quotesSecondary:{from:Dn("'"),to:[null,"\u2018",null,"\u2019"]},quotesPrimaryEnGb:{from:Dn("'"),to:[null,"\u2018",null,"\u2019"]},quotesSecondaryEnGb:{from:Dn('"'),to:[null,"\u201C",null,"\u201D"]},quotesPrimaryPl:{from:Dn('"'),to:[null,"\u201E",null,"\u201D"]},quotesSecondaryPl:{from:Dn("'"),to:[null,"\u201A",null,"\u2019"]}},Sd={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},hw=["symbols","mathematical","typography","quotes"];function uw(i){return typeof i=="string"?new RegExp(`(${dw(i)})$`):i}function gw(i){return typeof i=="string"?()=>[i]:i instanceof Array?()=>i:i}function mw(i){return(i.textNode?i.textNode:i.nodeAfter).getAttributes()}function Dn(i){return new RegExp(`(^|\\s)(${i})([^${i}]*)(${i})$`)}function In(i,t,e,n){return n.createRange(Nd(i,t,e,!0,n),Nd(i,t,e,!1,n))}function Nd(i,t,e,n,o){let r=i.textNode||(n?i.nodeBefore:i.nodeAfter),s=null;for(;r&&r.getAttribute(t)==e;)s=r,r=n?r.previousSibling:r.nextSibling;return s?o.createPositionAt(s,n?"before":"after"):i}function*Bd(i,t){for(let e of t)e&&i.getAttributeProperties(e[0]).copyOnEnter&&(yield e)}class pw extends U{execute(){this.editor.model.change(t=>{this.enterBlock(t),this.fire("afterExecute",{writer:t})})}enterBlock(t){let e=this.editor.model,n=e.document.selection,o=e.schema,r=n.isCollapsed,s=n.getFirstRange(),a=s.start.parent,c=s.end.parent;if(o.isLimit(a)||o.isLimit(c))return r||a!=c||e.deleteContent(n),!1;if(r){let l=Bd(t.model.schema,n.getAttributes());return Pd(t,s.start),t.setSelectionAttribute(l),!0}{let l=!(s.start.isAtStart&&s.end.isAtEnd),d=a==c;if(e.deleteContent(n,{leaveUnmerged:l}),l){if(d)return Pd(t,n.focus),!0;t.setSelection(c,0)}}return!1}}function Pd(i,t){i.split(t),i.setSelection(t.parent.nextSibling,0)}let fw={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class zd extends pe{constructor(t){super(t);let e=this.document;e.on("beforeinput",(n,o)=>{if(!this.isEnabled)return;let r=o.domEvent,s=fw[o.inputType];if(!s)return;let a=new fn(e,"enter",o.targetRanges[0]);e.fire(a,new bn(t,r,{isSoft:s.isSoft})),a.stop.called&&n.stop()})}observe(){}}class Xo extends S{static get pluginName(){return"Enter"}init(){let t=this.editor,e=t.editing.view,n=e.document;e.addObserver(zd),t.commands.add("enter",new pw(t)),this.listenTo(n,"enter",(o,r)=>{n.isComposing||r.preventDefault(),r.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class kw extends U{execute(){let t=this.editor.model,e=t.document;t.change(n=>{(function(o,r,s){let a=s.isCollapsed,c=s.getFirstRange(),l=c.start.parent,d=c.end.parent,h=l==d;if(a){let u=Bd(o.schema,s.getAttributes());Ld(o,r,c.end),r.removeSelectionAttribute(s.getAttributeKeys()),r.setSelectionAttribute(u)}else{let u=!(c.start.isAtStart&&c.end.isAtEnd);o.deleteContent(s,{leaveUnmerged:u}),h?Ld(o,r,s.focus):u&&r.setSelection(d,0)}})(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){let t=this.editor.model,e=t.document;this.isEnabled=function(n,o){if(o.rangeCount>1)return!1;let r=o.anchor;if(!r||!n.checkChild(r,"softBreak"))return!1;let s=o.getFirstRange(),a=s.start.parent,c=s.end.parent;return!((Lr(a,n)||Lr(c,n))&&a!==c)}(t.schema,e.selection)}}function Ld(i,t,e){let n=t.createElement("softBreak");i.insertContent(n,e),t.setSelection(n,"after")}function Lr(i,t){return!i.is("rootElement")&&(t.isLimit(i)||Lr(i.parent,t))}class bw extends S{static get pluginName(){return"ShiftEnter"}init(){let t=this.editor,e=t.model.schema,n=t.conversion,o=t.editing.view,r=o.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(s,{writer:a})=>a.createEmptyElement("br")}),o.addObserver(zd),t.commands.add("shiftEnter",new kw(t)),this.listenTo(r,"enter",(s,a)=>{r.isComposing||a.preventDefault(),a.isSoft&&(t.execute("shiftEnter"),o.scrollToTheSelection())},{priority:"low"})}}class ww extends $(){constructor(){super(),this._stack=[]}add(t,e){let n=this._stack,o=n[0];this._insertDescriptor(t);let r=n[0];o===r||Or(o,r)||this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:e})}remove(t,e){let n=this._stack,o=n[0];this._removeDescriptor(t);let r=n[0];o===r||Or(o,r)||this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:e})}_insertDescriptor(t){let e=this._stack,n=e.findIndex(r=>r.id===t.id);if(Or(t,e[n]))return;n>-1&&e.splice(n,1);let o=0;for(;e[o]&&Aw(e[o],t);)o++;e.splice(o,0,t)}_removeDescriptor(t){let e=this._stack,n=e.findIndex(o=>o.id===t);n>-1&&e.splice(n,1)}}function Or(i,t){return i&&t&&i.priority==t.priority&&ti(i.classes)==ti(t.classes)}function Aw(i,t){return i.priority>t.priority||!(i.priority<t.priority)&&ti(i.classes)>ti(t.classes)}function ti(i){return Array.isArray(i)?i.sort().join(","):i}let _w='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>',Od="ck-widget_selected";function pt(i){return!!i.is("element")&&!!i.getCustomProperty("widget")}function Rr(i,t,e={}){if(!i.is("containerElement"))throw new w("widget-to-widget-wrong-element-type",null,{element:i});return t.setAttribute("contenteditable","false",i),t.addClass("ck-widget",i),t.setCustomProperty("widget",!0,i),i.getFillerOffset=yw,t.setCustomProperty("widgetLabel",[],i),e.label&&function(n,o){n.getCustomProperty("widgetLabel").push(o)}(i,e.label),e.hasSelectionHandle&&function(n,o){let r=o.createUIElement("div",{class:"ck ck-widget__selection-handle"},function(s){let a=this.toDomElement(s),c=new Xe;return c.set("content",_w),c.render(),a.appendChild(c.element),a});o.insert(o.createPositionAt(n,0),r),o.addClass(["ck-widget_with-selection-handle"],n)}(i,t),Rd(i,t),i}function Cw(i,t,e){if(t.classes&&e.addClass(xt(t.classes),i),t.attributes)for(let n in t.attributes)e.setAttribute(n,t.attributes[n],i)}function vw(i,t,e){if(t.classes&&e.removeClass(xt(t.classes),i),t.attributes)for(let n in t.attributes)e.removeAttribute(n,i)}function Rd(i,t,e=Cw,n=vw){let o=new ww;o.on("change:top",(r,s)=>{s.oldDescriptor&&n(i,s.oldDescriptor,s.writer),s.newDescriptor&&e(i,s.newDescriptor,s.writer)}),t.setCustomProperty("addHighlight",(r,s,a)=>o.add(s,a),i),t.setCustomProperty("removeHighlight",(r,s,a)=>o.remove(s,a),i)}function jd(i,t,e={}){return t.addClass(["ck-editor__editable","ck-editor__nested-editable"],i),t.setAttribute("role","textbox",i),e.label&&t.setAttribute("aria-label",e.label,i),t.setAttribute("contenteditable",i.isReadOnly?"false":"true",i),i.on("change:isReadOnly",(n,o,r)=>{t.setAttribute("contenteditable",r?"false":"true",i)}),i.on("change:isFocused",(n,o,r)=>{r?t.addClass("ck-editor__nested-editable_focused",i):t.removeClass("ck-editor__nested-editable_focused",i)}),Rd(i,t),i}function Fd(i,t){let e=i.getSelectedElement();if(e){let n=Pe(i);if(n)return t.createRange(t.createPositionAt(e,n))}return Cl(i,t)}function yw(){return null}let ve="widget-type-around";function tn(i,t,e){return!!i&&pt(i)&&!e.isInline(t)}function Pe(i){return i.getAttribute(ve)}var Vd=P(4921),xw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Vd.Z,xw),Vd.Z.locals;let Ud=["before","after"],Ew=new DOMParser().parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>',"image/svg+xml").firstChild,Hd="ck-widget__type-around_disabled";class Dw extends S{static get pluginName(){return"WidgetTypeAround"}static get requires(){return[Xo,Be]}constructor(t){super(t),this._currentFakeCaretModelElement=null}init(){let t=this.editor,e=t.editing.view;this.on("change:isEnabled",(n,o,r)=>{e.change(s=>{for(let a of e.document.roots)r?s.removeClass(Hd,a):s.addClass(Hd,a)}),r||t.model.change(s=>{s.removeSelectionAttribute(ve)})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration(),this._enableInsertObjectIntegration(),this._enableDeleteContentIntegration()}destroy(){super.destroy(),this._currentFakeCaretModelElement=null}_insertParagraph(t,e){let n=this.editor,o=n.editing.view,r=n.model.schema.getAttributesWithProperty(t,"copyOnReplace",!0);n.execute("insertParagraph",{position:n.model.createPositionAt(t,e),attributes:r}),o.focus(),o.scrollToTheSelection()}_listenToIfEnabled(t,e,n,o){this.listenTo(t,e,(...r)=>{this.isEnabled&&n(...r)},o)}_insertParagraphAccordingToFakeCaretPosition(){let t=this.editor.model.document.selection,e=Pe(t);if(!e)return!1;let n=t.getSelectedElement();return this._insertParagraph(n,e),!0}_enableTypeAroundUIInjection(){let t=this.editor,e=t.model.schema,n=t.locale.t,o={before:n("Insert paragraph before block"),after:n("Insert paragraph after block")};t.editing.downcastDispatcher.on("insert",(r,s,a)=>{let c=a.mapper.toViewElement(s.item);c&&tn(c,s.item,e)&&(function(l,d,h){let u=l.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},function(g){let m=this.toDomElement(g);return function(p,k){for(let b of Ud){let A=new re({tag:"div",attributes:{class:["ck","ck-widget__type-around__button",`ck-widget__type-around__button_${b}`],title:k[b],"aria-hidden":"true"},children:[p.ownerDocument.importNode(Ew,!0)]});p.appendChild(A.render())}}(m,d),function(p){let k=new re({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});p.appendChild(k.render())}(m),m});l.insert(l.createPositionAt(h,"end"),u)}(a.writer,o,c),c.getCustomProperty("widgetLabel").push(()=>this.isEnabled?n("Press Enter to type after or press Shift + Enter to type before the widget"):""))},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){let t=this.editor,e=t.model,n=e.document.selection,o=e.schema,r=t.editing.view;function s(a){return`ck-widget_type-around_show-fake-caret_${a}`}this._listenToIfEnabled(r.document,"arrowKey",(a,c)=>{this._handleArrowKeyPress(a,c)},{context:[pt,"$text"],priority:"high"}),this._listenToIfEnabled(n,"change:range",(a,c)=>{c.directChange&&t.model.change(l=>{l.removeSelectionAttribute(ve)})}),this._listenToIfEnabled(e.document,"change:data",()=>{let a=n.getSelectedElement();a&&tn(t.editing.mapper.toViewElement(a),a,o)||t.model.change(c=>{c.removeSelectionAttribute(ve)})}),this._listenToIfEnabled(t.editing.downcastDispatcher,"selection",(a,c,l)=>{let d=l.writer;if(this._currentFakeCaretModelElement){let m=l.mapper.toViewElement(this._currentFakeCaretModelElement);m&&(d.removeClass(Ud.map(s),m),this._currentFakeCaretModelElement=null)}let h=c.selection.getSelectedElement();if(!h)return;let u=l.mapper.toViewElement(h);if(!tn(u,h,o))return;let g=Pe(c.selection);g&&(d.addClass(s(g),u),this._currentFakeCaretModelElement=h)}),this._listenToIfEnabled(t.ui.focusTracker,"change:isFocused",(a,c,l)=>{l||t.model.change(d=>{d.removeSelectionAttribute(ve)})})}_handleArrowKeyPress(t,e){let n=this.editor,o=n.model,r=o.document.selection,s=o.schema,a=n.editing.view,c=function(h,u){let g=Oi(h,u);return g==="down"||g==="right"}(e.keyCode,n.locale.contentLanguageDirection),l=a.document.selection.getSelectedElement(),d;tn(l,n.editing.mapper.toModelElement(l),s)?d=this._handleArrowKeyPressOnSelectedWidget(c):r.isCollapsed?d=this._handleArrowKeyPressWhenSelectionNextToAWidget(c):e.shiftKey||(d=this._handleArrowKeyPressWhenNonCollapsedSelection(c)),d&&(e.preventDefault(),t.stop())}_handleArrowKeyPressOnSelectedWidget(t){let e=this.editor.model,n=Pe(e.document.selection);return e.change(o=>n?n!==(t?"after":"before")?(o.removeSelectionAttribute(ve),!0):!1:(o.setSelectionAttribute(ve,t?"after":"before"),!0))}_handleArrowKeyPressWhenSelectionNextToAWidget(t){let e=this.editor,n=e.model,o=n.schema,r=e.plugins.get("Widget"),s=r._getObjectElementNextToSelection(t);return!!tn(e.editing.mapper.toViewElement(s),s,o)&&(n.change(a=>{r._setSelectionOverElement(s),a.setSelectionAttribute(ve,t?"before":"after")}),!0)}_handleArrowKeyPressWhenNonCollapsedSelection(t){let e=this.editor,n=e.model,o=n.schema,r=e.editing.mapper,s=n.document.selection,a=t?s.getLastPosition().nodeBefore:s.getFirstPosition().nodeAfter;return!!tn(r.toViewElement(a),a,o)&&(n.change(c=>{c.setSelection(a,"on"),c.setSelectionAttribute(ve,t?"after":"before")}),!0)}_enableInsertingParagraphsOnButtonClick(){let t=this.editor,e=t.editing.view;this._listenToIfEnabled(e.document,"mousedown",(n,o)=>{let r=o.domTarget.closest(".ck-widget__type-around__button");if(!r)return;let s=function(l){return l.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(r),a=function(l,d){let h=l.closest(".ck-widget");return d.mapDomToView(h)}(r,e.domConverter),c=t.editing.mapper.toModelElement(a);this._insertParagraph(c,s),o.preventDefault(),n.stop()})}_enableInsertingParagraphsOnEnterKeypress(){let t=this.editor,e=t.model.document.selection,n=t.editing.view;this._listenToIfEnabled(n.document,"enter",(o,r)=>{if(o.eventPhase!="atTarget")return;let s=e.getSelectedElement(),a=t.editing.mapper.toViewElement(s),c=t.model.schema,l;this._insertParagraphAccordingToFakeCaretPosition()?l=!0:tn(a,s,c)&&(this._insertParagraph(s,r.isSoft?"before":"after"),l=!0),l&&(r.preventDefault(),o.stop())},{context:pt})}_enableInsertingParagraphsOnTypingKeystroke(){let t=this.editor.editing.view.document;this._listenToIfEnabled(t,"insertText",(e,n)=>{this._insertParagraphAccordingToFakeCaretPosition()&&(n.selection=t.selection)},{priority:"high"}),f.isAndroid?this._listenToIfEnabled(t,"keydown",(e,n)=>{n.keyCode==229&&this._insertParagraphAccordingToFakeCaretPosition()}):this._listenToIfEnabled(t,"compositionstart",()=>{this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){let t=this.editor,e=t.editing.view,n=t.model,o=n.schema;this._listenToIfEnabled(e.document,"delete",(r,s)=>{if(r.eventPhase!="atTarget")return;let a=Pe(n.document.selection);if(!a)return;let c=s.direction,l=n.document.selection.getSelectedElement(),d=c=="forward";if(a==="before"===d)t.execute("delete",{selection:n.createSelection(l,"on")});else{let h=o.getNearestSelectionRange(n.createPositionAt(l,a),c);if(h)if(h.isCollapsed){let u=n.createSelection(h.start);if(n.modifySelection(u,{direction:c}),u.focus.isEqual(h.start)){let g=function(m,p){let k=p;for(let b of p.getAncestors({parentFirst:!0})){if(b.childCount>1||m.isLimit(b))break;k=b}return k}(o,h.start.parent);n.deleteContent(n.createSelection(g,"on"),{doNotAutoparagraph:!0})}else n.change(g=>{g.setSelection(h),t.execute(d?"deleteForward":"delete")})}else n.change(u=>{u.setSelection(h),t.execute(d?"deleteForward":"delete")})}s.preventDefault(),r.stop()},{context:pt})}_enableInsertContentIntegration(){let t=this.editor,e=this.editor.model,n=e.document.selection;this._listenToIfEnabled(t.model,"insertContent",(o,[r,s])=>{if(s&&!s.is("documentSelection"))return;let a=Pe(n);return a?(o.stop(),e.change(c=>{let l=n.getSelectedElement(),d=e.createPositionAt(l,a),h=c.createSelection(d),u=e.insertContent(r,h);return c.setSelection(h),u})):void 0},{priority:"high"})}_enableInsertObjectIntegration(){let t=this.editor,e=this.editor.model.document.selection;this._listenToIfEnabled(t.model,"insertObject",(n,o)=>{let[,r,,s={}]=o;if(r&&!r.is("documentSelection"))return;let a=Pe(e);a&&(s.findOptimalPosition=a,o[3]=s)},{priority:"high"})}_enableDeleteContentIntegration(){let t=this.editor,e=this.editor.model.document.selection;this._listenToIfEnabled(t.model,"deleteContent",(n,[o])=>{o&&!o.is("documentSelection")||Pe(e)&&n.stop()},{priority:"high"})}}function Iw(i){let t=i.model;return(e,n)=>{let o=n.keyCode==W.arrowup,r=n.keyCode==W.arrowdown,s=n.shiftKey,a=t.document.selection;if(!o&&!r)return;let c=r;if(s&&function(d,h){return!d.isCollapsed&&d.isBackward==h}(a,c))return;let l=function(d,h,u){let g=d.model;if(u){let m=h.isCollapsed?h.focus:h.getLastPosition(),p=Wd(g,m,"forward");if(!p)return null;let k=g.createRange(m,p),b=qd(g.schema,k,"backward");return b?g.createRange(m,b):null}{let m=h.isCollapsed?h.focus:h.getFirstPosition(),p=Wd(g,m,"backward");if(!p)return null;let k=g.createRange(p,m),b=qd(g.schema,k,"forward");return b?g.createRange(b,m):null}}(i,a,c);if(l){if(l.isCollapsed&&(a.isCollapsed||s))return;(l.isCollapsed||function(d,h,u){let g=d.model,m=d.view.domConverter;if(u){let y=g.createSelection(h.start);g.modifySelection(y),y.focus.isAtEnd||h.start.isEqual(y.focus)||(h=g.createRange(y.focus,h.end))}let p=d.mapper.toViewRange(h),k=m.viewRangeToDom(p),b=kt.getDomRangeRects(k),A;for(let y of b)if(A!==void 0){if(Math.round(y.top)>=A)return!1;A=Math.max(A,Math.round(y.bottom))}else A=Math.round(y.bottom);return!0}(i,l,c))&&(t.change(d=>{let h=c?l.end:l.start;if(s){let u=t.createSelection(a.anchor);u.setFocus(h),d.setSelection(u)}else d.setSelection(h)}),e.stop(),n.preventDefault(),n.stopPropagation())}}}function Wd(i,t,e){let n=i.schema,o=i.createRangeIn(t.root),r=e=="forward"?"elementStart":"elementEnd";for(let{previousPosition:s,item:a,type:c}of o.getWalker({startPosition:t,direction:e})){if(n.isLimit(a)&&!n.isInline(a))return s;if(c==r&&n.isBlock(a))return null}return null}function qd(i,t,e){let n=e=="backward"?t.end:t.start;if(i.checkChild(n,"$text"))return n;for(let{nextPosition:o}of t.getWalker({direction:e}))if(i.checkChild(o,"$text"))return o;return null}var Gd=P(3488),Tw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Gd.Z,Tw),Gd.Z.locals;class ho extends S{static get pluginName(){return"Widget"}static get requires(){return[Dw,Be]}init(){let t=this.editor,e=t.editing.view,n=e.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(o,r,s)=>{let a=s.writer,c=r.selection;if(c.isCollapsed)return;let l=c.getSelectedElement();if(!l)return;let d=t.editing.mapper.toViewElement(l);var h;pt(d)&&s.consumable.consume(c,"selection")&&a.setSelection(a.createRangeOn(d),{fake:!0,label:(h=d,h.getCustomProperty("widgetLabel").reduce((u,g)=>typeof g=="function"?u?u+". "+g():g():u?u+". "+g:g,""))})}),this.editor.editing.downcastDispatcher.on("selection",(o,r,s)=>{this._clearPreviouslySelectedWidgets(s.writer);let a=s.writer,c=a.document.selection,l=null;for(let d of c.getRanges())for(let h of d){let u=h.item;pt(u)&&!Mw(u,l)&&(a.addClass(Od,u),this._previouslySelected.add(u),l=u)}},{priority:"low"}),e.addObserver(fr),this.listenTo(n,"mousedown",(...o)=>this._onMousedown(...o)),this.listenTo(n,"arrowKey",(...o)=>{this._handleSelectionChangeOnArrowKeyPress(...o)},{context:[pt,"$text"]}),this.listenTo(n,"arrowKey",(...o)=>{this._preventDefaultOnArrowKeyPress(...o)},{context:"$root"}),this.listenTo(n,"arrowKey",Iw(this.editor.editing),{context:"$text"}),this.listenTo(n,"delete",(o,r)=>{this._handleDelete(r.direction=="forward")&&(r.preventDefault(),o.stop())},{context:"$root"})}_onMousedown(t,e){let n=this.editor,o=n.editing.view,r=o.document,s=e.target;if(function(c){let l=c;for(;l;){if(l.is("editableElement")&&!l.is("rootElement"))return!0;if(pt(l))return!1;l=l.parent}return!1}(s)){if((f.isSafari||f.isGecko)&&e.domEvent.detail>=3){let c=n.editing.mapper,l=s.is("attributeElement")?s.findAncestor(h=>!h.is("attributeElement")):s,d=c.toModelElement(l);e.preventDefault(),this.editor.model.change(h=>{h.setSelection(d,"in")})}return}if(!pt(s)&&(s=s.findAncestor(pt),!s))return;f.isAndroid&&e.preventDefault(),r.isFocused||o.focus();let a=n.editing.mapper.toModelElement(s);this._setSelectionOverElement(a)}_handleSelectionChangeOnArrowKeyPress(t,e){let n=e.keyCode,o=this.editor.model,r=o.schema,s=o.document.selection,a=s.getSelectedElement(),c=Oi(n,this.editor.locale.contentLanguageDirection),l=c=="down"||c=="right",d=c=="up"||c=="down";if(a&&r.isObject(a)){let u=l?s.getLastPosition():s.getFirstPosition(),g=r.getNearestSelectionRange(u,l?"forward":"backward");return void(g&&(o.change(m=>{m.setSelection(g)}),e.preventDefault(),t.stop()))}if(!s.isCollapsed&&!e.shiftKey){let u=s.getFirstPosition(),g=s.getLastPosition(),m=u.nodeAfter,p=g.nodeBefore;return void((m&&r.isObject(m)||p&&r.isObject(p))&&(o.change(k=>{k.setSelection(l?g:u)}),e.preventDefault(),t.stop()))}if(!s.isCollapsed)return;let h=this._getObjectElementNextToSelection(l);if(h&&r.isObject(h)){if(r.isInline(h)&&d)return;this._setSelectionOverElement(h),e.preventDefault(),t.stop()}}_preventDefaultOnArrowKeyPress(t,e){let n=this.editor.model,o=n.schema,r=n.document.selection.getSelectedElement();r&&o.isObject(r)&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;let e=this.editor.model.document.selection;if(!e.isCollapsed)return;let n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(o=>{let r=e.anchor.parent;for(;r.isEmpty;){let s=r;r=s.parent,o.remove(s)}this._setSelectionOverElement(n)}),!0):void 0}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){let e=this.editor.model,n=e.schema,o=e.document.selection,r=e.createSelection(o);if(e.modifySelection(r,{direction:t?"forward":"backward"}),r.isEqual(o))return null;let s=t?r.focus.nodeBefore:r.focus.nodeAfter;return s&&n.isObject(s)?s:null}_clearPreviouslySelectedWidgets(t){for(let e of this._previouslySelected)t.removeClass(Od,e);this._previouslySelected.clear()}}function Mw(i,t){return!!t&&Array.from(i.getAncestors()).includes(t)}class ei extends S{static get requires(){return[Ko]}static get pluginName(){return"WidgetToolbarRepository"}init(){let t=this.editor;if(t.plugins.has("BalloonToolbar")){let e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",n=>{(function(o){let r=o.getSelectedElement();return!(!r||!pt(r))})(t.editing.view.document.selection)&&n.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(let t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{ariaLabel:e,items:n,getRelatedElement:o,balloonClassName:r="ck-toolbar-container"}){if(!n.length)return void at("widget-toolbar-no-items",{toolbarId:t});let s=this.editor,a=s.t,c=new Ir(s.locale);if(c.ariaLabel=e||a("Widget toolbar"),this._toolbarDefinitions.has(t))throw new w("widget-toolbar-duplicated",this,{toolbarId:t});c.fillFromConfig(n,s.ui.componentFactory);let l={view:c,getRelatedElement:o,balloonClassName:r};s.ui.addToolbar(c,{isContextual:!0,beforeFocus:()=>{let d=o(s.editing.view.document.selection);d&&this._showToolbar(l,d)},afterBlur:()=>{this._hideToolbar(l)}}),this._toolbarDefinitions.set(t,l)}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(let o of this._toolbarDefinitions.values()){let r=o.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&r)if(this.editor.ui.focusTracker.isFocused){let s=r.getAncestors().length;s>t&&(t=s,e=r,n=o)}else this._isToolbarVisible(o)&&this._hideToolbar(o);else this._isToolbarInBalloon(o)&&this._hideToolbar(o)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._balloon.remove(t.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(t,e){this._isToolbarVisible(t)?$d(this.editor,e):this._isToolbarInBalloon(t)||(this._balloon.add({view:t.view,position:Yd(this.editor,e),balloonClassName:t.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(let n of this._toolbarDefinitions.values())if(this._isToolbarVisible(n)){let o=n.getRelatedElement(this.editor.editing.view.document.selection);$d(this.editor,o)}}))}_isToolbarVisible(t){return this._balloon.visibleView===t.view}_isToolbarInBalloon(t){return this._balloon.hasView(t.view)}}function $d(i,t){let e=i.plugins.get("ContextualBalloon"),n=Yd(i,t);e.updatePosition(n)}function Yd(i,t){let e=i.editing.view,n=Ot.defaultPositions;return{target:e.domConverter.mapViewToDom(t),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,n.viewportStickyNorth]}}class o0 extends J(){constructor(t){super(),this.set("activeHandlePosition",null),this.set("proposedWidthPercents",null),this.set("proposedWidth",null),this.set("proposedHeight",null),this.set("proposedHandleHostWidth",null),this.set("proposedHandleHostHeight",null),this._options=t,this._referenceCoordinates=null}get originalWidth(){return this._originalWidth}get originalHeight(){return this._originalHeight}get originalWidthPercents(){return this._originalWidthPercents}get aspectRatio(){return this._aspectRatio}begin(t,e,n){let o=new Rect(e);this.activeHandlePosition=function(s){let a=["top-left","top-right","bottom-right","bottom-left"];for(let c of a)if(s.classList.contains(getResizerHandleClass(c)))return c}(t),this._referenceCoordinates=function(s,a){let c=new Rect(s),l=a.split("-"),d={x:l[1]=="right"?c.right:c.left,y:l[0]=="bottom"?c.bottom:c.top};return d.x+=s.ownerDocument.defaultView.scrollX,d.y+=s.ownerDocument.defaultView.scrollY,d}(e,function(s){let a=s.split("-"),c={top:"bottom",bottom:"top",left:"right",right:"left"};return`${c[a[0]]}-${c[a[1]]}`}(this.activeHandlePosition)),this._originalWidth=o.width,this._originalHeight=o.height,this._aspectRatio=o.width/o.height;let r=n.style.width;r&&r.match(/^\d+(\.\d*)?%$/)?this._originalWidthPercents=parseFloat(r):this._originalWidthPercents=function(s,a){let c=s.parentElement,l=parseFloat(c.ownerDocument.defaultView.getComputedStyle(c).width);return a.width/l*100}(n,o)}update(t){this.proposedWidth=t.width,this.proposedHeight=t.height,this.proposedWidthPercents=t.widthPercents,this.proposedHandleHostWidth=t.handleHostWidth,this.proposedHandleHostHeight=t.handleHostHeight}}class i0 extends J(){constructor(t){super(),this._options=t,this._viewResizerWrapper=null,this.set("isEnabled",!0),this.set("isSelected",!1),this.bind("isVisible").to(this,"isEnabled",this,"isSelected",(e,n)=>e&&n),this.decorate("begin"),this.decorate("cancel"),this.decorate("commit"),this.decorate("updateSize"),this.on("commit",e=>{this.state.proposedWidth||this.state.proposedWidthPercents||(this._cleanup(),e.stop())},{priority:"high"})}get state(){return this._state}show(){this._options.editor.editing.view.change(t=>{t.removeClass("ck-hidden",this._viewResizerWrapper)})}hide(){this._options.editor.editing.view.change(t=>{t.addClass("ck-hidden",this._viewResizerWrapper)})}attach(){let t=this,e=this._options.viewElement;this._options.editor.editing.view.change(n=>{let o=n.createUIElement("div",{class:"ck ck-reset_all ck-widget__resizer"},function(r){let s=this.toDomElement(r);return t._appendHandles(s),t._appendSizeUI(s),s});n.insert(n.createPositionAt(e,"end"),o),n.addClass("ck-widget_with-resizer",e),this._viewResizerWrapper=o,this.isVisible||this.hide()}),this.on("change:isVisible",()=>{this.isVisible?(this.show(),this.redraw()):this.hide()})}begin(t){this._state=new ResizeState(this._options),this._sizeView._bindToState(this._options,this.state),this._initialViewWidth=this._options.viewElement.getStyle("width"),this.state.begin(t,this._getHandleHost(),this._getResizeHost())}updateSize(t){let e=this._proposeNewSize(t);this._options.editor.editing.view.change(c=>{let l=this._options.unit||"%",d=(l==="%"?e.widthPercents:e.width)+l;c.setStyle("width",d,this._options.viewElement)});let n=this._getHandleHost(),o=new Rect(n),r=Math.round(o.width),s=Math.round(o.height),a=new Rect(n);e.width=Math.round(a.width),e.height=Math.round(a.height),this.redraw(o),this.state.update({...e,handleHostWidth:r,handleHostHeight:s})}commit(){let t=this._options.unit||"%",e=(t==="%"?this.state.proposedWidthPercents:this.state.proposedWidth)+t;this._options.editor.editing.view.change(()=>{this._cleanup(),this._options.onCommit(e)})}cancel(){this._cleanup()}destroy(){this.cancel()}redraw(t){let e=this._domResizerWrapper;if(!(e&&n.ownerDocument&&n.ownerDocument.contains(n)))return;var n;let o=e.parentElement,r=this._getHandleHost(),s=this._viewResizerWrapper,a=[s.getStyle("width"),s.getStyle("height"),s.getStyle("left"),s.getStyle("top")],c;if(o.isSameNode(r)){let l=t||new Rect(r);l.width+"",l.height+""}else r.offsetWidth+"",r.offsetHeight+"",r.offsetLeft+"",r.offsetTop+"";compareArrays(a,c)!=="same"&&this._options.editor.editing.view.change(l=>{l.setStyle({width:c[0],height:c[1],left:c[2],top:c[3]},s)})}containsHandle(t){return this._domResizerWrapper.contains(t)}static isResizeHandle(t){return t.classList.contains("ck-widget__resizer__handle")}_cleanup(){this._sizeView._dismiss(),this._options.editor.editing.view.change(t=>{t.setStyle("width",this._initialViewWidth,this._options.viewElement)})}_proposeNewSize(t){let e=this.state,n={x:t.pageX,y:o.pageY};var o;let r=!this._options.isCentered||this._options.isCentered(this),s={x:e._referenceCoordinates.x-(n.x+e.originalWidth),y:n.y-e.originalHeight-e._referenceCoordinates.y};r&&e.activeHandlePosition.endsWith("-right")&&(s.x=n.x-(e._referenceCoordinates.x+e.originalWidth)),r&&(s.x*=2);let a=Math.abs(e.originalWidth+s.x),c=Math.abs(e.originalHeight+s.y);return(a/e.aspectRatio>c?"width":"height")=="width"?a/e.aspectRatio:c*e.aspectRatio,{width:Math.round(a),height:Math.round(c),widthPercents:Math.min(Math.round(e.originalWidthPercents/e.originalWidth*a*100)/100,100)}}_getResizeHost(){let t=this._domResizerWrapper.parentElement;return this._options.getResizeHost(t)}_getHandleHost(){let t=this._domResizerWrapper.parentElement;return this._options.getHandleHost(t)}get _domResizerWrapper(){return this._options.editor.editing.view.domConverter.mapViewToDom(this._viewResizerWrapper)}_appendHandles(t){let e=["top-left","top-right","bottom-right","bottom-left"];for(let o of e)t.appendChild(new Template({tag:"div",attributes:{class:`ck-widget__resizer__handle ck-widget__resizer__handle-${n}`}}).render());var n}_appendSizeUI(t){this._sizeView=new SizeView,this._sizeView.render(),t.appendChild(this._sizeView.element)}}var Kd=P(8506),Sw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Kd.Z,Sw),Kd.Z.locals;let Nw=function(i,t,e){var n=!0,o=!0;if(typeof i!="function")throw new TypeError("Expected a function");return gt(e)&&(n="leading"in e?!!e.leading:n,o="trailing"in e?!!e.trailing:o),Zn(i,t,{leading:n,maxWait:t,trailing:o})};var Qd=P(903),Bw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Qd.Z,Bw),Qd.Z.locals;class Pw extends S{static get pluginName(){return"DragDrop"}static get requires(){return[be,ho]}init(){let t=this.editor,e=t.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=Nw(n=>this._updateDropMarker(n),40),this._removeDropMarkerDelayed=Xd(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=Xd(()=>this._clearDraggableAttributes(),40),e.addObserver(Br),e.addObserver(fr),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(t,"change:isReadOnly",(n,o,r)=>{r?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(n,o,r)=>{r||this._finalizeDragging(!1)}),f.isAndroid&&this.forceDisabled("noAndroidSupport")}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){let t=this.editor,e=t.model,n=e.document,o=t.editing.view,r=o.document;this.listenTo(r,"dragstart",(s,a)=>{let c=n.selection;if(a.target&&a.target.is("editableElement"))return void a.preventDefault();let l=a.target?th(a.target):null;if(l){let u=t.editing.mapper.toModelElement(l);this._draggedRange=oe.fromRange(e.createRangeOn(u)),t.plugins.has("WidgetToolbarRepository")&&t.plugins.get("WidgetToolbarRepository").forceDisabled("dragDrop")}else if(!r.selection.isCollapsed){let u=r.selection.getSelectedElement();u&&pt(u)||(this._draggedRange=oe.fromRange(c.getFirstRange()))}if(!this._draggedRange)return void a.preventDefault();this._draggingUid=Nt(),a.dataTransfer.effectAllowed=this.isEnabled?"copyMove":"copy",a.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);let d=e.createSelection(this._draggedRange.toRange()),h=t.data.toView(e.getSelectedContent(d));r.fire("clipboardOutput",{dataTransfer:a.dataTransfer,content:h,method:"dragstart"}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(r,"dragend",(s,a)=>{this._finalizeDragging(!a.dataTransfer.isCanceled&&a.dataTransfer.dropEffect=="move")},{priority:"low"}),this.listenTo(r,"dragenter",()=>{this.isEnabled&&o.focus()}),this.listenTo(r,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(r,"dragging",(s,a)=>{if(!this.isEnabled)return void(a.dataTransfer.dropEffect="none");this._removeDropMarkerDelayed.cancel();let c=Zd(t,a.targetRanges,a.target);this._draggedRange||(a.dataTransfer.dropEffect="copy"),f.isGecko||(a.dataTransfer.effectAllowed=="copy"?a.dataTransfer.dropEffect="copy":["all","copyMove"].includes(a.dataTransfer.effectAllowed)&&(a.dataTransfer.dropEffect="move")),c&&this._updateDropMarkerThrottled(c)},{priority:"low"})}_setupClipboardInputIntegration(){let t=this.editor,e=t.editing.view.document;this.listenTo(e,"clipboardInput",(n,o)=>{if(o.method!="drop")return;let r=Zd(t,o.targetRanges,o.target);if(this._removeDropMarker(),!r)return this._finalizeDragging(!1),void n.stop();if(this._draggedRange&&this._draggingUid!=o.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=""),Jd(o.dataTransfer)=="move"&&this._draggedRange&&this._draggedRange.containsRange(r,!0))return this._finalizeDragging(!1),void n.stop();o.targetRanges=[t.editing.mapper.toViewRange(r)]},{priority:"high"})}_setupContentInsertionIntegration(){let t=this.editor.plugins.get(be);t.on("contentInsertion",(e,n)=>{if(!this.isEnabled||n.method!=="drop")return;let o=n.targetRanges.map(r=>this.editor.editing.mapper.toModelRange(r));this.editor.model.change(r=>r.setSelection(o))},{priority:"high"}),t.on("contentInsertion",(e,n)=>{if(!this.isEnabled||n.method!=="drop")return;let o=Jd(n.dataTransfer)=="move",r=!n.resultRange||!n.resultRange.isCollapsed;this._finalizeDragging(r&&o)},{priority:"lowest"})}_setupDraggableAttributeHandling(){let t=this.editor,e=t.editing.view,n=e.document;this.listenTo(n,"mousedown",(o,r)=>{if(f.isAndroid||!r)return;this._clearDraggableAttributesDelayed.cancel();let s=th(r.target);if(f.isBlink&&!t.isReadOnly&&!s&&!n.selection.isCollapsed){let a=n.selection.getSelectedElement();a&&pt(a)||(s=n.selection.editableElement)}s&&(e.change(a=>{a.setAttribute("draggable","true",s)}),this._draggableElement=t.editing.mapper.toModelElement(s))}),this.listenTo(n,"mouseup",()=>{f.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){let t=this.editor.editing;t.view.change(e=>{this._draggableElement&&this._draggableElement.root.rootName!="$graveyard"&&e.removeAttribute("draggable",t.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){let t=this.editor;t.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),t.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(e,{writer:n})=>{if(t.model.schema.checkChild(e.markerRange.start,"$text"))return n.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},function(o){let r=this.toDomElement(o);return r.append("\u2060",o.createElement("span"),"\u2060"),r})}})}_updateDropMarker(t){let e=this.editor,n=e.model.markers;e.model.change(o=>{n.has("drop-target")?n.get("drop-target").getRange().isEqual(t)||o.updateMarker("drop-target",{range:t}):o.addMarker("drop-target",{range:t,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){let t=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),t.markers.has("drop-target")&&t.change(e=>{e.removeMarker("drop-target")})}_finalizeDragging(t){let e=this.editor,n=e.model;this._removeDropMarker(),this._clearDraggableAttributes(),e.plugins.has("WidgetToolbarRepository")&&e.plugins.get("WidgetToolbarRepository").clearForceDisabled("dragDrop"),this._draggingUid="",this._draggedRange&&(t&&this.isEnabled&&n.deleteContent(n.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function Zd(i,t,e){let n=i.model,o=i.editing.mapper,r=null,s=t?t[0].start:null;if(e.is("uiElement")&&(e=e.parent),r=function(l,d){let h=l.model,u=l.editing.mapper;if(pt(d))return h.createRangeOn(u.toModelElement(d));if(!d.is("editableElement")){let g=d.findAncestor(m=>pt(m)||m.is("editableElement"));if(pt(g))return h.createRangeOn(u.toModelElement(g))}return null}(i,e),r)return r;let a=function(l,d){let h=l.editing.mapper,u=l.editing.view,g=h.toModelElement(d);if(g)return g;let m=u.createPositionBefore(d),p=h.findMappedViewAncestor(m);return h.toModelElement(p)}(i,e),c=s?o.toModelPosition(s):null;return c?(r=function(l,d,h){let u=l.model;if(!u.schema.checkChild(h,"$block"))return null;let g=u.createPositionAt(h,0),m=d.path.slice(0,g.path.length),p=u.createPositionFromPath(d.root,m),k=p.nodeAfter;return k&&u.schema.isObject(k)?u.createRangeOn(k):null}(i,c,a),r||(r=n.schema.getNearestSelectionRange(c,f.isGecko?"forward":"backward"),r||function(l,d){let h=l.model,u=d;for(;u;){if(h.schema.isObject(u))return h.createRangeOn(u);u=u.parent}return null}(i,c.parent))):function(l,d){let h=l.model,u=h.schema,g=h.createPositionAt(d,0);return u.getNearestSelectionRange(g,"forward")}(i,a)}function Jd(i){return f.isGecko?i.dropEffect:["all","copyMove"].includes(i.effectAllowed)?"move":"copy"}function Xd(i,t){let e;function n(...o){n.cancel(),e=setTimeout(()=>i(...o),t)}return n.cancel=()=>{clearTimeout(e)},n}function th(i){if(i.is("editableElement"))return null;if(i.hasClass("ck-widget__selection-handle"))return i.findAncestor(pt);if(pt(i))return i;let t=i.findAncestor(e=>pt(e)||e.is("editableElement"));return pt(t)?t:null}class zw extends S{static get pluginName(){return"PastePlainText"}static get requires(){return[be]}init(){let t=this.editor,e=t.model,n=t.editing.view,o=n.document,r=e.document.selection,s=!1;n.addObserver(Br),this.listenTo(o,"keydown",(a,c)=>{s=c.shiftKey}),t.plugins.get(be).on("contentInsertion",(a,c)=>{(s||function(l,d){if(l.childCount>1)return!1;let h=l.getChild(0);return d.isObject(h)?!1:Array.from(h.getAttributeKeys()).length==0}(c.content,e.schema))&&e.change(l=>{let d=Array.from(r.getAttributes()).filter(([u])=>e.schema.getAttributeProperties(u).isFormatting);r.isCollapsed||e.deleteContent(r,{doNotAutoparagraph:!0}),d.push(...r.getAttributes());let h=l.createRangeIn(c.content);for(let u of h.getItems())u.is("$textProxy")&&l.setAttributes(d,u)})})}}class eh extends S{static get pluginName(){return"Clipboard"}static get requires(){return[be,Pw,zw]}}class Lw extends U{constructor(t){super(t),this.affectsData=!1}execute(){let t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);if(e.containsEntireContent(n)||!nh(t.schema,n))do if(n=n.parent,!n)return;while(!nh(t.schema,n));t.change(o=>{o.setSelection(n,"in")})}}function nh(i,t){return i.isLimit(t)&&(i.checkChild(t,"$text")||i.checkChild(t,"paragraph"))}let Ow=Li("Ctrl+A");class Rw extends S{static get pluginName(){return"SelectAllEditing"}init(){let t=this.editor,e=t.editing.view.document;t.commands.add("selectAll",new Lw(t)),this.listenTo(e,"keydown",(n,o)=>{pn(o)===Ow&&(t.execute("selectAll"),o.preventDefault())})}}class jw extends S{static get pluginName(){return"SelectAllUI"}init(){let t=this.editor;t.ui.componentFactory.add("selectAll",e=>{let n=t.commands.get("selectAll"),o=new st(e),r=e.t;return o.set({label:r("Select all"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),o.bind("isEnabled").to(n,"isEnabled"),this.listenTo(o,"execute",()=>{t.execute("selectAll"),t.editing.view.focus()}),o})}}class Fw extends S{static get requires(){return[Rw,jw]}static get pluginName(){return"SelectAll"}}class oh extends U{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(t.data,"set",(e,n)=>{n[1]={...n[1]};let o=n[1];o.batchType||(o.batchType={isUndoable:!1})},{priority:"high"}),this.listenTo(t.data,"set",(e,n)=>{n[1].batchType.isUndoable||this.clearStack()})}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){let e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){let o=this.editor.model,r=o.document,s=[],a=t.map(l=>l.getTransformedByOperations(n)),c=a.flat();for(let l of a){let d=l.filter(h=>h.root!=r.graveyard).filter(h=>!Uw(h,c));d.length&&(Vw(d),s.push(d[0]))}s.length&&o.change(l=>{l.setSelection(s,{backward:e})})}_undo(t,e){let n=this.editor.model,o=n.document;this._createdBatches.add(e);let r=t.operations.slice().filter(s=>s.isDocumentOperation);r.reverse();for(let s of r){let a=s.baseVersion+1,c=Array.from(o.history.getOperations(a)),l=zk([s.getReversed()],c,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(let d of l)e.addOperation(d),n.applyOperation(d),o.history.setOperationAsUndone(s,d)}}}function Vw(i){i.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<i.length;t++){let e=i[t-1].getJoined(i[t],!0);e&&(t--,i.splice(t,2,e))}}function Uw(i,t){return t.some(e=>e!==i&&e.containsRange(i,!0))}class Hw extends oh{execute(t=null){let e=t?this._stack.findIndex(r=>r.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],o=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(o,()=>{this._undo(n.batch,o);let r=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,r),this.fire("revert",n.batch,o)}),this.refresh()}}class Ww extends oh{execute(){let t=this._stack.pop(),e=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(e,()=>{let n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,o=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,o),this._undo(t.batch,e)}),this.refresh()}}class qw extends S{static get pluginName(){return"UndoEditing"}constructor(t){super(t),this._batchRegistry=new WeakSet}init(){let t=this.editor;this._undoCommand=new Hw(t),this._redoCommand=new Ww(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(e,n)=>{let o=n[0];if(!o.isDocumentOperation)return;let r=o.batch,s=this._redoCommand._createdBatches.has(r),a=this._undoCommand._createdBatches.has(r);this._batchRegistry.has(r)||(this._batchRegistry.add(r),r.isUndoable&&(s?this._undoCommand.addBatch(r):a||(this._undoCommand.addBatch(r),this._redoCommand.clearStack())))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(e,n,o)=>{this._redoCommand.addBatch(o)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}let ih='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',rh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class Gw extends S{static get pluginName(){return"UndoUI"}init(){let t=this.editor,e=t.locale,n=t.t,o=e.uiLanguageDirection=="ltr"?ih:rh,r=e.uiLanguageDirection=="ltr"?rh:ih;this._addButton("undo",n("Undo"),"CTRL+Z",o),this._addButton("redo",n("Redo"),"CTRL+Y",r)}_addButton(t,e,n,o){let r=this.editor;r.ui.componentFactory.add(t,s=>{let a=r.commands.get(t),c=new st(s);return c.set({label:e,icon:o,keystroke:n,tooltip:!0}),c.bind("isEnabled").to(a,"isEnabled"),this.listenTo(c,"execute",()=>{r.execute(t),r.editing.view.focus()}),c})}}class sh extends S{static get requires(){return[qw,Gw]}static get pluginName(){return"Undo"}}class $w extends J(){constructor(){super();let t=new window.FileReader;this._reader=t,this._data=void 0,this.set("loaded",0),t.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(t){let e=this._reader;return this.total=t.size,new Promise((n,o)=>{e.onload=()=>{let r=e.result;this._data=r,n(r)},e.onerror=()=>{o("error")},e.onabort=()=>{o("aborted")},this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}class se extends S{static get pluginName(){return"FileRepository"}static get requires(){return[Vl]}init(){this.loaders=new ee,this.loaders.on("change",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return at("filerepository-no-upload-adapter"),null;let e=new ah(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(n=>{this._loadersMap.set(n,e)}).catch(()=>{}),e.on("change:uploaded",()=>{let n=0;for(let o of this.loaders)n+=o.uploaded;this.uploaded=n}),e.on("change:uploadTotal",()=>{let n=0;for(let o of this.loaders)o.uploadTotal&&(n+=o.uploadTotal);this.uploadTotal=n}),e}destroyLoader(t){let e=t instanceof ah?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((n,o)=>{n===e&&this._loadersMap.delete(o)})}_updatePendingAction(){let t=this.editor.plugins.get(Vl);if(this.loaders.length){if(!this._pendingAction){let e=this.editor.t,n=o=>`${e("Upload in progress")} ${parseInt(o)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}class ah extends J(){constructor(t,e){super(),this.id=Nt(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new $w,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(n,o)=>o?n/o*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if(this.status!="idle")throw new w("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(t=>this._reader.read(t)).then(t=>{if(this.status!=="reading")throw this.status;return this.status="idle",t}).catch(t=>{throw t==="aborted"?(this.status="aborted","aborted"):(this.status="error",this._reader.error?this._reader.error:t)})}upload(){if(this.status!="idle")throw new w("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{throw this.status==="aborted"?"aborted":(this.status="error",t)})}abort(){let t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?t=="reading"?this._reader.abort():t=="uploading"&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){let e={};return e.promise=new Promise((n,o)=>{e.rejecter=o,e.isFulfilled=!1,t.then(r=>{e.isFulfilled=!0,n(r)}).catch(r=>{e.isFulfilled=!0,o(r)})}),e}}class Yw extends H{constructor(t){super(t),this.buttonView=new st(t),this._fileInputView=new Kw(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class Kw extends H{constructor(t){super(t),this.set("acceptedType",void 0),this.set("allowMultipleFiles",!1);let e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}let ch="ckCsrfToken",lh="abcdefghijklmnopqrstuvwxyz0123456789";function Qw(){let i=function(n){n=n.toLowerCase();let o=document.cookie.split(";");for(let r of o){let s=r.split("=");if(decodeURIComponent(s[0].trim().toLowerCase())===n)return decodeURIComponent(s[1])}return null}(ch);var t,e;return i&&i.length==40||(i=function(n){let o="",r=new Uint8Array(n);window.crypto.getRandomValues(r);for(let s=0;s<r.length;s++){let a=lh.charAt(r[s]%lh.length);o+=Math.random()>.5?a.toUpperCase():a}return o}(40),t=ch,e=i,document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"),i}class Zw{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return this.loader.file.then(t=>new Promise((e,n)=>{this._initRequest(),this._initListeners(e,n,t),this._sendRequest(t)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){let t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e,n){let o=this.xhr,r=this.loader,s=(0,this.t)("Cannot upload file:")+` ${n.name}.`;o.addEventListener("error",()=>e(s)),o.addEventListener("abort",()=>e()),o.addEventListener("load",()=>{let a=o.response;if(!a||!a.uploaded)return e(a&&a.error&&a.error.message?a.error.message:s);t({default:a.url})}),o.upload&&o.upload.addEventListener("progress",a=>{a.lengthComputable&&(r.uploadTotal=a.total,r.uploaded=a.loaded)})}_sendRequest(t){let e=new FormData;e.append("upload",t),e.append("ckCsrfToken",Qw()),this.xhr.send(e)}}function ze(i,t,e,n){let o,r=null;typeof n=="function"?o=n:(r=i.commands.get(n),o=()=>{i.execute(n)}),i.model.document.on("change:data",(s,a)=>{if(r&&!r.isEnabled||!t.isEnabled)return;let c=vt(i.model.document.selection.getRanges());if(!c.isCollapsed||a.isUndo||!a.isLocal)return;let l=Array.from(i.model.document.differ.getChanges()),d=l[0];if(l.length!=1||d.type!=="insert"||d.name!="$text"||d.length!=1)return;let h=d.position.parent;if(h.is("element","codeBlock")||h.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||r&&r.value===!0)return;let u=h.getChild(0),g=i.model.createRangeOn(u);if(!g.containsRange(c)&&!c.end.isEqual(g.end))return;let m=e.exec(u.data.substr(0,c.end.offset));m&&i.model.enqueueChange(p=>{let k=p.createPositionAt(h,0),b=p.createPositionAt(h,m[0].length),A=new oe(k,b);if(o({match:m})!==!1){p.remove(A);let y=i.model.document.selection.getFirstRange(),N=p.createRangeIn(h);!h.isEmpty||N.isEqual(y)||N.containsRange(y,!0)||p.remove(h)}A.detach(),i.model.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})})})}function Tn(i,t,e,n){let o,r;e instanceof RegExp?o=e:r=e,r=r||(s=>{let a,c=[],l=[];for(;(a=o.exec(s))!==null&&!(a&&a.length<4);){let{index:d,1:h,2:u,3:g}=a,m=h+u+g;d+=a[0].length-m.length;let p=[d,d+h.length],k=[d+h.length+u.length,d+h.length+u.length+g.length];c.push(p),c.push(k),l.push([d+h.length,d+h.length+u.length])}return{remove:c,format:l}}),i.model.document.on("change:data",(s,a)=>{if(a.isUndo||!a.isLocal||!t.isEnabled)return;let c=i.model,l=c.document.selection;if(!l.isCollapsed)return;let d=Array.from(c.document.differ.getChanges()),h=d[0];if(d.length!=1||h.type!=="insert"||h.name!="$text"||h.length!=1)return;let u=l.focus,g=u.parent,{text:m,range:p}=function(y,N){let z=y.start;return{text:Array.from(y.getItems()).reduce((K,yt)=>!yt.is("$text")&&!yt.is("$textProxy")||yt.getAttribute("code")?(z=N.createPositionAfter(yt),""):K+yt.data,""),range:N.createRange(z,y.end)}}(c.createRange(c.createPositionAt(g,0),u),c),k=r(m),b=dh(p.start,k.format,c),A=dh(p.start,k.remove,c);b.length&&A.length&&c.enqueueChange(y=>{if(n(y,b)!==!1){for(let N of A.reverse())y.remove(N);c.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})}})})}function dh(i,t,e){return t.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>e.createRange(i.getShiftedBy(n[0]),i.getShiftedBy(n[1])))}function ni(i,t){return(e,n)=>{if(!i.commands.get(t).isEnabled)return!1;let o=i.model.schema.getValidRanges(n,t);for(let r of o)e.setAttribute(t,!0,r);e.removeSelectionAttribute(t)}}class hh extends U{constructor(t,e){super(t),this.attributeKey=e}refresh(){let t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){let e=this.editor.model,n=e.document.selection,o=t.forceValue===void 0?!this.value:t.forceValue;e.change(r=>{if(n.isCollapsed)o?r.setSelectionAttribute(this.attributeKey,!0):r.removeSelectionAttribute(this.attributeKey);else{let s=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(let a of s)o?r.setAttribute(this.attributeKey,o,a):r.removeAttribute(this.attributeKey,a)}})}_getValueFromFirstAllowedNode(){let t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(let o of n.getRanges())for(let r of o.getItems())if(e.checkAttribute(r,this.attributeKey))return r.hasAttribute(this.attributeKey);return!1}}let Mn="bold";class Jw extends S{static get pluginName(){return"BoldEditing"}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:Mn}),t.model.schema.setAttributeProperties(Mn,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Mn,view:"strong",upcastAlso:["b",e=>{let n=e.getStyle("font-weight");return n?n=="bold"||Number(n)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(Mn,new hh(t,Mn)),t.keystrokes.set("CTRL+B",Mn)}}let jr="bold";class Xw extends S{static get pluginName(){return"BoldUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add(jr,n=>{let o=t.commands.get(jr),r=new st(n);return r.set({label:e("Bold"),icon:wt.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute(jr),t.editing.view.focus()}),r})}}let Sn="italic";class tA extends S{static get pluginName(){return"ItalicEditing"}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:Sn}),t.model.schema.setAttributeProperties(Sn,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Sn,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(Sn,new hh(t,Sn)),t.keystrokes.set("CTRL+I",Sn)}}let Fr="italic";class eA extends S{static get pluginName(){return"ItalicUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add(Fr,n=>{let o=t.commands.get(Fr),r=new st(n);return r.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute(Fr),t.editing.view.focus()}),r})}}class nA extends U{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){let e=this.editor.model,n=e.schema,o=e.document.selection,r=Array.from(o.getSelectedBlocks()),s=t.forceValue===void 0?!this.value:t.forceValue;e.change(a=>{if(s){let c=r.filter(l=>oi(l)||gh(n,l));this._applyQuote(a,c)}else this._removeQuote(a,r.filter(oi))})}_getValue(){let t=vt(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!oi(t))}_checkEnabled(){if(this.value)return!0;let t=this.editor.model.document.selection,e=this.editor.model.schema,n=vt(t.getSelectedBlocks());return!!n&&gh(e,n)}_removeQuote(t,e){uh(t,e).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd)return void t.unwrap(n.start.parent);if(n.start.isAtStart){let r=t.createPositionBefore(n.start.parent);return void t.move(n,r)}n.end.isAtEnd||t.split(n.end);let o=t.createPositionAfter(n.end.parent);t.move(n,o)})}_applyQuote(t,e){let n=[];uh(t,e).reverse().forEach(o=>{let r=oi(o.start);r||(r=t.createElement("blockQuote"),t.wrap(o,r)),n.push(r)}),n.reverse().reduce((o,r)=>o.nextSibling==r?(t.merge(t.createPositionAfter(o)),o):r)}}function oi(i){return i.parent.name=="blockQuote"?i.parent:null}function uh(i,t){let e,n=0,o=[];for(;n<t.length;){let r=t[n],s=t[n+1];e||(e=i.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(i.createRange(e,i.createPositionAfter(r))),e=null),n++}return o}function gh(i,t){let e=i.checkChild(t.parent,"blockQuote"),n=i.checkChild(["$root","blockQuote"],t);return e&&n}class oA extends S{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Xo,Be]}init(){let t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new nA(t)),e.register("blockQuote",{inheritAllFrom:"$container"}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(s=>{let a=t.model.document.differ.getChanges();for(let c of a)if(c.type=="insert"){let l=c.position.nodeAfter;if(!l)continue;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0;if(l.is("element","blockQuote")&&!e.checkChild(c.position,l))return s.unwrap(l),!0;if(l.is("element")){let d=s.createRangeIn(l);for(let h of d.getItems())if(h.is("element","blockQuote")&&!e.checkChild(s.createPositionBefore(h),h))return s.unwrap(h),!0}}else if(c.type=="remove"){let l=c.position.parent;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0}return!1});let n=this.editor.editing.view.document,o=t.model.document.selection,r=t.commands.get("blockQuote");this.listenTo(n,"enter",(s,a)=>{!o.isCollapsed||!r.value||o.getLastPosition().parent.isEmpty&&(t.execute("blockQuote"),t.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(s,a)=>{if(a.direction!="backward"||!o.isCollapsed||!r.value)return;let c=o.getLastPosition().parent;c.isEmpty&&!c.previousSibling&&(t.execute("blockQuote"),t.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"})}}var mh=P(3062),iA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(mh.Z,iA),mh.Z.locals;class rA extends S{static get pluginName(){return"BlockQuoteUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{let o=t.commands.get("blockQuote"),r=new st(n);return r.set({label:e("Block quote"),icon:wt.quote,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute("blockQuote"),t.editing.view.focus()}),r})}}class sA extends S{static get pluginName(){return"CKBoxUI"}afterInit(){let t=this.editor;if(!t.commands.get("ckbox"))return;let e=t.t;t.ui.componentFactory.add("ckbox",n=>{let o=t.commands.get("ckbox"),r=new st(n);return r.set({label:e("Open file manager"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),r.on("execute",()=>{t.execute("ckbox")}),r})}}function ph({token:i,id:t,origin:e,width:n,extension:o}){let r=fh(i),s=function(c){let l=[10*c/100,80],d=Math.floor(Math.max(...l)),h=[Math.min(c,4e3)],u=h[0];for(;u-d>=d;)u-=d,h.unshift(u);return h}(n);return{imageFallbackUrl:kh({environmentId:r,id:t,origin:e,width:n,extension:function(c){return c==="bmp"||c==="tiff"||c==="jpg"?"jpeg":c}(o)}),imageSources:[{srcset:s.map(c=>`${kh({environmentId:r,id:t,origin:e,width:c,extension:"webp"})} ${c}w`).join(","),sizes:`(max-width: ${n}px) 100vw, ${n}px`,type:"image/webp"}]}}function fh(i){let[,t]=i.value.split(".");return JSON.parse(atob(t)).aud}function kh({environmentId:i,id:t,origin:e,width:n,extension:o}){return new URL(`${i}/assets/${t}/images/${n}.${o}`,e).toString()}class aA extends U{constructor(t){super(t),this._chosenAssets=new Set,this._wrapper=null,this._initListeners()}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){this.fire("ckbox:open")}_getValue(){return this._wrapper!==null}_checkEnabled(){let t=this.editor.commands.get("insertImage"),e=this.editor.commands.get("link");return!(!t.isEnabled&&!e.isEnabled)}_prepareOptions(){let t=this.editor.config.get("ckbox");return{theme:t.theme,language:t.language,tokenUrl:t.tokenUrl,serviceOrigin:t.serviceOrigin,assetsOrigin:t.assetsOrigin,dialog:{onClose:()=>this.fire("ckbox:close")},assets:{onChoose:e=>this.fire("ckbox:choose",e)}}}_initListeners(){let t=this.editor,e=t.model,n=!t.config.get("ckbox.ignoreDataId");this.on("ckbox",()=>{this.refresh()},{priority:"low"}),this.on("ckbox:open",()=>{this.isEnabled&&!this.value&&(this._wrapper=xs(document,"div",{class:"ck ckbox-wrapper"}),document.body.appendChild(this._wrapper),window.CKBox.mount(this._wrapper,this._prepareOptions()))}),this.on("ckbox:close",()=>{this.value&&(this._wrapper.remove(),this._wrapper=null)}),this.on("ckbox:choose",(o,r)=>{if(!this.isEnabled)return;let s=t.commands.get("insertImage"),a=t.commands.get("link"),c=t.plugins.get("CKBoxEditing"),l=function({assets:d,origin:h,token:u,isImageAllowed:g,isLinkAllowed:m}){return d.map(p=>({id:p.data.id,type:bh(p)?"image":"link",attributes:cA(p,u,h)})).filter(p=>p.type==="image"?g:m)}({assets:r,origin:t.config.get("ckbox.assetsOrigin"),token:c.getToken(),isImageAllowed:s.isEnabled,isLinkAllowed:a.isEnabled});l.length!==0&&e.change(d=>{for(let h of l){let u=h===l[l.length-1];this._insertAsset(h,u,d),n&&(setTimeout(()=>this._chosenAssets.delete(h),1e3),this._chosenAssets.add(h))}})}),this.listenTo(t,"destroy",()=>{this.fire("ckbox:close"),this._chosenAssets.clear()})}_insertAsset(t,e,n){let o=this.editor.model.document.selection;n.removeSelectionAttribute("linkHref"),t.type==="image"?this._insertImage(t):this._insertLink(t,n),e||n.setSelection(o.getLastPosition())}_insertImage(t){let e=this.editor,{imageFallbackUrl:n,imageSources:o,imageTextAlternative:r}=t.attributes;e.execute("insertImage",{source:{src:n,sources:o,alt:r}})}_insertLink(t,e){let n=this.editor,o=n.model,r=o.document.selection,{linkName:s,linkHref:a}=t.attributes;if(r.isCollapsed){let c=he(r.getAttributes()),l=e.createText(s,c),d=o.insertContent(l);e.setSelection(d)}n.execute("link",a)}}function cA(i,t,e){if(bh(i)){let{imageFallbackUrl:n,imageSources:o}=ph({token:t,origin:e,id:i.data.id,width:i.data.metadata.width,extension:i.data.extension});return{imageFallbackUrl:n,imageSources:o,imageTextAlternative:i.data.metadata.description||""}}return{linkName:i.data.name,linkHref:lA(i,t,e)}}function bh(i){let t=i.data.metadata;return!!t&&t.width&&t.height}function lA(i,t,e){let n=fh(t),o=new URL(`${n}/assets/${i.data.id}/file`,e);return o.searchParams.set("download","true"),o.toString()}class dA extends S{static get requires(){return["ImageUploadEditing","ImageUploadProgress",se,Vr]}static get pluginName(){return"CKBoxUploadAdapter"}async afterInit(){let t=this.editor,e=!!t.config.get("ckbox"),n=!!window.CKBox;if(!e&&!n)return;let o=t.plugins.get(se),r=t.plugins.get(Vr);o.createUploadAdapter=c=>new hA(c,r.getToken(),t);let s=!t.config.get("ckbox.ignoreDataId"),a=t.plugins.get("ImageUploadEditing");s&&a.on("uploadComplete",(c,{imageElement:l,data:d})=>{t.model.change(h=>{h.setAttribute("ckboxImageId",d.ckboxImageId,l)})})}}class hA{constructor(t,e,n){this.loader=t,this.token=e,this.editor=n,this.controller=new AbortController,this.serviceOrigin=n.config.get("ckbox.serviceOrigin"),this.assetsOrigin=n.config.get("ckbox.assetsOrigin")}async getAvailableCategories(t=0){let e=new URL("categories",this.serviceOrigin);return e.searchParams.set("limit","50"),e.searchParams.set("offset",t.toString()),this._sendHttpRequest({url:e}).then(async n=>{if(n.totalCount-(t+50)>0){let o=await this.getAvailableCategories(t+50);return[...n.items,...o]}return n.items}).catch(()=>{this.controller.signal.throwIfAborted(),R("ckbox-fetch-category-http-error")})}async getCategoryIdForFile(t){let e=wh(t.name),n=await this.getAvailableCategories();if(!n)return null;let o=this.editor.config.get("ckbox.defaultUploadCategories");if(o){let s=Object.keys(o).find(a=>o[a].includes(e));if(s){let a=n.find(c=>c.id===s||c.name===s);return a?a.id:null}}let r=n.find(s=>s.extensions.includes(e));return r?r.id:null}async upload(){let t=this.editor.t,e=t("Cannot determine a category for the uploaded file."),n=await this.loader.file,o=await this.getCategoryIdForFile(n);if(!o)return Promise.reject(e);let r=new URL("assets",this.serviceOrigin),s=new FormData;s.append("categoryId",o),s.append("file",n);let a={method:"POST",url:r,data:s,onUploadProgress:c=>{c.lengthComputable&&(this.loader.uploadTotal=c.total,this.loader.uploaded=c.loaded)}};return this._sendHttpRequest(a).then(async c=>{let l=await this._getImageWidth(),d=wh(n.name),h=ph({token:this.token,id:c.id,origin:this.assetsOrigin,width:l,extension:d});return{ckboxImageId:c.id,default:h.imageFallbackUrl,sources:h.imageSources}}).catch(()=>{let c=t("Cannot upload file:")+` ${n.name}.`;return Promise.reject(c)})}abort(){this.controller.abort()}_sendHttpRequest(t){let{url:e,data:n,onUploadProgress:o}=t,r=t.method||"GET",s=this.controller.signal,a=new XMLHttpRequest;a.open(r,e.toString(),!0),a.setRequestHeader("Authorization",this.token.value),a.setRequestHeader("CKBox-Version","CKEditor 5"),a.responseType="json";let c=()=>{a.abort()};return new Promise((l,d)=>{s.addEventListener("abort",c),a.addEventListener("loadstart",()=>{s.addEventListener("abort",c)}),a.addEventListener("loadend",()=>{s.removeEventListener("abort",c)}),a.addEventListener("error",()=>{d()}),a.addEventListener("abort",()=>{d()}),a.addEventListener("load",async()=>{let h=a.response;return!h||h.statusCode>=400?d(h&&h.message):l(h)}),o&&a.upload.addEventListener("progress",h=>{o(h)}),a.send(n)})}_getImageWidth(){return new Promise(t=>{let e=new Image;e.onload=()=>{URL.revokeObjectURL(e.src),t(e.width)},e.src=this.loader.data})}}function wh(i){return i.match(/\.(?<ext>[^.]+)$/).groups.ext}class Vr extends S{static get pluginName(){return"CKBoxEditing"}static get requires(){return["CloudServices","LinkEditing","PictureEditing",dA]}async init(){let t=this.editor,e=!!t.config.get("ckbox"),n=!!window.CKBox;if(!e&&!n)return;this._initConfig();let o=t.plugins.get("CloudServicesCore"),r=t.config.get("ckbox.tokenUrl"),s=t.config.get("cloudServices.tokenUrl");this._token=r===s?t.plugins.get("CloudServices").token:await o.createToken(r).init(),t.config.get("ckbox.ignoreDataId")||(this._initSchema(),this._initConversion(),this._initFixers()),n&&t.commands.add("ckbox",new aA(t))}getToken(){return this._token}_initConfig(){let t=this.editor;if(t.config.define("ckbox",{serviceOrigin:"https://api.ckbox.io",assetsOrigin:"https://ckbox.cloud",defaultUploadCategories:null,ignoreDataId:!1,language:t.locale.uiLanguage,theme:"default",tokenUrl:t.config.get("cloudServices.tokenUrl")}),!t.config.get("ckbox.tokenUrl"))throw new w("ckbox-plugin-missing-token-url",this);t.plugins.has("ImageBlockEditing")||t.plugins.has("ImageInlineEditing")||R("ckbox-plugin-image-feature-missing",t)}_initSchema(){let t=this.editor.model.schema;t.extend("$text",{allowAttributes:"ckboxLinkId"}),t.isRegistered("imageBlock")&&t.extend("imageBlock",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),t.isRegistered("imageInline")&&t.extend("imageInline",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),t.addAttributeCheck((e,n)=>{if(!e.last.getAttribute("linkHref")&&n==="ckboxLinkId")return!1})}_initConversion(){let t=this.editor;t.conversion.for("downcast").add(e=>{e.on("attribute:ckboxLinkId:imageBlock",(n,o,r)=>{let{writer:s,mapper:a,consumable:c}=r;if(!c.consume(o.item,n.name))return;let l=[...a.toViewElement(o.item).getChildren()].find(d=>d.name==="a");l&&(o.item.hasAttribute("ckboxLinkId")?s.setAttribute("data-ckbox-resource-id",o.item.getAttribute("ckboxLinkId"),l):s.removeAttribute("data-ckbox-resource-id",l))},{priority:"low"}),e.on("attribute:ckboxLinkId",(n,o,r)=>{let{writer:s,mapper:a,consumable:c}=r;if(c.consume(o.item,n.name)){if(o.attributeOldValue){let l=Ah(s,o.attributeOldValue);s.unwrap(a.toViewRange(o.range),l)}if(o.attributeNewValue){let l=Ah(s,o.attributeNewValue);if(o.item.is("selection")){let d=s.document.selection;s.wrap(d.getFirstRange(),l)}else s.wrap(a.toViewRange(o.range),l)}}},{priority:"low"})}),t.conversion.for("upcast").add(e=>{e.on("element:a",(n,o,r)=>{let{writer:s,consumable:a}=r;if(!o.viewItem.getAttribute("href")||!a.consume(o.viewItem,{attributes:["data-ckbox-resource-id"]}))return;let c=o.viewItem.getAttribute("data-ckbox-resource-id");if(c)if(o.modelRange)for(let l of o.modelRange.getItems())l.is("$textProxy")&&(l=l.textNode),gA(l)&&s.setAttribute("ckboxLinkId",c,l);else{let l=o.modelCursor.nodeBefore||o.modelCursor.parent;s.setAttribute("ckboxLinkId",c,l)}},{priority:"low"})}),t.conversion.for("downcast").attributeToAttribute({model:"ckboxImageId",view:"data-ckbox-resource-id"}),t.conversion.for("upcast").elementToAttribute({model:{key:"ckboxImageId",value:e=>e.getAttribute("data-ckbox-resource-id")},view:{attributes:{"data-ckbox-resource-id":/[\s\S]+/}}})}_initFixers(){let t=this.editor,e=t.model,n=e.document.selection;e.document.registerPostFixer(function(o){return r=>{let s=!1,a=o.model,c=o.commands.get("ckbox");if(!c)return s;for(let l of a.document.differ.getChanges()){if(l.type!=="insert"&&l.type!=="attribute")continue;let d=l.type==="insert"?new C(l.position,l.position.getShiftedBy(l.length)):l.range,h=l.type==="attribute"&&l.attributeKey==="linkHref"&&l.attributeNewValue===null;for(let u of d.getItems()){if(h&&u.hasAttribute("ckboxLinkId")){r.removeAttribute("ckboxLinkId",u),s=!0;continue}let g=uA(u,c._chosenAssets);for(let m of g){let p=m.type==="image"?"ckboxImageId":"ckboxLinkId";m.id!==u.getAttribute(p)&&(r.setAttribute(p,m.id,u),s=!0)}}}return s}}(t)),e.document.registerPostFixer(function(o){return r=>{!o.hasAttribute("linkHref")&&o.hasAttribute("ckboxLinkId")&&r.removeSelectionAttribute("ckboxLinkId")}}(n))}}function uA(i,t){let e=i.is("element","imageInline")||i.is("element","imageBlock"),n=i.hasAttribute("linkHref");return[...t].filter(o=>o.type==="image"&&e?o.attributes.imageFallbackUrl===i.getAttribute("src"):o.type==="link"&&n?o.attributes.linkHref===i.getAttribute("linkHref"):void 0)}function Ah(i,t){let e=i.createAttributeElement("a",{"data-ckbox-resource-id":t},{priority:5});return i.setCustomProperty("link",!0,e),e}function gA(i){return!!i.is("$text")||!(!i.is("element","imageInline")&&!i.is("element","imageBlock"))}class mA extends S{static get pluginName(){return"CKFinderUI"}init(){let t=this.editor,e=t.ui.componentFactory,n=t.t;e.add("ckfinder",o=>{let r=t.commands.get("ckfinder"),s=new st(o);return s.set({label:n("Insert image or file"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),s.bind("isEnabled").to(r),s.on("execute",()=>{t.execute("ckfinder"),t.editing.view.focus()}),s})}}class pA extends U{constructor(t){super(t),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){let t=this.editor.commands.get("insertImage"),e=this.editor.commands.get("link");this.isEnabled=t.isEnabled||e.isEnabled}execute(){let t=this.editor,e=this.editor.config.get("ckfinder.openerMethod")||"modal";if(e!="popup"&&e!="modal")throw new w("ckfinder-unknown-openermethod",t);let n=this.editor.config.get("ckfinder.options")||{};n.chooseFiles=!0;let o=n.onInit;n.language||(n.language=t.locale.uiLanguage),n.onInit=r=>{o&&o(r),r.on("files:choose",s=>{let a=s.data.files.toArray(),c=a.filter(h=>!h.isImage()),l=a.filter(h=>h.isImage());for(let h of c)t.execute("link",h.getUrl());let d=[];for(let h of l){let u=h.getUrl();d.push(u||r.request("file:getProxyUrl",{file:h}))}d.length&&_h(t,d)}),r.on("file:choose:resizedImage",s=>{let a=s.data.resizedUrl;if(a)_h(t,[a]);else{let c=t.plugins.get("Notification"),l=t.locale.t;c.showWarning(l("Could not obtain resized image URL."),{title:l("Selecting resized image failed"),namespace:"ckfinder"})}})},window.CKFinder[e](n)}}function _h(i,t){if(i.commands.get("insertImage").isEnabled)i.execute("insertImage",{source:t});else{let e=i.plugins.get("Notification"),n=i.locale.t;e.showWarning(n("Could not insert image at the current position."),{title:n("Inserting image failed"),namespace:"ckfinder"})}}class fA extends S{static get pluginName(){return"CKFinderEditing"}static get requires(){return[Nr,"LinkEditing"]}init(){let t=this.editor;if(!t.plugins.has("ImageBlockEditing")&&!t.plugins.has("ImageInlineEditing"))throw new w("ckfinder-missing-image-plugin",t);t.commands.add("ckfinder",new pA(t))}}class kA extends S{static get pluginName(){return"CloudServicesUploadAdapter"}static get requires(){return["CloudServices",se]}init(){let t=this.editor,e=t.plugins.get("CloudServices"),n=e.token,o=e.uploadUrl;n&&(this._uploadGateway=t.plugins.get("CloudServicesCore").createUploadGateway(n,o),t.plugins.get(se).createUploadAdapter=r=>new bA(this._uploadGateway,r))}}class bA{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.loader.file.then(t=>(this.fileUploader=this.uploadGateway.upload(t),this.fileUploader.on("progress",(e,n)=>{this.loader.uploadTotal=n.total,this.loader.uploaded=n.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}class wA extends U{refresh(){let t=this.editor.model,e=vt(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("element","paragraph"),this.isEnabled=!!e&&Ch(e,t.schema)}execute(t={}){let e=this.editor.model,n=e.document;e.change(o=>{let r=(t.selection||n.selection).getSelectedBlocks();for(let s of r)!s.is("element","paragraph")&&Ch(s,e.schema)&&o.rename(s,"paragraph")})}}function Ch(i,t){return t.checkChild(i.parent,"paragraph")&&!t.isObject(i)}class AA extends U{execute(t){let e=this.editor.model,n=t.attributes,o=t.position;e.change(r=>{let s=r.createElement("paragraph");if(n&&e.schema.setAllowedAttributes(s,n,r),!e.schema.checkChild(o.parent,s)){let a=e.schema.findAllowedParent(o,s);if(!a)return;o=r.split(o,a).position}e.insertContent(s,o),r.setSelection(s,"in")})}}class uo extends S{static get pluginName(){return"Paragraph"}init(){let t=this.editor,e=t.model;t.commands.add("paragraph",new wA(t)),t.commands.add("insertParagraph",new AA(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(n,{writer:o})=>uo.paragraphLikeElements.has(n.name)?n.isEmpty?null:o.createElement("paragraph"):null,view:/.+/,converterPriority:"low"})}}uo.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td","th"]);class _A extends U{constructor(t,e){super(t),this.modelElements=e}refresh(){let t=vt(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>vh(t,e,this.editor.model.schema))}execute(t){let e=this.editor.model,n=e.document,o=t.value;e.change(r=>{let s=Array.from(n.selection.getSelectedBlocks()).filter(a=>vh(a,o,e.schema));for(let a of s)a.is("element",o)||r.rename(a,o)})}}function vh(i,t,e){return e.checkChild(i.parent,t)&&!e.isObject(i)}let Ur="paragraph";class CA extends S{static get pluginName(){return"HeadingEditing"}constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[uo]}init(){let t=this.editor,e=t.config.get("heading.options"),n=[];for(let o of e)o.model!==Ur&&(t.model.schema.register(o.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(o),n.push(o.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new _A(t,n))}afterInit(){let t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(o,r)=>{let s=t.model.document.selection.getFirstPosition().parent;n.some(a=>s.is("element",a.model))&&!s.is("element",Ur)&&s.childCount===0&&r.writer.rename(s,Ur)})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:$t.get("low")+1})}}var yh=P(8733),vA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(yh.Z,vA),yh.Z.locals;class yA extends S{static get pluginName(){return"HeadingUI"}init(){let t=this.editor,e=t.t,n=function(s){let a=s.t,c={Paragraph:a("Paragraph"),"Heading 1":a("Heading 1"),"Heading 2":a("Heading 2"),"Heading 3":a("Heading 3"),"Heading 4":a("Heading 4"),"Heading 5":a("Heading 5"),"Heading 6":a("Heading 6")};return s.config.get("heading.options").map(l=>{let d=c[l.title];return d&&d!=l.title&&(l.title=d),l})}(t),o=e("Choose heading"),r=e("Heading");t.ui.componentFactory.add("heading",s=>{let a={},c=new ee,l=t.commands.get("heading"),d=t.commands.get("paragraph"),h=[l];for(let g of n){let m={type:"button",model:new hd({label:g.title,class:g.class,withText:!0})};g.model==="paragraph"?(m.model.bind("isOn").to(d,"value"),m.model.set("commandName","paragraph"),h.push(d)):(m.model.bind("isOn").to(l,"value",p=>p===g.model),m.model.set({commandName:"heading",commandValue:g.model})),c.add(m),a[g.model]=g.title}let u=Se(s);return od(u,c),u.buttonView.set({isOn:!1,withText:!0,tooltip:r}),u.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),u.bind("isEnabled").toMany(h,"isEnabled",(...g)=>g.some(m=>m)),u.buttonView.bind("label").to(l,"value",d,"value",(g,m)=>{let p=g||m&&"paragraph";return a[p]?a[p]:o}),this.listenTo(u,"execute",g=>{t.execute(g.source.commandName,g.source.commandValue?{value:g.source.commandValue}:void 0),t.editing.view.focus()}),u})}}class xA extends U{refresh(){let t=this.editor.plugins.get("ImageUtils").getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!t,this.isEnabled&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){let e=this.editor,n=e.plugins.get("ImageUtils"),o=e.model,r=n.getClosestSelectedImageElement(o.document.selection);o.change(s=>{s.setAttribute("alt",t.newValue,r)})}}function xh(i){return i.createContainerElement("figure",{class:"image"},[i.createEmptyElement("img"),i.createSlot()])}function Eh(i,t){let e=i.plugins.get("ImageUtils"),n=i.plugins.has("ImageInlineEditing")&&i.plugins.has("ImageBlockEditing");return r=>e.isInlineImageView(r)?n&&(r.getStyle("display")=="block"||r.findAncestor(e.isBlockImageView)?"imageBlock":"imageInline")!==t?null:o(r):null;function o(r){let s={name:!0};return r.hasAttribute("src")&&(s.attributes=["src"]),s}}function Hr(i,t){let e=vt(t.getSelectedBlocks());return!e||i.isObject(e)||e.isEmpty&&e.name!="listItem"?"imageBlock":"imageInline"}class ae extends S{static get pluginName(){return"ImageUtils"}isImage(t){return this.isInlineImage(t)||this.isBlockImage(t)}isInlineImageView(t){return!!t&&t.is("element","img")}isBlockImageView(t){return!!t&&t.is("element","figure")&&t.hasClass("image")}insertImage(t={},e=null,n=null){let o=this.editor,r=o.model,s=r.document.selection;n=Dh(o,e||s,n),t={...Object.fromEntries(s.getAttributes()),...t};for(let a in t)r.schema.checkAttribute(n,a)||delete t[a];return r.change(a=>{let c=a.createElement(n,t);return r.insertObject(c,e,null,{setSelection:"on",findOptimalPosition:!e&&n!="imageInline"}),c.parent?c:null})}getClosestSelectedImageWidget(t){let e=t.getFirstPosition();if(!e)return null;let n=t.getSelectedElement();if(n&&this.isImageWidget(n))return n;let o=e.parent;for(;o;){if(o.is("element")&&this.isImageWidget(o))return o;o=o.parent}return null}getClosestSelectedImageElement(t){let e=t.getSelectedElement();return this.isImage(e)?e:t.getFirstPosition().findAncestor("imageBlock")}isImageAllowed(){let t=this.editor.model.document.selection;return function(e,n){if(Dh(e,n)=="imageBlock"){let r=function(s,a){let c=Fd(s,a),l=c.start.parent;return l.isEmpty&&!l.is("element","$root")?l.parent:l}(n,e.model);if(e.model.schema.checkChild(r,"imageBlock"))return!0}else if(e.model.schema.checkChild(n.focus,"imageInline"))return!0;return!1}(this.editor,t)&&function(e){return[...e.focus.getAncestors()].every(n=>!n.is("element","imageBlock"))}(t)}toImageWidget(t,e,n){return e.setCustomProperty("image",!0,t),Rr(t,e,{label:()=>{let o=this.findViewImgElement(t).getAttribute("alt");return o?`${o} ${n}`:n}})}isImageWidget(t){return!!t.getCustomProperty("image")&&pt(t)}isBlockImage(t){return!!t&&t.is("element","imageBlock")}isInlineImage(t){return!!t&&t.is("element","imageInline")}findViewImgElement(t){if(this.isInlineImageView(t))return t;let e=this.editor.editing.view;for(let{item:n}of e.createRangeIn(t))if(this.isInlineImageView(n))return n}}function Dh(i,t,e){let n=i.model.schema,o=i.config.get("image.insert.type");return i.plugins.has("ImageBlockEditing")?i.plugins.has("ImageInlineEditing")?e||(o==="inline"?"imageInline":o==="block"?"imageBlock":t.is("selection")?Hr(n,t):n.checkChild(t,"imageInline")?"imageInline":"imageBlock"):"imageBlock":"imageInline"}class EA extends S{static get requires(){return[ae]}static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new xA(this.editor))}}var Ih=P(1905),DA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Ih.Z,DA),Ih.Z.locals;var Th=P(6764),IA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Th.Z,IA),Th.Z.locals;class TA extends H{constructor(t){super(t);let e=this.locale.t;this.focusTracker=new Kt,this.keystrokes=new de,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("Save"),wt.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("Cancel"),wt.cancel,"ck-button-cancel","cancel"),this._focusables=new Je,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form","ck-responsive-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]}),yr(this)}render(){super.render(),this.keystrokes.listenTo(this.element),xr({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createButton(t,e,n,o){let r=new st(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),o&&r.delegate("execute").to(this,o),r}_createLabeledInputView(){let t=this.locale.t,e=new Mr(this.locale,Sr);return e.label=t("Text alternative"),e}}function Mh(i){let t=i.editing.view,e=Ot.defaultPositions,n=i.plugins.get("ImageUtils");return{target:t.domConverter.mapViewToDom(n.getClosestSelectedImageWidget(t.document.selection)),positions:[e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast,e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.viewportStickyNorth]}}class MA extends S{static get requires(){return[Ko]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){let t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{let o=t.commands.get("imageTextAlternative"),r=new st(n);return r.set({label:e("Change image text alternative"),icon:wt.lowVision,tooltip:!0}),r.bind("isEnabled").to(o,"isEnabled"),r.bind("isOn").to(o,"value",s=>!!s),this.listenTo(r,"execute",()=>{this._showForm()}),r})}_createForm(){let t=this.editor,e=t.editing.view.document,n=t.plugins.get("ImageUtils");this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new TA(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(o,r)=>{this._hideForm(!0),r()}),this.listenTo(t.ui,"update",()=>{n.getClosestSelectedImageWidget(e.selection)?this._isVisible&&function(o){let r=o.plugins.get("ContextualBalloon");if(o.plugins.get("ImageUtils").getClosestSelectedImageWidget(o.editing.view.document.selection)){let s=Mh(o);r.updatePosition(s)}}(t):this._hideForm(!0)}),vr({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;let t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._form.disableCssTransitions(),this._isInBalloon||this._balloon.add({view:this._form,position:Mh(t)}),n.fieldView.value=n.fieldView.element.value=e.value||"",this._form.labeledInput.fieldView.select(),this._form.enableCssTransitions()}_hideForm(t){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class Sh extends S{static get requires(){return[EA,MA]}static get pluginName(){return"ImageTextAlternative"}}function Nh(i,t){return n=>{n.on(`attribute:srcset:${t}`,e)};function e(n,o,r){if(!r.consumable.consume(o.item,n.name))return;let s=r.writer,a=r.mapper.toViewElement(o.item),c=i.findViewImgElement(a);if(o.attributeNewValue===null){let l=o.attributeOldValue;l.data&&(s.removeAttribute("srcset",c),s.removeAttribute("sizes",c),l.width&&s.removeAttribute("width",c))}else{let l=o.attributeNewValue;l.data&&(s.setAttribute("srcset",l.data,c),s.setAttribute("sizes","100vw",c),l.width&&s.setAttribute("width",l.width,c))}}}function ii(i,t,e){return o=>{o.on(`attribute:${e}:${t}`,n)};function n(o,r,s){if(!s.consumable.consume(r.item,o.name))return;let a=s.writer,c=s.mapper.toViewElement(r.item),l=i.findViewImgElement(c);a.setAttribute(r.attributeKey,r.attributeNewValue||"",l)}}class SA extends pe{observe(t){this.listenTo(t,"load",(e,n)=>{let o=n.target;this.checkShouldIgnoreEventFromTarget(o)||o.tagName=="IMG"&&this._fireEvents(n)},{useCapture:!0})}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}}class NA extends U{constructor(t){super(t);let e=t.config.get("image.insert.type");t.plugins.has("ImageBlockEditing")||e==="block"&&at("image-block-plugin-required"),t.plugins.has("ImageInlineEditing")||e==="inline"&&at("image-inline-plugin-required")}refresh(){this.isEnabled=this.editor.plugins.get("ImageUtils").isImageAllowed()}execute(t){let e=xt(t.source),n=this.editor.model.document.selection,o=this.editor.plugins.get("ImageUtils"),r=Object.fromEntries(n.getAttributes());e.forEach((s,a)=>{let c=n.getSelectedElement();if(typeof s=="string"&&(s={src:s}),a&&c&&o.isImage(c)){let l=this.editor.model.createPositionAfter(c);o.insertImage({...s,...r},l)}else o.insertImage({...s,...r})})}}class Wr extends S{static get requires(){return[ae]}static get pluginName(){return"ImageEditing"}init(){let t=this.editor,e=t.conversion;t.editing.view.addObserver(SA),e.for("upcast").attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:o=>{let r={data:o.getAttribute("srcset")};return o.hasAttribute("width")&&(r.width=o.getAttribute("width")),r}}});let n=new NA(t);t.commands.add("insertImage",n),t.commands.add("imageInsert",n)}}class Bh extends U{constructor(t,e){super(t),this._modelElementName=e}refresh(){let t=this.editor.plugins.get("ImageUtils"),e=t.getClosestSelectedImageElement(this.editor.model.document.selection);this._modelElementName==="imageBlock"?this.isEnabled=t.isInlineImage(e):this.isEnabled=t.isBlockImage(e)}execute(){let t=this.editor,e=this.editor.model,n=t.plugins.get("ImageUtils"),o=n.getClosestSelectedImageElement(e.document.selection),r=Object.fromEntries(o.getAttributes());return r.src||r.uploadId?e.change(s=>{let a=Array.from(e.markers).filter(d=>d.getRange().containsItem(o)),c=n.insertImage(r,e.createSelection(o,"on"),this._modelElementName);if(!c)return null;let l=s.createRangeOn(c);for(let d of a){let h=d.getRange(),u=h.root.rootName!="$graveyard"?h.getJoined(l,!0):l;s.updateMarker(d,{range:u})}return{oldElement:o,newElement:c}}):null}}class Ph extends S{static get requires(){return[Wr,ae,be]}static get pluginName(){return"ImageBlockEditing"}init(){let t=this.editor;t.model.schema.register("imageBlock",{inheritAllFrom:"$blockObject",allowAttributes:["alt","src","srcset"]}),this._setupConversion(),t.plugins.has("ImageInlineEditing")&&(t.commands.add("imageTypeBlock",new Bh(this.editor,"imageBlock")),this._setupClipboardIntegration())}_setupConversion(){let t=this.editor,e=t.t,n=t.conversion,o=t.plugins.get("ImageUtils");n.for("dataDowncast").elementToStructure({model:"imageBlock",view:(r,{writer:s})=>xh(s)}),n.for("editingDowncast").elementToStructure({model:"imageBlock",view:(r,{writer:s})=>o.toImageWidget(xh(s),s,e("image widget"))}),n.for("downcast").add(ii(o,"imageBlock","src")).add(ii(o,"imageBlock","alt")).add(Nh(o,"imageBlock")),n.for("upcast").elementToElement({view:Eh(t,"imageBlock"),model:(r,{writer:s})=>s.createElement("imageBlock",r.hasAttribute("src")?{src:r.getAttribute("src")}:null)}).add(function(r){return a=>{a.on("element:figure",s)};function s(a,c,l){if(!l.consumable.test(c.viewItem,{name:!0,classes:"image"}))return;let d=r.findViewImgElement(c.viewItem);if(!d||!l.consumable.test(d,{name:!0}))return;l.consumable.consume(c.viewItem,{name:!0,classes:"image"});let h=vt(l.convertItem(d,c.modelCursor).modelRange.getItems());h?(l.convertChildren(c.viewItem,h),l.updateConversionResult(h,c)):l.consumable.revert(c.viewItem,{name:!0,classes:"image"})}}(o))}_setupClipboardIntegration(){let t=this.editor,e=t.model,n=t.editing.view,o=t.plugins.get("ImageUtils");this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(r,s)=>{let a=Array.from(s.content.getChildren()),c;if(!a.every(o.isInlineImageView))return;c=s.targetRanges?t.editing.mapper.toModelRange(s.targetRanges[0]):e.document.selection.getFirstRange();let l=e.createSelection(c);if(Hr(e.schema,l)==="imageBlock"){let d=new Cn(n.document),h=a.map(u=>d.createElement("figure",{class:"image"},u));s.content=d.createDocumentFragment(h)}})}}var zh=P(3508),BA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(zh.Z,BA),zh.Z.locals;class PA extends S{static get requires(){return[Ph,ho,Sh]}static get pluginName(){return"ImageBlock"}}class zA extends S{static get requires(){return[Wr,ae,be]}static get pluginName(){return"ImageInlineEditing"}init(){let t=this.editor,e=t.model.schema;e.register("imageInline",{inheritAllFrom:"$inlineObject",allowAttributes:["alt","src","srcset"]}),e.addChildCheck((n,o)=>{if(n.endsWith("caption")&&o.name==="imageInline")return!1}),this._setupConversion(),t.plugins.has("ImageBlockEditing")&&(t.commands.add("imageTypeInline",new Bh(this.editor,"imageInline")),this._setupClipboardIntegration())}_setupConversion(){let t=this.editor,e=t.t,n=t.conversion,o=t.plugins.get("ImageUtils");n.for("dataDowncast").elementToElement({model:"imageInline",view:(r,{writer:s})=>s.createEmptyElement("img")}),n.for("editingDowncast").elementToStructure({model:"imageInline",view:(r,{writer:s})=>o.toImageWidget(function(a){return a.createContainerElement("span",{class:"image-inline"},a.createEmptyElement("img"))}(s),s,e("image widget"))}),n.for("downcast").add(ii(o,"imageInline","src")).add(ii(o,"imageInline","alt")).add(Nh(o,"imageInline")),n.for("upcast").elementToElement({view:Eh(t,"imageInline"),model:(r,{writer:s})=>s.createElement("imageInline",r.hasAttribute("src")?{src:r.getAttribute("src")}:null)})}_setupClipboardIntegration(){let t=this.editor,e=t.model,n=t.editing.view,o=t.plugins.get("ImageUtils");this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(r,s)=>{let a=Array.from(s.content.getChildren()),c;if(!a.every(o.isBlockImageView))return;c=s.targetRanges?t.editing.mapper.toModelRange(s.targetRanges[0]):e.document.selection.getFirstRange();let l=e.createSelection(c);if(Hr(e.schema,l)==="imageInline"){let d=new Cn(n.document),h=a.map(u=>u.childCount===1?(Array.from(u.getAttributes()).forEach(g=>d.setAttribute(...g,o.findViewImgElement(u))),u.getChild(0)):u);s.content=d.createDocumentFragment(h)}})}}class LA extends S{static get requires(){return[zA,ho,Sh]}static get pluginName(){return"ImageInline"}}class OA extends U{refresh(){let t=this.editor,e=t.plugins.get("ImageCaptionUtils");if(!t.plugins.has(Ph))return this.isEnabled=!1,void(this.value=!1);let n=t.model.document.selection,o=n.getSelectedElement();if(!o){let r=e.getCaptionFromModelSelection(n);return this.isEnabled=!!r,void(this.value=!!r)}this.isEnabled=this.editor.plugins.get("ImageUtils").isImage(o),this.isEnabled?this.value=!!e.getCaptionFromImageModelElement(o):this.value=!1}execute(t={}){let{focusCaptionOnShow:e}=t;this.editor.model.change(n=>{this.value?this._hideImageCaption(n):this._showImageCaption(n,e)})}_showImageCaption(t,e){let n=this.editor.model.document.selection,o=this.editor.plugins.get("ImageCaptionEditing"),r=n.getSelectedElement(),s=o._getSavedCaption(r);this.editor.plugins.get("ImageUtils").isInlineImage(r)&&(this.editor.execute("imageTypeBlock"),r=n.getSelectedElement());let a=s||t.createElement("caption");t.append(a,r),e&&t.setSelection(a,"in")}_hideImageCaption(t){let e=this.editor,n=e.model.document.selection,o=e.plugins.get("ImageCaptionEditing"),r=e.plugins.get("ImageCaptionUtils"),s,a=n.getSelectedElement();a?s=r.getCaptionFromImageModelElement(a):(s=r.getCaptionFromModelSelection(n),a=s.parent),o._saveCaption(a,s),t.setSelection(a,"on"),t.remove(s)}}class Lh extends S{static get pluginName(){return"ImageCaptionUtils"}static get requires(){return[ae]}getCaptionFromImageModelElement(t){for(let e of t.getChildren())if(e&&e.is("element","caption"))return e;return null}getCaptionFromModelSelection(t){let e=this.editor.plugins.get("ImageUtils"),n=t.getFirstPosition().findAncestor("caption");return n&&e.isBlockImage(n.parent)?n:null}matchImageCaptionViewElement(t){let e=this.editor.plugins.get("ImageUtils");return t.name=="figcaption"&&e.isBlockImageView(t.parent)?{name:!0}:null}}class RA extends S{static get requires(){return[ae,Lh]}static get pluginName(){return"ImageCaptionEditing"}constructor(t){super(t),this._savedCaptionsMap=new WeakMap}init(){let t=this.editor,e=t.model.schema;e.isRegistered("caption")?e.extend("caption",{allowIn:"imageBlock"}):e.register("caption",{allowIn:"imageBlock",allowContentOf:"$block",isLimit:!0}),t.commands.add("toggleImageCaption",new OA(this.editor)),this._setupConversion(),this._setupImageTypeCommandsIntegration(),this._registerCaptionReconversion()}_setupConversion(){let t=this.editor,e=t.editing.view,n=t.plugins.get("ImageUtils"),o=t.plugins.get("ImageCaptionUtils"),r=t.t;t.conversion.for("upcast").elementToElement({view:s=>o.matchImageCaptionViewElement(s),model:"caption"}),t.conversion.for("dataDowncast").elementToElement({model:"caption",view:(s,{writer:a})=>n.isBlockImage(s.parent)?a.createContainerElement("figcaption"):null}),t.conversion.for("editingDowncast").elementToElement({model:"caption",view:(s,{writer:a})=>{if(!n.isBlockImage(s.parent))return null;let c=a.createEditableElement("figcaption");a.setCustomProperty("imageCaption",!0,c),ja({view:e,element:c,text:r("Enter image caption"),keepOnFocus:!0});let l=s.parent.getAttribute("alt");return jd(c,a,{label:l?r("Caption for image: %0",[l]):r("Caption for the image")})}})}_setupImageTypeCommandsIntegration(){let t=this.editor,e=t.plugins.get("ImageUtils"),n=t.plugins.get("ImageCaptionUtils"),o=t.commands.get("imageTypeInline"),r=t.commands.get("imageTypeBlock"),s=a=>{if(!a.return)return;let{oldElement:c,newElement:l}=a.return;if(!c)return;if(e.isBlockImage(c)){let h=n.getCaptionFromImageModelElement(c);if(h)return void this._saveCaption(l,h)}let d=this._getSavedCaption(c);d&&this._saveCaption(l,d)};o&&this.listenTo(o,"execute",s,{priority:"low"}),r&&this.listenTo(r,"execute",s,{priority:"low"})}_getSavedCaption(t){let e=this._savedCaptionsMap.get(t);return e?Q.fromJSON(e):null}_saveCaption(t,e){this._savedCaptionsMap.set(t,e.toJSON())}_registerCaptionReconversion(){let t=this.editor,e=t.model,n=t.plugins.get("ImageUtils"),o=t.plugins.get("ImageCaptionUtils");e.document.on("change:data",()=>{let r=e.document.differ.getChanges();for(let s of r){if(s.attributeKey!=="alt")continue;let a=s.range.start.nodeAfter;if(n.isBlockImage(a)){let c=o.getCaptionFromImageModelElement(a);if(!c)return;t.editing.reconvertItem(c)}}})}}class jA extends S{static get requires(){return[Lh]}static get pluginName(){return"ImageCaptionUI"}init(){let t=this.editor,e=t.editing.view,n=t.plugins.get("ImageCaptionUtils"),o=t.t;t.ui.componentFactory.add("toggleImageCaption",r=>{let s=t.commands.get("toggleImageCaption"),a=new st(r);return a.set({icon:wt.caption,tooltip:!0,isToggleable:!0}),a.bind("isOn","isEnabled").to(s,"value","isEnabled"),a.bind("label").to(s,"value",c=>o(c?"Toggle caption off":"Toggle caption on")),this.listenTo(a,"execute",()=>{t.execute("toggleImageCaption",{focusCaptionOnShow:!0});let c=n.getCaptionFromModelSelection(t.model.document.selection);if(c){let l=t.editing.mapper.toViewElement(c);e.scrollToTheSelection(),e.change(d=>{d.addClass("image__caption_highlighted",l)})}t.editing.view.focus()}),a})}}var Oh=P(2640),FA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Oh.Z,FA),Oh.Z.locals;class VA extends U{constructor(t,e){super(t),this._defaultStyles={imageBlock:!1,imageInline:!1},this._styles=new Map(e.map(n=>{if(n.isDefault)for(let o of n.modelElements)this._defaultStyles[o]=n.name;return[n.name,n]}))}refresh(){let t=this.editor.plugins.get("ImageUtils").getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!t,this.isEnabled?t.hasAttribute("imageStyle")?this.value=t.getAttribute("imageStyle"):this.value=this._defaultStyles[t.name]:this.value=!1}execute(t={}){let e=this.editor,n=e.model,o=e.plugins.get("ImageUtils");n.change(r=>{let s=t.value,a=o.getClosestSelectedImageElement(n.document.selection);s&&this.shouldConvertImageType(s,a)&&(this.editor.execute(o.isBlockImage(a)?"imageTypeInline":"imageTypeBlock"),a=o.getClosestSelectedImageElement(n.document.selection)),!s||this._styles.get(s).isDefault?r.removeAttribute("imageStyle",a):r.setAttribute("imageStyle",s,a)})}shouldConvertImageType(t,e){return!this._styles.get(t).modelElements.includes(e.name)}}let{objectFullWidth:UA,objectInline:Rh,objectLeft:jh,objectRight:qr,objectCenter:Gr,objectBlockLeft:Fh,objectBlockRight:Vh}=wt,ri={get inline(){return{name:"inline",title:"In line",icon:Rh,modelElements:["imageInline"],isDefault:!0}},get alignLeft(){return{name:"alignLeft",title:"Left aligned image",icon:jh,modelElements:["imageBlock","imageInline"],className:"image-style-align-left"}},get alignBlockLeft(){return{name:"alignBlockLeft",title:"Left aligned image",icon:Fh,modelElements:["imageBlock"],className:"image-style-block-align-left"}},get alignCenter(){return{name:"alignCenter",title:"Centered image",icon:Gr,modelElements:["imageBlock"],className:"image-style-align-center"}},get alignRight(){return{name:"alignRight",title:"Right aligned image",icon:qr,modelElements:["imageBlock","imageInline"],className:"image-style-align-right"}},get alignBlockRight(){return{name:"alignBlockRight",title:"Right aligned image",icon:Vh,modelElements:["imageBlock"],className:"image-style-block-align-right"}},get block(){return{name:"block",title:"Centered image",icon:Gr,modelElements:["imageBlock"],isDefault:!0}},get side(){return{name:"side",title:"Side image",icon:qr,modelElements:["imageBlock"],className:"image-style-side"}}},Uh={full:UA,left:Fh,right:Vh,center:Gr,inlineLeft:jh,inlineRight:qr,inline:Rh},Hh=[{name:"imageStyle:wrapText",title:"Wrap text",defaultItem:"imageStyle:alignLeft",items:["imageStyle:alignLeft","imageStyle:alignRight"]},{name:"imageStyle:breakText",title:"Break text",defaultItem:"imageStyle:block",items:["imageStyle:alignBlockLeft","imageStyle:block","imageStyle:alignBlockRight"]}];function Wh(i){at("image-style-configuration-definition-invalid",i)}let $r={normalizeStyles:function(i){return(i.configuredStyles.options||[]).map(t=>function(e){return e=typeof e=="string"?ri[e]?{...ri[e]}:{name:e}:function(n,o){let r={...o};for(let s in n)Object.prototype.hasOwnProperty.call(o,s)||(r[s]=n[s]);return r}(ri[e.name],e),typeof e.icon=="string"&&(e.icon=Uh[e.icon]||e.icon),e}(t)).filter(t=>function(e,{isBlockPluginLoaded:n,isInlinePluginLoaded:o}){let{modelElements:r,name:s}=e;if(!(r&&r.length&&s))return Wh({style:e}),!1;{let a=[n?"imageBlock":null,o?"imageInline":null];if(!r.some(c=>a.includes(c)))return at("image-style-missing-dependency",{style:e,missingPlugins:r.map(c=>c==="imageBlock"?"ImageBlockEditing":"ImageInlineEditing")}),!1}return!0}(t,i))},getDefaultStylesConfiguration:function(i,t){return i&&t?{options:["inline","alignLeft","alignRight","alignCenter","alignBlockLeft","alignBlockRight","block","side"]}:i?{options:["block","side"]}:t?{options:["inline","alignLeft","alignRight"]}:{}},getDefaultDropdownDefinitions:function(i){return i.has("ImageBlockEditing")&&i.has("ImageInlineEditing")?[...Hh]:[]},warnInvalidStyle:Wh,DEFAULT_OPTIONS:ri,DEFAULT_ICONS:Uh,DEFAULT_DROPDOWN_DEFINITIONS:Hh};function qh(i,t){for(let e of t)if(e.name===i)return e}class Gh extends S{static get pluginName(){return"ImageStyleEditing"}static get requires(){return[ae]}init(){let{normalizeStyles:t,getDefaultStylesConfiguration:e}=$r,n=this.editor,o=n.plugins.has("ImageBlockEditing"),r=n.plugins.has("ImageInlineEditing");n.config.define("image.styles",e(o,r)),this.normalizedStyles=t({configuredStyles:n.config.get("image.styles"),isBlockPluginLoaded:o,isInlinePluginLoaded:r}),this._setupConversion(o,r),this._setupPostFixer(),n.commands.add("imageStyle",new VA(n,this.normalizedStyles))}_setupConversion(t,e){let n=this.editor,o=n.model.schema,r=(s=this.normalizedStyles,(c,l,d)=>{if(!d.consumable.consume(l.item,c.name))return;let h=qh(l.attributeNewValue,s),u=qh(l.attributeOldValue,s),g=d.mapper.toViewElement(l.item),m=d.writer;u&&m.removeClass(u.className,g),h&&m.addClass(h.className,g)});var s;let a=function(c){let l={imageInline:c.filter(d=>!d.isDefault&&d.modelElements.includes("imageInline")),imageBlock:c.filter(d=>!d.isDefault&&d.modelElements.includes("imageBlock"))};return(d,h,u)=>{if(!h.modelRange)return;let g=h.viewItem,m=vt(h.modelRange.getItems());if(m&&u.schema.checkAttribute(m,"imageStyle"))for(let p of l[m.name])u.consumable.consume(g,{classes:p.className})&&u.writer.setAttribute("imageStyle",p.name,m)}}(this.normalizedStyles);n.editing.downcastDispatcher.on("attribute:imageStyle",r),n.data.downcastDispatcher.on("attribute:imageStyle",r),t&&(o.extend("imageBlock",{allowAttributes:"imageStyle"}),n.data.upcastDispatcher.on("element:figure",a,{priority:"low"})),e&&(o.extend("imageInline",{allowAttributes:"imageStyle"}),n.data.upcastDispatcher.on("element:img",a,{priority:"low"}))}_setupPostFixer(){let t=this.editor,e=t.model.document,n=t.plugins.get(ae),o=new Map(this.normalizedStyles.map(r=>[r.name,r]));e.registerPostFixer(r=>{let s=!1;for(let a of e.differ.getChanges())if(a.type=="insert"||a.type=="attribute"&&a.attributeKey=="imageStyle"){let c=a.type=="insert"?a.position.nodeAfter:a.range.start.nodeAfter;if(c&&c.is("element","paragraph")&&c.childCount>0&&(c=c.getChild(0)),!n.isImage(c))continue;let l=c.getAttribute("imageStyle");if(!l)continue;let d=o.get(l);d&&d.modelElements.includes(c.name)||(r.removeAttribute("imageStyle",c),s=!0)}return s})}}var $h=P(5083),HA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()($h.Z,HA),$h.Z.locals;class WA extends S{static get requires(){return[Gh]}static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){let t=this.editor.t;return{"Wrap text":t("Wrap text"),"Break text":t("Break text"),"In line":t("In line"),"Full size image":t("Full size image"),"Side image":t("Side image"),"Left aligned image":t("Left aligned image"),"Centered image":t("Centered image"),"Right aligned image":t("Right aligned image")}}init(){let t=this.editor.plugins,e=this.editor.config.get("image.toolbar")||[],n=Yh(t.get("ImageStyleEditing").normalizedStyles,this.localizedDefaultStylesTitles);for(let r of n)this._createButton(r);let o=Yh([...e.filter(gt),...$r.getDefaultDropdownDefinitions(t)],this.localizedDefaultStylesTitles);for(let r of o)this._createDropdown(r,n)}_createDropdown(t,e){let n=this.editor.ui.componentFactory;n.add(t.name,o=>{let r,{defaultItem:s,items:a,title:c}=t,l=a.filter(g=>e.find(({name:m})=>Kh(m)===g)).map(g=>{let m=n.create(g);return g===s&&(r=m),m});a.length!==l.length&&$r.warnInvalidStyle({dropdown:t});let d=Se(o,Er),h=d.buttonView,u=h.arrowView;return Tr(d,l,{enableActiveItemFocusOnDropdownOpen:!0}),h.set({label:Qh(c,r.label),class:null,tooltip:!0}),u.unbind("label"),u.set({label:c}),h.bind("icon").toMany(l,"isOn",(...g)=>{let m=g.findIndex(We);return m<0?r.icon:l[m].icon}),h.bind("label").toMany(l,"isOn",(...g)=>{let m=g.findIndex(We);return Qh(c,m<0?r.label:l[m].label)}),h.bind("isOn").toMany(l,"isOn",(...g)=>g.some(We)),h.bind("class").toMany(l,"isOn",(...g)=>g.some(We)?"ck-splitbutton_flatten":null),h.on("execute",()=>{l.some(({isOn:g})=>g)?d.isOpen=!d.isOpen:r.fire("execute")}),d.bind("isEnabled").toMany(l,"isEnabled",(...g)=>g.some(We)),this.listenTo(d,"execute",()=>{this.editor.editing.view.focus()}),d})}_createButton(t){let e=t.name;this.editor.ui.componentFactory.add(Kh(e),n=>{let o=this.editor.commands.get("imageStyle"),r=new st(n);return r.set({label:t.title,icon:t.icon,tooltip:!0,isToggleable:!0}),r.bind("isEnabled").to(o,"isEnabled"),r.bind("isOn").to(o,"value",s=>s===e),r.on("execute",this._executeCommand.bind(this,e)),r})}_executeCommand(t){this.editor.execute("imageStyle",{value:t}),this.editor.editing.view.focus()}}function Yh(i,t){for(let e of i)t[e.title]&&(e.title=t[e.title]);return i}function Kh(i){return`imageStyle:${i}`}function Qh(i,t){return(i?i+": ":"")+t}function Zh(i){let t=i.map(e=>e.replace("+","\\+"));return new RegExp(`^image\\/(${t.join("|")})$`)}function qA(i){return new Promise((t,e)=>{let n=i.getAttribute("src");fetch(n).then(o=>o.blob()).then(o=>{let r=Jh(o,n),s=r.replace("image/",""),a=new File([o],`image.${s}`,{type:r});t(a)}).catch(o=>o&&o.name==="TypeError"?function(r){return function(s){return new Promise((a,c)=>{let l=V.document.createElement("img");l.addEventListener("load",()=>{let d=V.document.createElement("canvas");d.width=l.width,d.height=l.height,d.getContext("2d").drawImage(l,0,0),d.toBlob(h=>h?a(h):c())}),l.addEventListener("error",()=>c()),l.src=s})}(r).then(s=>{let a=Jh(s,r),c=a.replace("image/","");return new File([s],`image.${c}`,{type:a})})}(n).then(t).catch(e):e(o))})}function Jh(i,t){return i.type?i.type:t.match(/data:(image\/\w+);base64/)?t.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}class GA extends S{static get pluginName(){return"ImageUploadUI"}init(){let t=this.editor,e=t.t,n=o=>{let r=new Yw(o),s=t.commands.get("uploadImage"),a=t.config.get("image.upload.types"),c=Zh(a);return r.set({acceptedType:a.map(l=>`image/${l}`).join(","),allowMultipleFiles:!0}),r.buttonView.set({label:e("Insert image"),icon:wt.image,tooltip:!0}),r.buttonView.bind("isEnabled").to(s),r.on("done",(l,d)=>{let h=Array.from(d).filter(u=>c.test(u.type));h.length&&(t.execute("uploadImage",{file:h}),t.editing.view.focus())}),r};t.ui.componentFactory.add("uploadImage",n),t.ui.componentFactory.add("imageUpload",n)}}var Xh=P(3689),$A={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Xh.Z,$A),Xh.Z.locals;var tu=P(4036),YA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(tu.Z,YA),tu.Z.locals;var eu=P(3773),KA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(eu.Z,KA),eu.Z.locals;class QA extends S{static get pluginName(){return"ImageUploadProgress"}constructor(t){super(t),this.placeholder="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}init(){let t=this.editor;t.plugins.has("ImageBlockEditing")&&t.editing.downcastDispatcher.on("attribute:uploadStatus:imageBlock",(...e)=>this.uploadStatusChange(...e)),t.plugins.has("ImageInlineEditing")&&t.editing.downcastDispatcher.on("attribute:uploadStatus:imageInline",(...e)=>this.uploadStatusChange(...e))}uploadStatusChange(t,e,n){let o=this.editor,r=e.item,s=r.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;let a=o.plugins.get("ImageUtils"),c=o.plugins.get(se),l=s?e.attributeNewValue:null,d=this.placeholder,h=o.editing.mapper.toViewElement(r),u=n.writer;if(l=="reading")return nu(h,u),void ou(a,d,h,u);if(l=="uploading"){let g=c.loaders.get(s);return nu(h,u),void(g?(iu(h,u),function(m,p,k,b){let A=function(y){let N=y.createUIElement("div",{class:"ck-progress-bar"});return y.setCustomProperty("progressBar",!0,N),N}(p);p.insert(p.createPositionAt(m,"end"),A),k.on("change:uploadedPercent",(y,N,z)=>{b.change(q=>{q.setStyle("width",z+"%",A)})})}(h,u,g,o.editing.view),function(m,p,k,b){if(b.data){let A=m.findViewImgElement(p);k.setAttribute("src",b.data,A)}}(a,h,u,g)):ou(a,d,h,u))}l=="complete"&&c.loaders.get(s)&&function(g,m,p){let k=m.createUIElement("div",{class:"ck-image-upload-complete-icon"});m.insert(m.createPositionAt(g,"end"),k),setTimeout(()=>{p.change(b=>b.remove(b.createRangeOn(k)))},3e3)}(h,u,o.editing.view),function(g,m){su(g,m,"progressBar")}(h,u),iu(h,u),function(g,m){m.removeClass("ck-appear",g)}(h,u)}}function nu(i,t){i.hasClass("ck-appear")||t.addClass("ck-appear",i)}function ou(i,t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);let o=i.findViewImgElement(e);o.getAttribute("src")!==t&&n.setAttribute("src",t,o),ru(e,"placeholder")||n.insert(n.createPositionAfter(o),function(r){let s=r.createUIElement("div",{class:"ck-upload-placeholder-loader"});return r.setCustomProperty("placeholder",!0,s),s}(n))}function iu(i,t){i.hasClass("ck-image-upload-placeholder")&&t.removeClass("ck-image-upload-placeholder",i),su(i,t,"placeholder")}function ru(i,t){for(let e of i.getChildren())if(e.getCustomProperty(t))return e}function su(i,t,e){let n=ru(i,e);n&&t.remove(t.createRangeOn(n))}class ZA extends U{refresh(){let t=this.editor,e=t.plugins.get("ImageUtils"),n=t.model.document.selection.getSelectedElement();this.isEnabled=e.isImageAllowed()||e.isImage(n)}execute(t){let e=xt(t.file),n=this.editor.model.document.selection,o=this.editor.plugins.get("ImageUtils"),r=Object.fromEntries(n.getAttributes());e.forEach((s,a)=>{let c=n.getSelectedElement();if(a&&c&&o.isImage(c)){let l=this.editor.model.createPositionAfter(c);this._uploadImage(s,r,l)}else this._uploadImage(s,r)})}_uploadImage(t,e,n){let o=this.editor,r=o.plugins.get(se).createLoader(t),s=o.plugins.get("ImageUtils");r&&s.insertImage({...e,uploadId:r.id},n)}}class JA extends S{static get requires(){return[se,Nr,be,ae]}static get pluginName(){return"ImageUploadEditing"}constructor(t){super(t),t.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}}),this._uploadImageElements=new Map}init(){let t=this.editor,e=t.model.document,n=t.conversion,o=t.plugins.get(se),r=t.plugins.get("ImageUtils"),s=Zh(t.config.get("image.upload.types")),a=new ZA(t);t.commands.add("uploadImage",a),t.commands.add("imageUpload",a),n.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(c,l)=>{if(d=l.dataTransfer,Array.from(d.types).includes("text/html")&&d.getData("text/html")!=="")return;var d;let h=Array.from(l.dataTransfer.files).filter(u=>!!u&&s.test(u.type));h.length&&(c.stop(),t.model.change(u=>{l.targetRanges&&u.setSelection(l.targetRanges.map(g=>t.editing.mapper.toModelRange(g))),t.model.enqueueChange(()=>{t.execute("uploadImage",{file:h})})}))}),this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(c,l)=>{let d=Array.from(t.editing.view.createRangeIn(l.content)).filter(u=>function(g,m){return!(!g.isInlineImageView(m)||!m.getAttribute("src"))&&(m.getAttribute("src").match(/^data:image\/\w+;base64,/g)||m.getAttribute("src").match(/^blob:/g))}(r,u.item)&&!u.item.getAttribute("uploadProcessed")).map(u=>({promise:qA(u.item),imageElement:u.item}));if(!d.length)return;let h=new Cn(t.editing.view.document);for(let u of d){h.setAttribute("uploadProcessed",!0,u.imageElement);let g=o.createLoader(u.promise);g&&(h.setAttribute("src","",u.imageElement),h.setAttribute("uploadId",g.id,u.imageElement))}}),t.editing.view.document.on("dragover",(c,l)=>{l.preventDefault()}),e.on("change",()=>{let c=e.differ.getChanges({includeChangesInGraveyard:!0}).reverse(),l=new Set;for(let d of c)if(d.type=="insert"&&d.name!="$text"){let h=d.position.nodeAfter,u=d.position.root.rootName=="$graveyard";for(let g of XA(t,h)){let m=g.getAttribute("uploadId");if(!m)continue;let p=o.loaders.get(m);p&&(u?l.has(m)||p.abort():(l.add(m),this._uploadImageElements.set(m,g),p.status=="idle"&&this._readAndUpload(p)))}}}),this.on("uploadComplete",(c,{imageElement:l,data:d})=>{let h=d.urls?d.urls:d;this.editor.model.change(u=>{u.setAttribute("src",h.default,l),this._parseAndSetSrcsetAttributeOnImage(h,l,u)})},{priority:"low"})}afterInit(){let t=this.editor.model.schema;this.editor.plugins.has("ImageBlockEditing")&&t.extend("imageBlock",{allowAttributes:["uploadId","uploadStatus"]}),this.editor.plugins.has("ImageInlineEditing")&&t.extend("imageInline",{allowAttributes:["uploadId","uploadStatus"]})}_readAndUpload(t){let e=this.editor,n=e.model,o=e.locale.t,r=e.plugins.get(se),s=e.plugins.get(Nr),a=e.plugins.get("ImageUtils"),c=this._uploadImageElements;return n.enqueueChange({isUndoable:!1},d=>{d.setAttribute("uploadStatus","reading",c.get(t.id))}),t.read().then(()=>{let d=t.upload(),h=c.get(t.id);if(f.isSafari){let u=e.editing.mapper.toViewElement(h),g=a.findViewImgElement(u);e.editing.view.once("render",()=>{if(!g.parent)return;let m=e.editing.view.domConverter.mapViewToDom(g.parent);if(!m)return;let p=m.style.display;m.style.display="none",m._ckHack=m.offsetHeight,m.style.display=p})}return n.enqueueChange({isUndoable:!1},u=>{u.setAttribute("uploadStatus","uploading",h)}),d}).then(d=>{n.enqueueChange({isUndoable:!1},h=>{let u=c.get(t.id);h.setAttribute("uploadStatus","complete",u),this.fire("uploadComplete",{data:d,imageElement:u})}),l()}).catch(d=>{if(t.status!=="error"&&t.status!=="aborted")throw d;t.status=="error"&&d&&s.showWarning(d,{title:o("Upload failed"),namespace:"upload"}),n.enqueueChange({isUndoable:!1},h=>{h.remove(c.get(t.id))}),l()});function l(){n.enqueueChange({isUndoable:!1},d=>{let h=c.get(t.id);d.removeAttribute("uploadId",h),d.removeAttribute("uploadStatus",h),c.delete(t.id)}),r.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let o=0,r=Object.keys(t).filter(s=>{let a=parseInt(s,10);if(!isNaN(a))return o=Math.max(o,a),!0}).map(s=>`${t[s]} ${s}w`).join(", ");r!=""&&n.setAttribute("srcset",{data:r,width:o},e)}}function XA(i,t){let e=i.plugins.get("ImageUtils");return Array.from(i.model.createRangeOn(t)).filter(n=>e.isImage(n.item)).map(n=>n.item)}class t_ extends S{static get pluginName(){return"IndentEditing"}init(){let t=this.editor;t.commands.add("indent",new La(t)),t.commands.add("outdent",new La(t))}}let au='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',cu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';class e_ extends S{static get pluginName(){return"IndentUI"}init(){let t=this.editor,e=t.locale,n=t.t,o=e.uiLanguageDirection=="ltr"?au:cu,r=e.uiLanguageDirection=="ltr"?cu:au;this._defineButton("indent",n("Increase indent"),o),this._defineButton("outdent",n("Decrease indent"),r)}_defineButton(t,e,n){let o=this.editor;o.ui.componentFactory.add(t,r=>{let s=o.commands.get(t),a=new st(r);return a.set({label:e,icon:n,tooltip:!0}),a.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(a,"execute",()=>{o.execute(t),o.editing.view.focus()}),a})}}class n_{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(t){Array.isArray(t)?t.forEach(e=>this._definitions.add(e)):this._definitions.add(t)}getDispatcher(){return t=>{t.on("attribute:linkHref",(e,n,o)=>{if(!o.consumable.test(n.item,"attribute:linkHref")||!n.item.is("selection")&&!o.schema.isInline(n.item))return;let r=o.writer,s=r.document.selection;for(let a of this._definitions){let c=r.createAttributeElement("a",a.attributes,{priority:5});a.classes&&r.addClass(a.classes,c);for(let l in a.styles)r.setStyle(l,a.styles[l],c);r.setCustomProperty("link",!0,c),a.callback(n.attributeNewValue)?n.item.is("selection")?r.wrap(s.getFirstRange(),c):r.wrap(o.mapper.toViewRange(n.range),c):r.unwrap(o.mapper.toViewRange(n.range),c)}},{priority:"high"})}}getDispatcherForLinkedImage(){return t=>{t.on("attribute:linkHref:imageBlock",(e,n,{writer:o,mapper:r})=>{let s=r.toViewElement(n.item),a=Array.from(s.getChildren()).find(c=>c.name==="a");for(let c of this._definitions){let l=he(c.attributes);if(c.callback(n.attributeNewValue)){for(let[d,h]of l)d==="class"?o.addClass(h,a):o.setAttribute(d,h,a);c.classes&&o.addClass(c.classes,a);for(let d in c.styles)o.setStyle(d,c.styles[d],a)}else{for(let[d,h]of l)d==="class"?o.removeClass(h,a):o.removeAttribute(d,a);c.classes&&o.removeClass(c.classes,a);for(let d in c.styles)o.removeStyle(d,a)}}})}}}let o_=function(i,t,e){var n=i.length;return e=e===void 0?n:e,!t&&e>=n?i:Ga(i,t,e)};var i_=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");let lu=function(i){return i_.test(i)},r_=function(i){return i.split("")};var du="\\ud800-\\udfff",s_="["+du+"]",Yr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Kr="\\ud83c[\\udffb-\\udfff]",hu="[^"+du+"]",uu="(?:\\ud83c[\\udde6-\\uddff]){2}",gu="[\\ud800-\\udbff][\\udc00-\\udfff]",mu="(?:"+Yr+"|"+Kr+")?",pu="[\\ufe0e\\ufe0f]?",a_=pu+mu+("(?:\\u200d(?:"+[hu,uu,gu].join("|")+")"+pu+mu+")*"),c_="(?:"+[hu+Yr+"?",Yr,uu,gu,s_].join("|")+")",l_=RegExp(Kr+"(?="+Kr+")|"+c_+a_,"g");let d_=function(i){return i.match(l_)||[]},h_=function(i){return lu(i)?d_(i):r_(i)},u_=function(i){return function(t){t=Vi(t);var e=lu(t)?h_(t):void 0,n=e?e[0]:t.charAt(0),o=e?o_(e,1).join(""):t.slice(1);return n[i]()+o}}("toUpperCase"),g_=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,m_=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,p_=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,f_=/^((\w+:(\/{2,})?)|(\W))/i,Qr="Ctrl+K";function fu(i,{writer:t}){let e=t.createAttributeElement("a",{href:i},{priority:5});return t.setCustomProperty("link",!0,e),e}function ku(i){return function(t){return t.replace(g_,"").match(m_)}(i=String(i))?i:"#"}function Zr(i,t){return!!i&&t.checkAttribute(i.name,"linkHref")}function bu(i,t){let e=(n=i,p_.test(n)?"mailto:":t);var n;let o=!!e&&!wu(i);return i&&o?e+i:i}function wu(i){return f_.test(i)}function Au(i){window.open(i,"_blank","noopener")}class k_ extends U{constructor(t){super(t),this.manualDecorators=new ee,this.automaticDecorators=new n_}restoreManualDecoratorStates(){for(let t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}refresh(){let t=this.editor.model,e=t.document.selection,n=e.getSelectedElement()||vt(e.getSelectedBlocks());Zr(n,t.schema)?(this.value=n.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttribute(n,"linkHref")):(this.value=e.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e,"linkHref"));for(let o of this.manualDecorators)o.value=this._getDecoratorStateFromModel(o.id)}execute(t,e={}){let n=this.editor.model,o=n.document.selection,r=[],s=[];for(let a in e)e[a]?r.push(a):s.push(a);n.change(a=>{if(o.isCollapsed){let c=o.getFirstPosition();if(o.hasAttribute("linkHref")){let l=In(c,"linkHref",o.getAttribute("linkHref"),n);a.setAttribute("linkHref",t,l),r.forEach(d=>{a.setAttribute(d,!0,l)}),s.forEach(d=>{a.removeAttribute(d,l)}),a.setSelection(a.createPositionAfter(l.end.nodeBefore))}else if(t!==""){let l=he(o.getAttributes());l.set("linkHref",t),r.forEach(h=>{l.set(h,!0)});let{end:d}=n.insertContent(a.createText(t,l),c);a.setSelection(d)}["linkHref",...r,...s].forEach(l=>{a.removeSelectionAttribute(l)})}else{let c=n.schema.getValidRanges(o.getRanges(),"linkHref"),l=[];for(let h of o.getSelectedBlocks())n.schema.checkAttribute(h,"linkHref")&&l.push(a.createRangeOn(h));let d=l.slice();for(let h of c)this._isRangeToUpdate(h,l)&&d.push(h);for(let h of d)a.setAttribute("linkHref",t,h),r.forEach(u=>{a.setAttribute(u,!0,h)}),s.forEach(u=>{a.removeAttribute(u,h)})}})}_getDecoratorStateFromModel(t){let e=this.editor.model,n=e.document.selection,o=n.getSelectedElement();return Zr(o,e.schema)?o.getAttribute(t):n.getAttribute(t)}_isRangeToUpdate(t,e){for(let n of e)if(n.containsRange(t))return!1;return!0}}class b_ extends U{refresh(){let t=this.editor.model,e=t.document.selection,n=e.getSelectedElement();Zr(n,t.schema)?this.isEnabled=t.schema.checkAttribute(n,"linkHref"):this.isEnabled=t.schema.checkAttributeInSelection(e,"linkHref")}execute(){let t=this.editor,e=this.editor.model,n=e.document.selection,o=t.commands.get("link");e.change(r=>{let s=n.isCollapsed?[In(n.getFirstPosition(),"linkHref",n.getAttribute("linkHref"),e)]:e.schema.getValidRanges(n.getRanges(),"linkHref");for(let a of s)if(r.removeAttribute("linkHref",a),o)for(let c of o.manualDecorators)r.removeAttribute(c.id,a)})}}class _u{constructor({id:t,label:e,attributes:n,classes:o,styles:r,defaultValue:s}){this.id=t,this.set("value"),this.defaultValue=s,this.label=e,this.attributes=n,this.classes=o,this.styles=r}_createPattern(){return{attributes:this.attributes,classes:this.classes,styles:this.styles}}}jt(_u,J);var Cu=P(9773),w_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Cu.Z,w_),Cu.Z.locals;let vu="automatic",A_=/^(https?:)?\/\//;class __ extends S{static get pluginName(){return"LinkEditing"}static get requires(){return[Id,_d,be]}constructor(t){super(t),t.config.define("link",{addTargetToExternalLinks:!1})}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:fu}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(n,o)=>fu(ku(n),o)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:n=>n.getAttribute("href")}}),t.commands.add("link",new k_(t)),t.commands.add("unlink",new b_(t));let e=function(n,o){let r={"Open in a new tab":n("Open in a new tab"),Downloadable:n("Downloadable")};return o.forEach(s=>(s.label&&r[s.label]&&(s.label=r[s.label]),s)),o}(t.t,function(n){let o=[];if(n)for(let[r,s]of Object.entries(n)){let a=Object.assign({},s,{id:`link${u_(r)}`});o.push(a)}return o}(t.config.get("link.decorators")));this._enableAutomaticDecorators(e.filter(n=>n.mode===vu)),this._enableManualDecorators(e.filter(n=>n.mode==="manual")),t.plugins.get(Id).registerAttribute("linkHref"),function(n,o,r,s){let a=n.editing.view,c=new Set;a.document.registerPostFixer(l=>{let d=n.model.document.selection,h=!1;if(d.hasAttribute(o)){let u=In(d.getFirstPosition(),o,d.getAttribute(o),n.model),g=n.editing.mapper.toViewRange(u);for(let m of g.getItems())m.is("element",r)&&!m.hasClass(s)&&(l.addClass(s,m),c.add(m),h=!0)}return h}),n.conversion.for("editingDowncast").add(l=>{function d(){a.change(h=>{for(let u of c.values())h.removeClass(s,u),c.delete(u)})}l.on("insert",d,{priority:"highest"}),l.on("remove",d,{priority:"highest"}),l.on("attribute",d,{priority:"highest"}),l.on("selection",d,{priority:"highest"})})}(t,"linkHref","a","ck-link_selected"),this._enableLinkOpen(),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(t){let e=this.editor,n=e.commands.get("link").automaticDecorators;e.config.get("link.addTargetToExternalLinks")&&n.add({id:"linkIsExternal",mode:vu,callback:o=>A_.test(o),attributes:{target:"_blank",rel:"noopener noreferrer"}}),n.add(t),n.length&&e.conversion.for("downcast").add(n.getDispatcher())}_enableManualDecorators(t){if(!t.length)return;let e=this.editor,n=e.commands.get("link").manualDecorators;t.forEach(o=>{e.model.schema.extend("$text",{allowAttributes:o.id}),o=new _u(o),n.add(o),e.conversion.for("downcast").attributeToElement({model:o.id,view:(r,{writer:s,schema:a},{item:c})=>{if((c.is("selection")||a.isInline(c))&&r){let l=s.createAttributeElement("a",o.attributes,{priority:5});o.classes&&s.addClass(o.classes,l);for(let d in o.styles)s.setStyle(d,o.styles[d],l);return s.setCustomProperty("link",!0,l),l}}}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",...o._createPattern()},model:{key:o.id}})})}_enableLinkOpen(){let t=this.editor,e=t.editing.view.document;this.listenTo(e,"click",(n,o)=>{if(!(f.isMac?o.domEvent.metaKey:o.domEvent.ctrlKey))return;let r=o.domTarget;if(r.tagName.toLowerCase()!="a"&&(r=r.closest("a")),!r)return;let s=r.getAttribute("href");s&&(n.stop(),o.preventDefault(),Au(s))},{context:"$capture"}),this.listenTo(e,"keydown",(n,o)=>{let r=t.commands.get("link").value;r&&o.keyCode===W.enter&&o.altKey&&(n.stop(),Au(r))})}_enableInsertContentSelectionAttributesFixer(){let t=this.editor.model,e=t.document.selection;this.listenTo(t,"insertContent",()=>{let n=e.anchor.nodeBefore,o=e.anchor.nodeAfter;e.hasAttribute("linkHref")&&n&&n.hasAttribute("linkHref")&&(o&&o.hasAttribute("linkHref")||t.change(r=>{Jr(r,Xr(t.schema))}))},{priority:"low"})}_enableClickingAfterLink(){let t=this.editor,e=t.model;t.editing.view.addObserver(fr);let n=!1;this.listenTo(t.editing.view.document,"mousedown",()=>{n=!0}),this.listenTo(t.editing.view.document,"selectionChange",()=>{if(!n)return;n=!1;let o=e.document.selection;if(!o.isCollapsed||!o.hasAttribute("linkHref"))return;let r=o.getFirstPosition(),s=In(r,"linkHref",o.getAttribute("linkHref"),e);(r.isTouching(s.start)||r.isTouching(s.end))&&e.change(a=>{Jr(a,Xr(e.schema))})})}_enableTypingOverLink(){let t=this.editor,e=t.editing.view,n,o;this.listenTo(e.document,"delete",()=>{o=!0},{priority:"high"}),this.listenTo(t.model,"deleteContent",()=>{let r=t.model.document.selection;r.isCollapsed||(o?o=!1:yu(t)&&function(s){let a=s.document.selection,c=a.getFirstPosition(),l=a.getLastPosition(),d=c.nodeAfter;if(!d||!d.is("$text")||!d.hasAttribute("linkHref"))return!1;let h=l.textNode||l.nodeBefore;return d===h?!0:In(c,"linkHref",d.getAttribute("linkHref"),s).containsRange(s.createRange(c,l),!0)}(t.model)&&(n=r.getAttributes()))},{priority:"high"}),this.listenTo(t.model,"insertContent",(r,[s])=>{o=!1,yu(t)&&n&&(t.model.change(a=>{for(let[c,l]of n)a.setAttribute(c,l,s)}),n=null)},{priority:"high"})}_handleDeleteContentAfterLink(){let t=this.editor,e=t.model,n=e.document.selection,o=t.editing.view,r=!1,s=!1;this.listenTo(o.document,"delete",(a,c)=>{s=c.direction==="backward"},{priority:"high"}),this.listenTo(e,"deleteContent",()=>{r=!1;let a=n.getFirstPosition(),c=n.getAttribute("linkHref");if(!c)return;let l=In(a,"linkHref",c,e);r=l.containsPosition(a)||l.end.isEqual(a)},{priority:"high"}),this.listenTo(e,"deleteContent",()=>{s&&(s=!1,r||t.model.enqueueChange(a=>{Jr(a,Xr(e.schema))}))},{priority:"low"})}}function Jr(i,t){i.removeSelectionAttribute("linkHref");for(let e of t)i.removeSelectionAttribute(e)}function yu(i){return i.model.change(t=>t.batch).isTyping}function Xr(i){return i.getDefinition("$text").allowAttributes.filter(t=>t.startsWith("link"))}var xu=P(7754),C_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(xu.Z,C_),xu.Z.locals;class v_ extends H{constructor(t,e){super(t);let n=t.t;this.focusTracker=new Kt,this.keystrokes=new de,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),wt.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("Cancel"),wt.cancel,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(e),this.children=this._createFormChildren(e.manualDecorators),this._focusables=new Je,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});let o=["ck","ck-link-form","ck-responsive-form"];e.manualDecorators.length&&o.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:o,tabindex:"-1"},children:this.children}),yr(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((t,e)=>(t[e.name]=e.isOn,t),{})}render(){super.render(),xr({view:this}),[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createUrlInput(){let t=this.locale.t,e=new Mr(this.locale,Sr);return e.label=t("Link URL"),e}_createButton(t,e,n,o){let r=new st(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),o&&r.delegate("execute").to(this,o),r}_createManualDecoratorSwitches(t){let e=this.createCollection();for(let n of t.manualDecorators){let o=new $o(this.locale);o.set({name:n.id,label:n.label,withText:!0}),o.bind("isOn").toMany([n,t],"value",(r,s)=>s===void 0&&r===void 0?n.defaultValue:r),o.on("execute",()=>{n.set("value",!o.isOn)}),e.add(o)}return e}_createFormChildren(t){let e=this.createCollection();if(e.add(this.urlInputView),t.length){let n=new H;n.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(o=>({tag:"li",children:[o],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),e.add(n)}return e.add(this.saveButtonView),e.add(this.cancelButtonView),e}}var Eu=P(2347),y_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Eu.Z,y_),Eu.Z.locals;class x_ extends H{constructor(t){super(t);let e=t.t;this.focusTracker=new Kt,this.keystrokes=new de,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(e("Edit link"),wt.pencil,"edit"),this.set("href"),this._focusables=new Je,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){let o=new st(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.delegate("execute").to(this,n),o}_createPreviewButton(){let t=new st(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("Open link in new tab")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",o=>o&&ku(o)),target:"_blank",rel:"noopener noreferrer"}}),t.bind("label").to(this,"href",o=>o||n("This link has no URL")),t.bind("isEnabled").to(this,"href",o=>!!o),t.template.tag="a",t.template.eventListeners={},t}}let we="link-ui";class E_ extends S{static get requires(){return[Ko]}static get pluginName(){return"LinkUI"}init(){let t=this.editor;t.editing.view.addObserver(ib),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(Ko),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),t.conversion.for("editingDowncast").markerToHighlight({model:we,view:{classes:["ck-fake-link-selection"]}}),t.conversion.for("editingDowncast").markerToElement({model:we,view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){let t=this.editor,e=new x_(t.locale),n=t.commands.get("link"),o=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(o),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(r,s)=>{this._hideUI(),s()}),e.keystrokes.set(Qr,(r,s)=>{this._addFormView(),s()}),e}_createFormView(){let t=this.editor,e=t.commands.get("link"),n=t.config.get("link.defaultProtocol"),o=new v_(t.locale,e);return o.urlInputView.fieldView.bind("value").to(e,"value"),o.urlInputView.bind("isReadOnly").to(e,"isEnabled",r=>!r),o.saveButtonView.bind("isEnabled").to(e),this.listenTo(o,"submit",()=>{let{value:r}=o.urlInputView.fieldView.element,s=bu(r,n);t.execute("link",s,o.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(o,"cancel",()=>{this._closeFormView()}),o.keystrokes.set("Esc",(r,s)=>{this._closeFormView(),s()}),o}_createToolbarLinkButton(){let t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(Qr,(o,r)=>{r(),e.isEnabled&&this._showUI(!0)}),t.ui.componentFactory.add("link",o=>{let r=new st(o);return r.isEnabled=!0,r.label=n("Link"),r.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',r.keystroke=Qr,r.tooltip=!0,r.isToggleable=!0,r.bind("isEnabled").to(e,"isEnabled"),r.bind("isOn").to(e,"value",s=>!!s),this.listenTo(r,"execute",()=>this._showUI(!0)),r})}_enableUserBalloonInteractions(){let t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(e,n)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),n())},{priority:"high"}),this.editor.keystrokes.set("Esc",(e,n)=>{this._isUIVisible&&(this._hideUI(),n())}),vr({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;let t=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=t.value||""}_closeFormView(){let t=this.editor.commands.get("link");t.restoreManualDecoratorStates(),t.value!==void 0?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(t=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),t&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),t&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;let t=this.editor;this.stopListening(t.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){let t=this.editor,e=t.editing.view.document,n=this._getSelectedLinkElement(),o=s(),r=()=>{let a=this._getSelectedLinkElement(),c=s();n&&!a||!n&&c!==o?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=a,o=c};function s(){return e.selection.focus.getAncestors().reverse().find(a=>a.is("element"))}this.listenTo(t.ui,"update",r),this.listenTo(this._balloon,"change:visibleView",r)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){let t=this.editor.editing.view,e=this.editor.model,n=t.document,o=null;if(e.markers.has(we)){let r=Array.from(this.editor.editing.mapper.markerNameToElements(we)),s=t.createRange(t.createPositionBefore(r[0]),t.createPositionAfter(r[r.length-1]));o=t.domConverter.viewRangeToDom(s)}else o=()=>{let r=this._getSelectedLinkElement();return r?t.domConverter.mapViewToDom(r):t.domConverter.viewRangeToDom(n.selection.getFirstRange())};return{target:o}}_getSelectedLinkElement(){let t=this.editor.editing.view,e=t.document.selection,n=e.getSelectedElement();if(e.isCollapsed||n&&pt(n))return ts(e.getFirstPosition());{let o=e.getFirstRange().getTrimmed(),r=ts(o.start),s=ts(o.end);return r&&r==s&&t.createRangeIn(r).getTrimmed().isEqual(o)?r:null}}_showFakeVisualSelection(){let t=this.editor.model;t.change(e=>{let n=t.document.selection.getFirstRange();if(t.markers.has(we))e.updateMarker(we,{range:n});else if(n.start.isAtEnd){let o=n.start.getLastMatchingPosition(({item:r})=>!t.schema.isContent(r),{boundaries:n});e.addMarker(we,{usingOperation:!1,affectsData:!1,range:e.createRange(o,n.end)})}else e.addMarker(we,{usingOperation:!1,affectsData:!1,range:n})})}_hideFakeVisualSelection(){let t=this.editor.model;t.markers.has(we)&&t.change(e=>{e.removeMarker(we)})}}function ts(i){return i.getAncestors().find(t=>{return(e=t).is("attributeElement")&&!!e.getCustomProperty("link");var e})}let D_=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class I_ extends S{static get requires(){return[Be]}static get pluginName(){return"AutoLink"}init(){let t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("element","codeBlock")}),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){let t=this.editor,e=new Dd(t.model,n=>{if(!function(r){return r.length>4&&r[r.length-1]===" "&&r[r.length-2]!==" "}(n))return;let o=Du(n.substr(0,n.length-1));return o?{url:o}:void 0});e.on("matched:data",(n,o)=>{let{batch:r,range:s,url:a}=o;if(!r.isTyping)return;let c=s.end.getShiftedBy(-1),l=c.getShiftedBy(-a.length),d=t.model.createRange(l,c);this._applyAutoLink(a,d)}),e.bind("isEnabled").to(this)}_enableEnterHandling(){let t=this.editor,e=t.model,n=t.commands.get("enter");n&&n.on("execute",()=>{let o=e.document.selection.getFirstPosition();if(!o.parent.previousSibling)return;let r=e.createRangeIn(o.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(r)})}_enableShiftEnterHandling(){let t=this.editor,e=t.model,n=t.commands.get("shiftEnter");n&&n.on("execute",()=>{let o=e.document.selection.getFirstPosition(),r=e.createRange(e.createPositionAt(o.parent,0),o.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(r)})}_checkAndApplyAutoLinkOnRange(t){let e=this.editor.model,{text:n,range:o}=Ed(t,e),r=Du(n);if(r){let s=e.createRange(o.end.getShiftedBy(-r.length),o.end);this._applyAutoLink(r,s)}}_applyAutoLink(t,e){let n=this.editor.model,o=bu(t,this.editor.config.get("link.defaultProtocol"));this.isEnabled&&function(r,s){return s.schema.checkAttributeInSelection(s.createSelection(r),"linkHref")}(e,n)&&wu(o)&&!function(r){let s=r.start.nodeAfter;return s&&s.hasAttribute("linkHref")}(e)&&this._persistAutoLink(o,e)}_persistAutoLink(t,e){let n=this.editor.model,o=this.editor.plugins.get("Delete");n.enqueueChange(r=>{r.setAttribute("linkHref",t,e),n.enqueueChange(()=>{o.requestUndoOnBackspace()})})}}function Du(i){let t=D_.exec(i);return t?t[2]:null}class Iu extends U{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){let e=this.editor.model,n=e.document,o=Array.from(n.selection.getSelectedBlocks()).filter(s=>Mu(s,e.schema)),r=t.forceValue!==void 0?!t.forceValue:this.value;e.change(s=>{if(r){let a=o[o.length-1].nextSibling,c=Number.POSITIVE_INFINITY,l=[];for(;a&&a.name=="listItem"&&a.getAttribute("listIndent")!==0;){let d=a.getAttribute("listIndent");d<c&&(c=d);let h=d-c;l.push({element:a,listIndent:h}),a=a.nextSibling}l=l.reverse();for(let d of l)s.setAttribute("listIndent",d.listIndent,d.element)}if(!r){let a=Number.POSITIVE_INFINITY;for(let c of o)c.is("element","listItem")&&c.getAttribute("listIndent")<a&&(a=c.getAttribute("listIndent"));a=a===0?1:a,Tu(o,!0,a),Tu(o,!1,a)}for(let a of o.reverse())r&&a.name=="listItem"?s.rename(a,"paragraph"):r||a.name=="listItem"?r||a.name!="listItem"||a.getAttribute("listType")==this.type||s.setAttribute("listType",this.type,a):(s.setAttributes({listType:this.type,listIndent:0},a),s.rename(a,"listItem"));this.fire("_executeCleanup",o)})}_getValue(){let t=vt(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("element","listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;let t=this.editor.model.document.selection,e=this.editor.model.schema,n=vt(t.getSelectedBlocks());return!!n&&Mu(n,e)}}function Tu(i,t,e){let n=t?i[0]:i[i.length-1];if(n.is("element","listItem")){let o=n[t?"previousSibling":"nextSibling"],r=n.getAttribute("listIndent");for(;o&&o.is("element","listItem")&&o.getAttribute("listIndent")>=e;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&i[t?"unshift":"push"](o),o=o[t?"previousSibling":"nextSibling"]}}function Mu(i,t){return t.checkChild(i.parent,"listItem")&&!t.isObject(i)}class Su extends U{constructor(t,e){super(t),this._indentBy=e=="forward"?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){let t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks());t.change(o=>{let r=n[n.length-1],s=r.nextSibling;for(;s&&s.name=="listItem"&&s.getAttribute("listIndent")>r.getAttribute("listIndent");)n.push(s),s=s.nextSibling;this._indentBy<0&&(n=n.reverse());for(let a of n){let c=a.getAttribute("listIndent")+this._indentBy;c<0?o.rename(a,"paragraph"):o.setAttribute("listIndent",c,a)}this.fire("_executeCleanup",n)})}_checkEnabled(){let t=vt(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("element","listItem"))return!1;if(this._indentBy>0){let e=t.getAttribute("listIndent"),n=t.getAttribute("listType"),o=t.previousSibling;for(;o&&o.is("element","listItem")&&o.getAttribute("listIndent")>=e;){if(o.getAttribute("listIndent")==e)return o.getAttribute("listType")==n;o=o.previousSibling}return!1}return!0}}function T_(i,t){let e=t.mapper,n=t.writer,o=i.getAttribute("listType")=="numbered"?"ol":"ul",r=function(a){let c=a.createContainerElement("li");return c.getFillerOffset=N_,c}(n),s=n.createContainerElement(o,null);return n.insert(n.createPositionAt(s,0),r),e.bindElements(i,r),r}function Nu(i,t,e,n){let o=t.parent,r=e.mapper,s=e.writer,a=r.toViewPosition(n.createPositionBefore(i)),c=Pu(i.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:i.getAttribute("listIndent")}),l=i.previousSibling;if(c&&c.getAttribute("listIndent")==i.getAttribute("listIndent")){let d=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(d))}else if(l&&l.name=="listItem"){a=r.toViewPosition(n.createPositionAt(l,"end"));let d=r.findMappedViewAncestor(a),h=function(u){for(let g of u.getChildren())if(g.name=="ul"||g.name=="ol")return g;return null}(d);a=h?s.createPositionBefore(h):s.createPositionAt(d,"end")}else a=r.toViewPosition(n.createPositionBefore(i));if(a=Bu(a),s.insert(a,o),l&&l.name=="listItem"){let d=r.toViewElement(l),h=s.createRange(s.createPositionAt(d,0),a).getWalker({ignoreElementEnd:!0});for(let u of h)if(u.item.is("element","li")){let g=s.breakContainer(s.createPositionBefore(u.item)),m=u.item.parent,p=s.createPositionAt(t,"end");Jt(s,p.nodeBefore,p.nodeAfter),s.move(s.createRangeOn(m),p),h.position=g}}else{let d=o.nextSibling;if(d&&(d.is("element","ul")||d.is("element","ol"))){let h=null;for(let u of d.getChildren()){let g=r.toModelElement(u);if(!(g&&g.getAttribute("listIndent")>i.getAttribute("listIndent")))break;h=u}h&&(s.breakContainer(s.createPositionAfter(h)),s.move(s.createRangeOn(h.parent),s.createPositionAt(t,"end")))}}Jt(s,o,o.nextSibling),Jt(s,o.previousSibling,o)}function Jt(i,t,e){return!t||!e||t.name!="ul"&&t.name!="ol"||t.name!=e.name||t.getAttribute("class")!==e.getAttribute("class")?null:i.mergeContainers(i.createPositionAfter(t))}function Bu(i){return i.getLastMatchingPosition(t=>t.item.is("uiElement"))}function Pu(i,t){let e=!!t.sameIndent,n=!!t.smallerIndent,o=t.listIndent,r=i;for(;r&&r.name=="listItem";){let s=r.getAttribute("listIndent");if(e&&o==s||n&&o>s)return r;r=t.direction==="forward"?r.nextSibling:r.previousSibling}return null}function zu(i,t,e,n){i.ui.componentFactory.add(t,o=>{let r=i.commands.get(t),s=new st(o);return s.set({label:e,icon:n,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{i.execute(t),i.editing.view.focus()}),s})}function es(i,t){let e=[],n=i.parent,o={ignoreElementEnd:!1,startPosition:i,shallow:!0,direction:t},r=n.getAttribute("listIndent"),s=[...new fe(o)].filter(a=>a.item.is("element")).map(a=>a.item);for(let a of s){if(!a.is("element","listItem")||a.getAttribute("listIndent")<r)break;if(!(a.getAttribute("listIndent")>r)){if(a.getAttribute("listType")!==n.getAttribute("listType")||a.getAttribute("listStyle")!==n.getAttribute("listStyle")||a.getAttribute("listReversed")!==n.getAttribute("listReversed")||a.getAttribute("listStart")!==n.getAttribute("listStart"))break;t==="backward"?e.unshift(a):e.push(a)}}return e}let M_=["disc","circle","square"],S_=["decimal","decimal-leading-zero","lower-roman","upper-roman","lower-latin","upper-latin"];function N_(){let i=!this.isEmpty&&(this.getChild(0).name=="ul"||this.getChild(0).name=="ol");return this.isEmpty||i?0:Za.call(this)}class B_ extends S{static get pluginName(){return"ListUtils"}getListTypeFromListStyleType(t){return function(e){return M_.includes(e)?"bulleted":S_.includes(e)?"numbered":null}(t)}getSelectedListItems(t){return function(e){let n=[...e.document.selection.getSelectedBlocks()].filter(o=>o.is("element","listItem")).map(o=>{let r=e.change(s=>s.createPositionAt(o,0));return[...es(r,"backward"),...es(r,"forward")]}).flat();return n=[...new Set(n)],n}(t)}getSiblingNodes(t,e){return es(t,e)}}function Lu(i){return(t,e,n)=>{let o=n.consumable;if(!o.test(e.item,"insert")||!o.test(e.item,"attribute:listType")||!o.test(e.item,"attribute:listIndent"))return;o.consume(e.item,"insert"),o.consume(e.item,"attribute:listType"),o.consume(e.item,"attribute:listIndent");let r=e.item;Nu(r,T_(r,n),n,i)}}function P_(i,t,e){if(!e.consumable.test(t.item,i.name))return;let n=e.mapper.toViewElement(t.item),o=e.writer;o.breakContainer(o.createPositionBefore(n)),o.breakContainer(o.createPositionAfter(n));let r=n.parent,s=t.attributeNewValue=="numbered"?"ol":"ul";o.rename(s,r)}function z_(i,t,e){e.consumable.consume(t.item,i.name);let n=e.mapper.toViewElement(t.item).parent,o=e.writer;Jt(o,n,n.nextSibling),Jt(o,n.previousSibling,n)}function Ou(i,t,e){if(e.consumable.test(t.item,i.name)&&t.item.name!="listItem"){let n=e.mapper.toViewPosition(t.range.start),o=e.writer,r=[];for(;(n.parent.name=="ul"||n.parent.name=="ol")&&(n=o.breakContainer(n),n.parent.name=="li");){let s=n,a=o.createPositionAt(n.parent,"end");if(!s.isEqual(a)){let c=o.remove(o.createRange(s,a));r.push(c)}n=o.createPositionAfter(n.parent)}if(r.length>0){for(let s=0;s<r.length;s++){let a=n.nodeBefore;if(n=o.insert(n,r[s]).end,s>0){let c=Jt(o,a,a.nextSibling);c&&c.parent==a&&n.offset--}}Jt(o,n.nodeBefore,n.nodeAfter)}}}function L_(i,t,e){let n=e.mapper.toViewPosition(t.position),o=n.nodeBefore,r=n.nodeAfter;Jt(e.writer,o,r)}function O_(i,t,e){if(e.consumable.consume(t.viewItem,{name:!0})){let n=e.writer,o=n.createElement("listItem"),r=function(c){let l=0,d=c.parent;for(;d;){if(d.is("element","li"))l++;else{let h=d.previousSibling;h&&h.is("element","li")&&l++}d=d.parent}return l}(t.viewItem);n.setAttribute("listIndent",r,o);let s=t.viewItem.parent&&t.viewItem.parent.name=="ol"?"numbered":"bulleted";if(n.setAttribute("listType",s,o),!e.safeInsert(o,t.modelCursor))return;let a=function(c,l,d){let{writer:h,schema:u}=d,g=h.createPositionAfter(c);for(let m of l)if(m.name=="ul"||m.name=="ol")g=d.convertItem(m,g).modelCursor;else{let p=d.convertItem(m,h.createPositionAt(c,"end")),k=p.modelRange.start.nodeAfter;k&&k.is("element")&&!u.checkChild(c,k.name)&&(c=p.modelCursor.parent.is("element","listItem")?p.modelCursor.parent:F_(p.modelCursor),g=h.createPositionAfter(c))}return g}(o,t.viewItem.getChildren(),e);t.modelRange=n.createRange(t.modelCursor,a),e.updateConversionResult(o,t)}}function Ru(i,t,e){if(e.consumable.test(t.viewItem,{name:!0})){let n=Array.from(t.viewItem.getChildren());for(let o of n)!(o.is("element","li")||Nn(o))&&o._remove()}}function R_(i,t,e){if(e.consumable.test(t.viewItem,{name:!0})){if(t.viewItem.childCount===0)return;let n=[...t.viewItem.getChildren()],o=!1;for(let r of n)o&&!Nn(r)&&r._remove(),Nn(r)&&(o=!0)}}function ju(i){return(t,e)=>{if(e.isPhantom)return;let n=e.modelPosition.nodeBefore;if(n&&n.is("element","listItem")){let o=e.mapper.toViewElement(n),r=o.getAncestors().find(Nn),s=i.createPositionAt(o,0).getWalker();for(let a of s){if(a.type=="elementStart"&&a.item.is("element","li")){e.viewPosition=a.previousPosition;break}if(a.type=="elementEnd"&&a.item==r){e.viewPosition=a.nextPosition;break}}}}}function j_(i,[t,e,n]){let o,r=t.is("documentFragment")?t.getChild(0):t;if(o=e?this.createSelection(e,n):this.document.selection,r&&r.is("element","listItem")){let s=o.getFirstPosition(),a=null;if(s.parent.is("element","listItem")?a=s.parent:s.nodeBefore&&s.nodeBefore.is("element","listItem")&&(a=s.nodeBefore),a){let c=a.getAttribute("listIndent");if(c>0)for(;r&&r.is("element","listItem");)r._setAttribute("listIndent",r.getAttribute("listIndent")+c),r=r.nextSibling}}}function F_(i){let t=new fe({startPosition:i}),e;do e=t.next();while(!e.value.item.is("element","listItem"));return e.value.item}function Fu(i,t,e,n,o,r){let s=Pu(t.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:i,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null,d;if(s)if(l==i){let h=a.toViewElement(s).parent;d=c.createPositionAfter(h)}else{let h=r.createPositionAt(s,"end");d=a.toViewPosition(h)}else d=e;d=Bu(d);for(let h of[...n.getChildren()])Nn(h)&&(d=c.move(c.createRangeOn(h),d).end,Jt(c,h,h.nextSibling),Jt(c,h.previousSibling,h))}function Nn(i){return i.is("element","ol")||i.is("element","ul")}class V_ extends S{static get pluginName(){return"ListEditing"}static get requires(){return[Xo,Be,B_]}init(){let t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});let e=t.data,n=t.editing;var o;t.model.document.registerPostFixer(s=>function(a,c){let l=a.document.differ.getChanges(),d=new Map,h=!1;for(let p of l)if(p.type=="insert"&&p.name=="listItem")u(p.position);else if(p.type=="insert"&&p.name!="listItem"){if(p.name!="$text"){let k=p.position.nodeAfter;k.hasAttribute("listIndent")&&(c.removeAttribute("listIndent",k),h=!0),k.hasAttribute("listType")&&(c.removeAttribute("listType",k),h=!0),k.hasAttribute("listStyle")&&(c.removeAttribute("listStyle",k),h=!0),k.hasAttribute("listReversed")&&(c.removeAttribute("listReversed",k),h=!0),k.hasAttribute("listStart")&&(c.removeAttribute("listStart",k),h=!0);for(let b of Array.from(a.createRangeIn(k)).filter(A=>A.item.is("element","listItem")))u(b.previousPosition)}u(p.position.getShiftedBy(p.length))}else p.type=="remove"&&p.name=="listItem"?u(p.position):(p.type=="attribute"&&p.attributeKey=="listIndent"||p.type=="attribute"&&p.attributeKey=="listType")&&u(p.range.start);for(let p of d.values())g(p),m(p);return h;function u(p){let k=p.nodeBefore;if(k&&k.is("element","listItem")){let b=k;if(d.has(b))return;for(let A=b.previousSibling;A&&A.is("element","listItem");A=b.previousSibling)if(b=A,d.has(b))return;d.set(k,b)}else{let b=p.nodeAfter;b&&b.is("element","listItem")&&d.set(b,b)}}function g(p){let k=0,b=null;for(;p&&p.is("element","listItem");){let A=p.getAttribute("listIndent");if(A>k){let y;b===null?(b=A-k,y=k):(b>A&&(b=A),y=A-b),c.setAttribute("listIndent",y,p),h=!0}else b=null,k=p.getAttribute("listIndent")+1;p=p.nextSibling}}function m(p){let k=[],b=null;for(;p&&p.is("element","listItem");){let A=p.getAttribute("listIndent");if(b&&b.getAttribute("listIndent")>A&&(k=k.slice(0,A+1)),A!=0)if(k[A]){let y=k[A];p.getAttribute("listType")!=y&&(c.setAttribute("listType",y,p),h=!0)}else k[A]=p.getAttribute("listType");b=p,p=p.nextSibling}}}(t.model,s)),n.mapper.registerViewToModelLength("li",ns),e.mapper.registerViewToModelLength("li",ns),n.mapper.on("modelToViewPosition",ju(n.view)),n.mapper.on("viewToModelPosition",(o=t.model,(s,a)=>{let c=a.viewPosition,l=c.parent,d=a.mapper;if(l.name=="ul"||l.name=="ol"){if(c.isAtEnd){let h=d.toModelElement(c.nodeBefore),u=d.getModelLength(c.nodeBefore);a.modelPosition=o.createPositionBefore(h).getShiftedBy(u)}else{let h=d.toModelElement(c.nodeAfter);a.modelPosition=o.createPositionBefore(h)}s.stop()}else if(l.name=="li"&&c.nodeBefore&&(c.nodeBefore.name=="ul"||c.nodeBefore.name=="ol")){let h=d.toModelElement(l),u=1,g=c.nodeBefore;for(;g&&Nn(g);)u+=d.getModelLength(g),g=g.previousSibling;a.modelPosition=o.createPositionBefore(h).getShiftedBy(u),s.stop()}})),e.mapper.on("modelToViewPosition",ju(n.view)),t.conversion.for("editingDowncast").add(s=>{s.on("insert",Ou,{priority:"high"}),s.on("insert:listItem",Lu(t.model)),s.on("attribute:listType:listItem",P_,{priority:"high"}),s.on("attribute:listType:listItem",z_,{priority:"low"}),s.on("attribute:listIndent:listItem",function(a){return(c,l,d)=>{if(!d.consumable.consume(l.item,"attribute:listIndent"))return;let h=d.mapper.toViewElement(l.item),u=d.writer;u.breakContainer(u.createPositionBefore(h)),u.breakContainer(u.createPositionAfter(h));let g=h.parent,m=g.previousSibling,p=u.createRangeOn(g);u.remove(p),m&&m.nextSibling&&Jt(u,m,m.nextSibling),Fu(l.attributeOldValue+1,l.range.start,p.start,h,d,a),Nu(l.item,h,d,a);for(let k of l.item.getChildren())d.consumable.consume(k,"insert")}}(t.model)),s.on("remove:listItem",function(a){return(c,l,d)=>{let h=d.mapper.toViewPosition(l.position).getLastMatchingPosition(b=>!b.item.is("element","li")).nodeAfter,u=d.writer;u.breakContainer(u.createPositionBefore(h)),u.breakContainer(u.createPositionAfter(h));let g=h.parent,m=g.previousSibling,p=u.createRangeOn(g),k=u.remove(p);m&&m.nextSibling&&Jt(u,m,m.nextSibling),Fu(d.mapper.toModelElement(h).getAttribute("listIndent")+1,l.position,p.start,h,d,a);for(let b of u.createRangeIn(k).getItems())d.mapper.unbindViewElement(b);c.stop()}}(t.model)),s.on("remove",L_,{priority:"low"})}),t.conversion.for("dataDowncast").add(s=>{s.on("insert",Ou,{priority:"high"}),s.on("insert:listItem",Lu(t.model))}),t.conversion.for("upcast").add(s=>{s.on("element:ul",Ru,{priority:"high"}),s.on("element:ol",Ru,{priority:"high"}),s.on("element:li",R_,{priority:"high"}),s.on("element:li",O_)}),t.model.on("insertContent",j_,{priority:"high"}),t.commands.add("numberedList",new Iu(t,"numbered")),t.commands.add("bulletedList",new Iu(t,"bulleted")),t.commands.add("indentList",new Su(t,"forward")),t.commands.add("outdentList",new Su(t,"backward"));let r=n.view.document;this.listenTo(r,"enter",(s,a)=>{let c=this.editor.model.document,l=c.selection.getLastPosition().parent;c.selection.isCollapsed&&l.name=="listItem"&&l.isEmpty&&(this.editor.execute("outdentList"),a.preventDefault(),s.stop())},{context:"li"}),this.listenTo(r,"delete",(s,a)=>{if(a.direction!=="backward")return;let c=this.editor.model.document.selection;if(!c.isCollapsed)return;let l=c.getFirstPosition();if(!l.isAtStart)return;let d=l.parent;d.name==="listItem"&&(d.previousSibling&&d.previousSibling.name==="listItem"||(this.editor.execute("outdentList"),a.preventDefault(),s.stop()))},{context:"li"}),this.listenTo(t.editing.view.document,"tab",(s,a)=>{let c=a.shiftKey?"outdentList":"indentList";this.editor.commands.get(c).isEnabled&&(t.execute(c),a.stopPropagation(),a.preventDefault(),s.stop())},{context:"li"})}afterInit(){let t=this.editor.commands,e=t.get("indent"),n=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),n&&n.registerChildCommand(t.get("outdentList"))}}function ns(i){let t=1;for(let e of i.getChildren())if(e.name=="ul"||e.name=="ol")for(let n of e.getChildren())t+=ns(n);return t}class U_ extends S{static get pluginName(){return"ListUI"}init(){let t=this.editor.t;zu(this.editor,"numberedList",t("Numbered List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'),zu(this.editor,"bulletedList",t("Bulleted List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>')}}function Vu(i,t){return n=>{n.on("attribute:url:media",e)};function e(n,o,r){if(!r.consumable.consume(o.item,n.name))return;let s=o.attributeNewValue,a=r.writer,c=r.mapper.toViewElement(o.item),l=[...c.getChildren()].find(h=>h.getCustomProperty("media-content"));a.remove(l);let d=i.getMediaViewElement(a,s,t);a.insert(a.createPositionAt(c,0),d)}}function Uu(i,t,e,n){return i.createContainerElement("figure",{class:"media"},[t.getMediaViewElement(i,e,n),i.createSlot()])}function Hu(i){let t=i.getSelectedElement();return t&&t.is("element","media")?t:null}function Wu(i,t,e,n){i.change(o=>{let r=o.createElement("media",{url:t});i.insertObject(r,e,null,{setSelection:"on",findOptimalPosition:n})})}class H_ extends U{refresh(){let t=this.editor.model,e=t.document.selection,n=Hu(e);this.value=n?n.getAttribute("url"):null,this.isEnabled=function(o){let r=o.getSelectedElement();return!!r&&r.name==="media"}(e)||function(o,r){let a=Fd(o,r).start.parent;return a.isEmpty&&!r.schema.isLimit(a)&&(a=a.parent),r.schema.checkChild(a,"media")}(e,t)}execute(t){let e=this.editor.model,n=e.document.selection,o=Hu(n);o?e.change(r=>{r.setAttribute("url",t,o)}):Wu(e,t,n,!0)}}class W_{constructor(t,e){let n=e.providers,o=e.extraProviders||[],r=new Set(e.removeProviders),s=n.concat(o).filter(a=>{let c=a.name;return c?!r.has(c):(at("media-embed-no-provider-name",{provider:a}),!1)});this.locale=t,this.providerDefinitions=s}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new qu(this.locale);t=t.trim();for(let e of this.providerDefinitions){let n=e.html,o=xt(e.url);for(let r of o){let s=this._getUrlMatches(t,r);if(s)return new qu(this.locale,t,s,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let o=t.replace(/^https?:\/\//,"");return n=o.match(e),n||(o=o.replace(/^www\./,""),n=o.match(e),n||null)}}class qu{constructor(t,e,n,o){this.url=this._getValidUrl(e),this._locale=t,this._match=n,this._previewRenderer=o}getViewElement(t,e){let n={},o;if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");let r=this._getPreviewHtml(e);o=t.createRawElement("div",n,(s,a)=>{a.setContentOf(s,r)})}else this.url&&(n.url=this.url),o=t.createEmptyElement(e.elementName,n);return t.setCustomProperty("media-content",!0,o),o}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){let t=new Xe,e=this._locale.t;return t.content='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',t.viewBox="0 0 64 42",new re({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[t]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url,"data-cke-tooltip-text":e("Open media in new tab")},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]}]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}var Gu=P(7442),q_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Gu.Z,q_),Gu.Z.locals;class si extends S{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{elementName:"oembed",providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)(?:&t=(\d+))?/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)(?:\?t=(\d+))?/,/^youtube\.com\/embed\/([\w-]+)(?:\?start=(\d+))?/,/^youtu\.be\/([\w-]+)(?:\?t=(\d+))?/],html:e=>{let n=e[1],o=e[2];return`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${n}${o?`?start=${o}`:""}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`}},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:[/^google\.com\/maps/,/^goo\.gl\/maps/,/^maps\.google\.com/,/^maps\.app\.goo\.gl/]},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new W_(t.locale,t.config.get("mediaEmbed"))}init(){let t=this.editor,e=t.model.schema,n=t.t,o=t.conversion,r=t.config.get("mediaEmbed.previewsInData"),s=t.config.get("mediaEmbed.elementName"),a=this.registry;t.commands.add("mediaEmbed",new H_(t)),e.register("media",{inheritAllFrom:"$blockObject",allowAttributes:["url"]}),o.for("dataDowncast").elementToStructure({model:"media",view:(c,{writer:l})=>{let d=c.getAttribute("url");return Uu(l,a,d,{elementName:s,renderMediaPreview:d&&r})}}),o.for("dataDowncast").add(Vu(a,{elementName:s,renderMediaPreview:r})),o.for("editingDowncast").elementToStructure({model:"media",view:(c,{writer:l})=>{let d=c.getAttribute("url");return function(h,u,g){return u.setCustomProperty("media",!0,h),Rr(h,u,{label:g})}(Uu(l,a,d,{elementName:s,renderForEditingView:!0}),l,n("media widget"))}}),o.for("editingDowncast").add(Vu(a,{elementName:s,renderForEditingView:!0})),o.for("upcast").elementToElement({view:c=>["oembed",s].includes(c.name)&&c.getAttribute("url")?{name:!0}:null,model:(c,{writer:l})=>{let d=c.getAttribute("url");if(a.hasMedia(d))return l.createElement("media",{url:d})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(c,{writer:l})=>{let d=c.getAttribute("data-oembed-url");if(a.hasMedia(d))return l.createElement("media",{url:d})}}).add(c=>{c.on("element:figure",function(l,d,h){if(!h.consumable.consume(d.viewItem,{name:!0,classes:"media"}))return;let{modelRange:u,modelCursor:g}=h.convertChildren(d.viewItem,d.modelCursor);d.modelRange=u,d.modelCursor=g,vt(u.getItems())||h.consumable.revert(d.viewItem,{name:!0,classes:"media"})})})}}let G_=/^(?:http(s)?:\/\/)?[\w-]+\.[\w-.~:/?#[\]@!$&'()*+,;=%]+$/;class $_ extends S{static get requires(){return[eh,Be,sh]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){let t=this.editor,e=t.model.document;this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",()=>{let n=e.selection.getFirstRange(),o=Mt.fromPosition(n.start);o.stickiness="toPrevious";let r=Mt.fromPosition(n.end);r.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(o,r),o.detach(),r.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(V.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){let n=this.editor,o=n.plugins.get(si).registry,r=new oe(t,e),s=r.getWalker({ignoreElementEnd:!0}),a="";for(let c of s)c.item.is("$textProxy")&&(a+=c.item.data);if(a=a.trim(),!a.match(G_)||!o.hasMedia(a))return void r.detach();n.commands.get("mediaEmbed").isEnabled?(this._positionToInsert=Mt.fromPosition(t),this._timeoutId=V.window.setTimeout(()=>{n.model.change(c=>{let l;this._timeoutId=null,c.remove(r),r.detach(),this._positionToInsert.root.rootName!=="$graveyard"&&(l=this._positionToInsert),Wu(n.model,a,l,!1),this._positionToInsert.detach(),this._positionToInsert=null}),n.plugins.get("Delete").requestUndoOnBackspace()},100)):r.detach()}}var $u=P(9292),Y_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()($u.Z,Y_),$u.Z.locals;class K_ extends H{constructor(t,e){super(e);let n=e.t;this.focusTracker=new Kt,this.keystrokes=new de,this.set("mediaURLInputValue",""),this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),wt.check,"ck-button-save"),this.saveButtonView.type="submit",this.saveButtonView.bind("isEnabled").to(this,"mediaURLInputValue",o=>!!o),this.cancelButtonView=this._createButton(n("Cancel"),wt.cancel,"ck-button-cancel","cancel"),this._focusables=new Je,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form","ck-responsive-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]}),yr(this)}render(){super.render(),xr({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element);let t=e=>e.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(e,n)=>{n.stopPropagation()},{priority:"high"})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(t){this.urlInputView.fieldView.element.value=t.trim()}isValid(){this.resetFormStatus();for(let t of this._validators){let e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){let t=this.locale.t,e=new Mr(this.locale,Sr),n=e.fieldView;return this._urlInputViewInfoDefault=t("Paste the media URL in the input."),this._urlInputViewInfoTip=t("Tip: Paste the URL into the content to embed faster."),e.label=t("Media URL"),e.infoText=this._urlInputViewInfoDefault,n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault,this.mediaURLInputValue=n.element.value.trim()}),e}_createButton(t,e,n,o){let r=new st(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),o&&r.delegate("execute").to(this,o),r}}class Q_ extends S{static get requires(){return[si]}static get pluginName(){return"MediaEmbedUI"}init(){let t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(si).registry;t.ui.componentFactory.add("mediaEmbed",o=>{let r=Se(o),s=new K_(function(a,c){return[l=>{if(!l.url.length)return a("The URL must not be empty.")},l=>{if(!c.hasMedia(l.url))return a("This media URL is not supported.")}]}(t.t,n),t.locale);return this._setUpDropdown(r,s,e,t),this._setUpForm(r,s,e),r})}_setUpDropdown(t,e,n){let o=this.editor,r=o.t,s=t.buttonView;t.bind("isEnabled").to(n),t.panelView.children.add(e),s.set({label:r("Insert media"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z"/></svg>',tooltip:!0}),s.on("open",()=>{e.disableCssTransitions(),e.url=n.value||"",e.urlInputView.fieldView.select(),e.enableCssTransitions()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(o.execute("mediaEmbed",e.url),o.editing.view.focus())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>{o.editing.view.focus()})}_setUpForm(t,e,n){e.delegate("submit","cancel").to(t),e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",o=>!o)}}var Yu=P(4652),Z_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Yu.Z,Z_),Yu.Z.locals;function Ku(i,t,e,{blockElements:n,inlineObjectElements:o}){let r=e.createPositionAt(i,t=="forward"?"after":"before");return r=r.getLastMatchingPosition(({item:s})=>s.is("element")&&!n.includes(s.name)&&!o.includes(s.name),{direction:t}),t=="forward"?r.nodeAfter:r.nodeBefore}function Qu(i,t){return!!i&&i.is("element")&&t.includes(i.name)}function J_(i,t){if(!i.childCount)return;let e=new Cn(i.document),n=function(s,a){let c=a.createRangeIn(s),l=new ge({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),d=[];for(let h of c)if(h.type==="elementStart"&&l.match(h.item)){let u=tC(h.item);d.push({element:h.item,id:u.id,order:u.order,indent:u.indent})}return d}(i,e);if(!n.length)return;let o=null,r=1;n.forEach((s,a)=>{let c=function(m,p){if(!m)return!0;if(m.id!==p.id)return p.indent-m.indent!=1;let k=p.element.previousSibling;if(!k)return!0;return b=k,!(b.is("element","ol")||b.is("element","ul"));var b}(n[a-1],s),l=c?null:n[a-1],d=(u=s,(h=l)?u.indent-h.indent:u.indent-1);var h,u;if(c&&(o=null,r=1),!o||d!==0){let m=function(p,k){let b=new RegExp(`@list l${p.id}:level${p.indent}\\s*({[^}]*)`,"gi"),A=/mso-level-number-format:([^;]{0,100});/gi,y=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,N=b.exec(k),z="decimal",q="ol",K=null;if(N&&N[1]){let yt=A.exec(N[1]);if(yt&&yt[1]&&(z=yt[1].trim(),q=z!=="bullet"&&z!=="image"?"ol":"ul"),z==="bullet"){let Tt=function(Pn){let Ae=function(ye){if(ye.getChild(0).is("$text"))return null;for(let xe of ye.getChildren()){if(!xe.is("element","span"))continue;let zn=xe.getChild(0);return zn.is("$text")?zn:zn.getChild(0)}}(Pn);if(!Ae)return null;let Xt=Ae._data;return Xt==="o"?"circle":Xt==="\xB7"?"disc":Xt==="\xA7"?"square":null}(p.element);Tt&&(z=Tt)}else{let Tt=y.exec(N[1]);Tt&&Tt[1]&&(K=parseInt(Tt[1]))}}return{type:q,startIndex:K,style:X_(z)}}(s,t);if(o){if(s.indent>r){let p=o.getChild(o.childCount-1),k=p.getChild(p.childCount-1);o=Zu(m,k,e),r+=1}else if(s.indent<r){let p=r-s.indent;o=function(k,b){let A=k.getAncestors({parentFirst:!0}),y=null,N=0;for(let z of A)if(z.name!=="ul"&&z.name!=="ol"||N++,N===b){y=z;break}return y}(o,p),r=parseInt(s.indent)}}else o=Zu(m,s.element,e);s.indent<=r&&(o.is("element",m.type)||(o=e.rename(m.type,o)))}let g=function(m,p){return function(k,b){let A=new ge({name:"span",styles:{"mso-list":"Ignore"}}),y=b.createRangeIn(k);for(let N of y)N.type==="elementStart"&&A.match(N.item)&&b.remove(N.item)}(m,p),p.rename("li",m)}(s.element,e);e.appendChild(g,o)})}function X_(i){if(i.startsWith("arabic-leading-zero"))return"decimal-leading-zero";switch(i){case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return i;default:return null}}function Zu(i,t,e){let n=t.parent,o=e.createElement(i.type),r=n.getChildIndex(t)+1;return e.insertChild(r,o,n),i.style&&e.setStyle("list-style-type",i.style,o),i.startIndex&&i.startIndex>1&&e.setAttribute("start",i.startIndex,o),o}function tC(i){let t={},e=i.getStyle("mso-list");if(e){let n=e.match(/(^|\s{1,100})l(\d+)/i),o=e.match(/\s{0,100}lfo(\d+)/i),r=e.match(/\s{0,100}level(\d+)/i);n&&o&&r&&(t.id=n[2],t.order=o[1],t.indent=r[1])}return t}let eC=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class nC{constructor(t){this.document=t}isActive(t){return eC.test(t)}execute(t){let e=new Cn(this.document),{body:n}=t._parsedData;(function(o,r){for(let s of o.getChildren())if(s.is("element","b")&&s.getStyle("font-weight")==="normal"){let a=o.getChildIndex(s);r.remove(s),r.insertChild(a,s.getChildren(),o)}})(n,e),function(o,r){for(let s of r.createRangeIn(o)){let a=s.item;if(a.is("element","li")){let c=a.getChild(0);c&&c.is("element","p")&&r.unwrapElement(c)}}}(n,e),function(o,r){let s=new Bo(r.document.stylesProcessor),a=new Oo(s,{renderingMode:"data"}),c=a.blockElements,l=a.inlineObjectElements,d=[];for(let h of r.createRangeIn(o)){let u=h.item;if(u.is("element","br")){let g=Ku(u,"forward",r,{blockElements:c,inlineObjectElements:l}),m=Ku(u,"backward",r,{blockElements:c,inlineObjectElements:l}),p=Qu(g,c);(Qu(m,c)||p)&&d.push(u)}}for(let h of d)h.hasClass("Apple-interchange-newline")?r.remove(h):r.replace(h,r.createElement("p"))}(n,e),t.content=n}}function oC(i,t){if(!i.childCount)return;let e=new Cn,n=function(r,s){let a=s.createRangeIn(r),c=new ge({name:/v:(.+)/}),l=[];for(let d of a){if(d.type!="elementStart")continue;let h=d.item,u=h.previousSibling&&h.previousSibling.name||null;c.match(h)&&h.getAttribute("o:gfxdata")&&u!=="v:shapetype"&&l.push(d.item.getAttribute("id"))}return l}(i,e);(function(r,s,a){let c=a.createRangeIn(s),l=new ge({name:"img"}),d=[];for(let h of c)if(l.match(h.item)){let u=h.item,g=u.getAttribute("v:shapes")?u.getAttribute("v:shapes").split(" "):[];g.length&&g.every(m=>r.indexOf(m)>-1)?d.push(u):u.getAttribute("src")||d.push(u)}for(let h of d)a.remove(h)})(n,i,e),function(r,s){let a=s.createRangeIn(r),c=new ge({name:/v:(.+)/}),l=[];for(let d of a)d.type=="elementStart"&&c.match(d.item)&&l.push(d.item);for(let d of l)s.remove(d)}(i,e);let o=function(r,s){let a=s.createRangeIn(r),c=new ge({name:"img"}),l=[];for(let d of a)c.match(d.item)&&d.item.getAttribute("src").startsWith("file://")&&l.push(d.item);return l}(i,e);o.length&&function(r,s,a){if(r.length===s.length)for(let c=0;c<r.length;c++){let l=`data:${s[c].type};base64,${iC(s[c].hex)}`;a.setAttribute("src",l,r[c])}}(o,function(r){if(!r)return[];let s=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,a=new RegExp("(?:("+s.source+"))([\\da-fA-F\\s]+)\\}","g"),c=r.match(a),l=[];if(c)for(let d of c){let h=!1;d.includes("\\pngblip")?h="image/png":d.includes("\\jpegblip")&&(h="image/jpeg"),h&&l.push({hex:d.replace(s,"").replace(/[^\da-fA-F]/g,""),type:h})}return l}(t),e)}function iC(i){return btoa(i.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}let rC=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,sC=/xmlns:o="urn:schemas-microsoft-com/i;class aC{constructor(t){this.document=t}isActive(t){return rC.test(t)||sC.test(t)}execute(t){let{body:e,stylesString:n}=t._parsedData;J_(e,n),oC(e,t.dataTransfer.getData("text/rtf")),t.content=e}}function Ju(i){return i.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>e.length===1?" ":Array(e.length+1).join("\xA0 ").substr(0,e.length))}function cC(i,t){let e=new DOMParser,n=function(c){return Ju(Ju(c)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g,"\xA0</").replace(/ <o:p><\/o:p>/g,"\xA0<o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(c){let l="</body>",d="</html>",h=c.indexOf(l);if(h<0)return c;let u=c.indexOf(d,h+l.length);return c.substring(0,h+l.length)+(u>=0?c.substring(u):"")}(i=i.replace(/<!--\[if gte vml 1]>/g,""))),o=e.parseFromString(n,"text/html");(function(c){c.querySelectorAll("span[style*=spacerun]").forEach(l=>{let d=l.innerText.length||0;l.innerText=Array(d+1).join("\xA0 ").substr(0,d)})})(o);let r=o.body.innerHTML,s=function(c,l){let d=new Bo(l),h=new Oo(d,{renderingMode:"data"}),u=c.createDocumentFragment(),g=c.body.childNodes;for(;g.length>0;)u.appendChild(g[0]);return h.domToView(u,{skipComments:!0})}(o,t),a=function(c){let l=[],d=[],h=Array.from(c.getElementsByTagName("style"));for(let u of h)u.sheet&&u.sheet.cssRules&&u.sheet.cssRules.length&&(l.push(u.sheet),d.push(u.innerHTML));return{styles:l,stylesString:d.join(" ")}}(o);return{body:s,bodyString:r,styles:a.styles,stylesString:a.stylesString}}function At(i,t,e,n,o=1){t>o?n.setAttribute(i,t,e):n.removeAttribute(i,e)}function en(i,t,e={}){let n=i.createElement("tableCell",e);return i.insertElement("paragraph",n),i.insert(n,t),n}function os(i,t){let e=t.parent.parent,n=parseInt(e.getAttribute("headingColumns")||0),{column:o}=i.getCellLocation(t);return!!n&&o<n}function lC(){return i=>{i.on("element:table",(t,e,n)=>{let o=e.viewItem;if(!n.consumable.test(o,{name:!0}))return;let{rows:r,headingRows:s,headingColumns:a}=function(d){let h={headingRows:0,headingColumns:0},u=[],g=[],m;for(let p of Array.from(d.getChildren()))if(p.name==="tbody"||p.name==="thead"||p.name==="tfoot"){p.name!=="thead"||m||(m=p);let k=Array.from(p.getChildren()).filter(b=>b.is("element","tr"));for(let b of k)if(b.parent.name==="thead"&&b.parent===m)h.headingRows++,u.push(b);else{g.push(b);let A=dC(b);A>h.headingColumns&&(h.headingColumns=A)}}return h.rows=[...u,...g],h}(o),c={};a&&(c.headingColumns=a),s&&(c.headingRows=s);let l=n.writer.createElement("table",c);if(n.safeInsert(l,e.modelCursor)){if(n.consumable.consume(o,{name:!0}),r.forEach(d=>n.convertItem(d,n.writer.createPositionAt(l,"end"))),n.convertChildren(o,n.writer.createPositionAt(l,"end")),l.isEmpty){let d=n.writer.createElement("tableRow");n.writer.insert(d,n.writer.createPositionAt(l,"end")),en(n.writer,n.writer.createPositionAt(d,"end"))}n.updateConversionResult(l,e)}})}}function Xu(i){return t=>{t.on(`element:${i}`,(e,n,o)=>{if(n.modelRange&&n.viewItem.isEmpty){let r=n.modelRange.start.nodeAfter,s=o.writer.createPositionAt(r,0);o.writer.insertElement("paragraph",s)}},{priority:"low"})}}function dC(i){let t=0,e=0,n=Array.from(i.getChildren()).filter(o=>o.name==="th"||o.name==="td");for(;e<n.length&&n[e].name==="th";){let o=n[e];t+=parseInt(o.getAttribute("colspan")||1),e++}return t}class Z{constructor(t,e={}){this._table=t,this._startRow=e.row!==void 0?e.row:e.startRow||0,this._endRow=e.row!==void 0?e.row:e.endRow,this._startColumn=e.column!==void 0?e.column:e.startColumn||0,this._endColumn=e.column!==void 0?e.column:e.endColumn,this._includeAllSlots=!!e.includeAllSlots,this._skipRows=new Set,this._row=0,this._rowIndex=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){let t=this._table.getChild(this._rowIndex);if(!t||this._isOverEndRow())return{done:!0};if(!t.is("element","tableRow"))return this._rowIndex++,this.next();if(this._isOverEndColumn())return this._advanceToNextRow();let e=null,n=this._getSpanned();if(n)this._includeAllSlots&&!this._shouldSkipSlot()&&(e=this._formatOutValue(n.cell,n.row,n.column));else{let o=t.getChild(this._cellIndex);if(!o)return this._advanceToNextRow();let r=parseInt(o.getAttribute("colspan")||1),s=parseInt(o.getAttribute("rowspan")||1);(r>1||s>1)&&this._recordSpans(o,s,r),this._shouldSkipSlot()||(e=this._formatOutValue(o)),this._nextCellAtColumn=this._column+r}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,e||this.next()}skipRow(t){this._skipRows.add(t)}_advanceToNextRow(){return this._row++,this._rowIndex++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return this._endRow!==void 0&&this._row>this._endRow}_isOverEndColumn(){return this._endColumn!==void 0&&this._column>this._endColumn}_formatOutValue(t,e=this._row,n=this._column){return{done:!1,value:new hC(this,t,e,n)}}_shouldSkipSlot(){let t=this._skipRows.has(this._row),e=this._row<this._startRow,n=this._column<this._startColumn,o=this._endColumn!==void 0&&this._column>this._endColumn;return t||e||n||o}_getSpanned(){let t=this._spannedCells.get(this._row);return t&&t.get(this._column)||null}_recordSpans(t,e,n){let o={cell:t,row:this._row,column:this._column};for(let r=this._row;r<this._row+e;r++)for(let s=this._column;s<this._column+n;s++)r==this._row&&s==this._column||this._markSpannedCell(r,s,o)}_markSpannedCell(t,e,n){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,n)}}class hC{constructor(t,e,n,o){this.cell=e,this.row=t._row,this.column=t._column,this.cellAnchorRow=n,this.cellAnchorColumn=o,this._cellIndex=t._cellIndex,this._rowIndex=t._rowIndex,this._table=t._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}get rowIndex(){return this._rowIndex}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function tg(i,t={}){return(e,{writer:n})=>{let o=e.getAttribute("headingRows")||0,r=[];o>0&&r.push(n.createContainerElement("thead",null,n.createSlot(a=>a.is("element","tableRow")&&a.index<o))),o<i.getRows(e)&&r.push(n.createContainerElement("tbody",null,n.createSlot(a=>a.is("element","tableRow")&&a.index>=o)));let s=n.createContainerElement("figure",{class:"table"},[n.createContainerElement("table",null,r),n.createSlot(a=>!a.is("element","tableRow"))]);return t.asWidget?function(a,c){return c.setCustomProperty("table",!0,a),Rr(a,c,{hasSelectionHandle:!0})}(s,n):s}}function eg(i={}){return(t,{writer:e})=>{let n=t.parent,o=n.parent,r=o.getChildIndex(n),s=new Z(o,{row:r}),a=o.getAttribute("headingRows")||0,c=o.getAttribute("headingColumns")||0;for(let l of s)if(l.cell==t){let d=l.row<a||l.column<c?"th":"td";return i.asWidget?jd(e.createEditableElement(d),e):e.createContainerElement(d)}}}function ng(i={}){return(t,{writer:e,consumable:n,mapper:o})=>{if(t.parent.is("element","tableCell")&&og(t))return i.asWidget?e.createContainerElement("span",{class:"ck-table-bogus-paragraph"}):(n.consume(t,"insert"),void o.bindElements(t,o.toViewElement(t.parent)))}}function og(i){return i.parent.childCount==1&&![...i.getAttributeKeys()].length}class uC extends U{refresh(){let t=this.editor.model,e=t.document.selection,n=t.schema;this.isEnabled=function(o,r){let s=o.getFirstPosition().parent,a=s===s.root?s:s.parent;return r.checkChild(a,"table")}(e,n)}execute(t={}){let e=this.editor.model,n=this.editor.plugins.get("TableUtils"),o=this.editor.config.get("table"),r=o.defaultHeadings.rows,s=o.defaultHeadings.columns;t.headingRows===void 0&&r&&(t.headingRows=r),t.headingColumns===void 0&&s&&(t.headingColumns=s),e.change(a=>{let c=n.createTable(a,t);e.insertObject(c,null,null,{findOptimalPosition:"auto"}),a.setSelection(a.createPositionAt(c.getNodeByPath([0,0,0]),0))})}}class ig extends U{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){let t=this.editor.model.document.selection,e=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(t).length;this.isEnabled=e}execute(){let t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),o=this.order==="above",r=n.getSelectionAffectedTableCells(e),s=n.getRowIndexes(r),a=o?s.first:s.last,c=r[0].findAncestor("table");n.insertRows(c,{at:o?a:a+1,copyStructureFromAbove:!o})}}class rg extends U{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){let t=this.editor.model.document.selection,e=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(t).length;this.isEnabled=e}execute(){let t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),o=this.order==="left",r=n.getSelectionAffectedTableCells(e),s=n.getColumnIndexes(r),a=o?s.first:s.last,c=r[0].findAncestor("table");n.insertColumns(c,{columns:1,at:o?a:a+1})}}class sg extends U{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){let t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=t.length===1}execute(){let t=this.editor.plugins.get("TableUtils"),e=t.getSelectionAffectedTableCells(this.editor.model.document.selection)[0];this.direction==="horizontally"?t.splitCellHorizontally(e,2):t.splitCellVertically(e,2)}}function ag(i,t,e){let{startRow:n,startColumn:o,endRow:r,endColumn:s}=t,a=e.createElement("table"),c=r-n+1;for(let d=0;d<c;d++)e.insertElement("tableRow",a,"end");let l=[...new Z(i,{startRow:n,endRow:r,startColumn:o,endColumn:s,includeAllSlots:!0})];for(let{row:d,column:h,cell:u,isAnchor:g,cellAnchorRow:m,cellAnchorColumn:p}of l){let k=d-n,b=a.getChild(k);if(g){let A=e.cloneElement(u);e.append(A,b),ug(A,d,h,r,s,e)}else(m<n||p<o)&&en(e,e.createPositionAt(b,"end"))}return function(d,h,u,g,m){let p=parseInt(h.getAttribute("headingRows")||0);p>0&&At("headingRows",p-u,d,m,0);let k=parseInt(h.getAttribute("headingColumns")||0);k>0&&At("headingColumns",k-g,d,m,0)}(a,i,n,o,e),a}function cg(i,t,e=0){let n=[],o=new Z(i,{startRow:e,endRow:t-1});for(let r of o){let{row:s,cellHeight:a}=r;s<t&&t<=s+a-1&&n.push(r)}return n}function lg(i,t,e){let n=i.parent,o=n.parent,r=n.index,s=t-r,a={},c=parseInt(i.getAttribute("rowspan"))-s;c>1&&(a.rowspan=c);let l=parseInt(i.getAttribute("colspan")||1);l>1&&(a.colspan=l);let d=r+s,h=[...new Z(o,{startRow:r,endRow:d,includeAllSlots:!0})],u,g=null;for(let m of h){let{row:p,column:k,cell:b}=m;b===i&&u===void 0&&(u=k),u!==void 0&&u===k&&p===d&&(g=en(e,m.getPositionBefore(),a))}return At("rowspan",s,i,e),g}function dg(i,t){let e=[],n=new Z(i);for(let o of n){let{column:r,cellWidth:s}=o;r<t&&t<=r+s-1&&e.push(o)}return e}function hg(i,t,e,n){let o=e-t,r={},s=parseInt(i.getAttribute("colspan"))-o;s>1&&(r.colspan=s);let a=parseInt(i.getAttribute("rowspan")||1);a>1&&(r.rowspan=a);let c=en(n,n.createPositionAfter(i),r);return At("colspan",o,i,n),c}function ug(i,t,e,n,o,r){let s=parseInt(i.getAttribute("colspan")||1),a=parseInt(i.getAttribute("rowspan")||1);e+s-1>o&&At("colspan",o-e+1,i,r,1),t+a-1>n&&At("rowspan",n-t+1,i,r,1)}function is(i,t){let e=t.getColumns(i),n=new Array(e).fill(0);for(let{column:r}of new Z(i))n[r]++;let o=n.reduce((r,s,a)=>s?r:[...r,a],[]);if(o.length>0){let r=o[o.length-1];return t.removeColumns(i,{at:r}),!0}return!1}function rs(i,t){let e=[],n=t.getRows(i);for(let o=0;o<n;o++)i.getChild(o).isEmpty&&e.push(o);if(e.length>0){let o=e[e.length-1];return t.removeRows(i,{at:o}),!0}return!1}function ss(i,t){is(i,t)||rs(i,t)}function gg(i,t){let e=Array.from(new Z(i,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(e.every(({cellHeight:o})=>o===1))return t.lastRow;let n=e[0].cellHeight-1;return t.lastRow+n}function mg(i,t){let e=Array.from(new Z(i,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(e.every(({cellWidth:o})=>o===1))return t.lastColumn;let n=e[0].cellWidth-1;return t.lastColumn+n}class ai extends U{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal=this.direction=="right"||this.direction=="left"}refresh(){let t=this._getMergeableCell();this.value=t,this.isEnabled=!!t}execute(){let t=this.editor.model,e=t.document,n=this.editor.plugins.get("TableUtils").getTableCellsContainingSelection(e.selection)[0],o=this.value,r=this.direction;t.change(s=>{let a=r=="right"||r=="down",c=a?n:o,l=a?o:n,d=l.parent;(function(p,k,b){pg(p)||(pg(k)&&b.remove(b.createRangeIn(k)),b.move(b.createRangeIn(p),b.createPositionAt(k,"end"))),b.remove(p)})(l,c,s);let h=this.isHorizontal?"colspan":"rowspan",u=parseInt(n.getAttribute(h)||1),g=parseInt(o.getAttribute(h)||1);s.setAttribute(h,u+g,c),s.setSelection(s.createRangeIn(c));let m=this.editor.plugins.get("TableUtils");ss(d.findAncestor("table"),m)})}_getMergeableCell(){let t=this.editor.model.document,e=this.editor.plugins.get("TableUtils"),n=e.getTableCellsContainingSelection(t.selection)[0];if(!n)return;let o=this.isHorizontal?function(a,c,l){let d=a.parent,h=d.parent,u=c=="right"?a.nextSibling:a.previousSibling,g=(h.getAttribute("headingColumns")||0)>0;if(!u)return;let m=c=="right"?a:u,p=c=="right"?u:a,{column:k}=l.getCellLocation(m),{column:b}=l.getCellLocation(p),A=parseInt(m.getAttribute("colspan")||1),y=os(l,m),N=os(l,p);if(!(g&&y!=N))return k+A===b?u:void 0}(n,this.direction,e):function(a,c,l){let d=a.parent,h=d.parent,u=h.getChildIndex(d);if(c=="down"&&u===l.getRows(h)-1||c=="up"&&u===0)return;let g=parseInt(a.getAttribute("rowspan")||1),m=h.getAttribute("headingRows")||0,p=c=="down"&&u+g===m,k=c=="up"&&u===m;if(m&&(p||k))return;let b=parseInt(a.getAttribute("rowspan")||1),A=c=="down"?u+b:u,y=[...new Z(h,{endRow:A})],N=y.find(K=>K.cell===a),z=N.column,q=y.find(({row:K,cellHeight:yt,column:Tt})=>Tt===z&&(c=="down"?K===A:A===K+yt));return q&&q.cell}(n,this.direction,e);if(!o)return;let r=this.isHorizontal?"rowspan":"colspan",s=parseInt(n.getAttribute(r)||1);return parseInt(o.getAttribute(r)||1)===s?o:void 0}}function pg(i){return i.childCount==1&&i.getChild(0).is("element","paragraph")&&i.getChild(0).isEmpty}class gC extends U{refresh(){let t=this.editor.plugins.get("TableUtils"),e=t.getSelectionAffectedTableCells(this.editor.model.document.selection),n=e[0];if(n){let o=n.findAncestor("table"),r=this.editor.plugins.get("TableUtils").getRows(o)-1,s=t.getRowIndexes(e),a=s.first===0&&s.last===r;this.isEnabled=!a}else this.isEnabled=!1}execute(){let t=this.editor.model,e=this.editor.plugins.get("TableUtils"),n=e.getSelectionAffectedTableCells(t.document.selection),o=e.getRowIndexes(n),r=n[0],s=r.findAncestor("table"),a=e.getCellLocation(r).column;t.change(c=>{let l=o.last-o.first+1;e.removeRows(s,{at:o.first,rows:l});let d=function(h,u,g,m){let p=h.getChild(Math.min(u,m-1)),k=p.getChild(0),b=0;for(let A of p.getChildren()){if(b>g)return k;k=A,b+=parseInt(A.getAttribute("colspan")||1)}return k}(s,o.first,a,e.getRows(s));c.setSelection(c.createPositionAt(d,0))})}}class mC extends U{refresh(){let t=this.editor.plugins.get("TableUtils"),e=t.getSelectionAffectedTableCells(this.editor.model.document.selection),n=e[0];if(n){let o=n.findAncestor("table"),r=t.getColumns(o),{first:s,last:a}=t.getColumnIndexes(e);this.isEnabled=a-s<r-1}else this.isEnabled=!1}execute(){let t=this.editor.plugins.get("TableUtils"),[e,n]=function(c,l){let d=l.getSelectionAffectedTableCells(c),h=d[0],u=d.pop(),g=[h,u];return h.isBefore(u)?g:g.reverse()}(this.editor.model.document.selection,t),o=e.parent.parent,r=[...new Z(o)],s={first:r.find(c=>c.cell===e).column,last:r.find(c=>c.cell===n).column},a=function(c,l,d,h){return parseInt(d.getAttribute("colspan")||1)>1?d:l.previousSibling||d.nextSibling?d.nextSibling||l.previousSibling:h.first?c.reverse().find(({column:g})=>g<h.first).cell:c.reverse().find(({column:g})=>g>h.last).cell}(r,e,n,s);this.editor.model.change(c=>{let l=s.last-s.first+1;this.editor.plugins.get("TableUtils").removeColumns(o,{at:s.first,columns:l}),c.setSelection(c.createPositionAt(a,0))})}}class pC extends U{refresh(){let t=this.editor.plugins.get("TableUtils"),e=this.editor.model,n=t.getSelectionAffectedTableCells(e.document.selection),o=n.length>0;this.isEnabled=o,this.value=o&&n.every(r=>this._isInHeading(r,r.parent.parent))}execute(t={}){if(t.forceValue===this.value)return;let e=this.editor.plugins.get("TableUtils"),n=this.editor.model,o=e.getSelectionAffectedTableCells(n.document.selection),r=o[0].findAncestor("table"),{first:s,last:a}=e.getRowIndexes(o),c=this.value?s:a+1,l=r.getAttribute("headingRows")||0;n.change(d=>{if(c){let h=cg(r,c,c>l?l:0);for(let{cell:u}of h)lg(u,c,d)}At("headingRows",c,r,d,0)})}_isInHeading(t,e){let n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}class fC extends U{refresh(){let t=this.editor.model,e=this.editor.plugins.get("TableUtils"),n=e.getSelectionAffectedTableCells(t.document.selection),o=n.length>0;this.isEnabled=o,this.value=o&&n.every(r=>os(e,r))}execute(t={}){if(t.forceValue===this.value)return;let e=this.editor.plugins.get("TableUtils"),n=this.editor.model,o=e.getSelectionAffectedTableCells(n.document.selection),r=o[0].findAncestor("table"),{first:s,last:a}=e.getColumnIndexes(o),c=this.value?s:a+1;n.change(l=>{if(c){let d=dg(r,c);for(let{cell:h,column:u}of d)hg(h,u,c,l)}At("headingColumns",c,r,l,0)})}}class St extends S{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(t){let e=t.parent,n=e.parent,o=n.getChildIndex(e),r=new Z(n,{row:o});for(let{cell:s,row:a,column:c}of r)if(s===t)return{row:a,column:c}}createTable(t,e){let n=t.createElement("table"),o=parseInt(e.rows)||2,r=parseInt(e.columns)||2;return as(t,n,0,o,r),e.headingRows&&At("headingRows",Math.min(e.headingRows,o),n,t,0),e.headingColumns&&At("headingColumns",Math.min(e.headingColumns,r),n,t,0),n}insertRows(t,e={}){let n=this.editor.model,o=e.at||0,r=e.rows||1,s=e.copyStructureFromAbove!==void 0,a=e.copyStructureFromAbove?o-1:o,c=this.getRows(t),l=this.getColumns(t);if(o>c)throw new w("tableutils-insertrows-insert-out-of-range",this,{options:e});n.change(d=>{let h=t.getAttribute("headingRows")||0;if(h>o&&At("headingRows",h+r,t,d,0),!s&&(o===0||o===c))return void as(d,t,o,r,l);let u=s?Math.max(o,a):o,g=new Z(t,{endRow:u}),m=new Array(l).fill(1);for(let{row:p,column:k,cellHeight:b,cellWidth:A,cell:y}of g){let N=p+b-1,z=p<=a&&a<=N;p<o&&o<=N?(d.setAttribute("rowspan",b+r,y),m[k]=-A):s&&z&&(m[k]=A)}for(let p=0;p<r;p++){let k=d.createElement("tableRow");d.insert(k,t,o);for(let b=0;b<m.length;b++){let A=m[b],y=d.createPositionAt(k,"end");A>0&&en(d,y,A>1?{colspan:A}:null),b+=Math.abs(A)-1}}})}insertColumns(t,e={}){let n=this.editor.model,o=e.at||0,r=e.columns||1;n.change(s=>{let a=t.getAttribute("headingColumns");o<a&&s.setAttribute("headingColumns",a+r,t);let c=this.getColumns(t);if(o===0||c===o){for(let d of t.getChildren())d.is("element","tableRow")&&Bn(r,s,s.createPositionAt(d,o?"end":0));return}let l=new Z(t,{column:o,includeAllSlots:!0});for(let d of l){let{row:h,cell:u,cellAnchorColumn:g,cellAnchorRow:m,cellWidth:p,cellHeight:k}=d;if(g<o){s.setAttribute("colspan",p+r,u);let b=m+k-1;for(let A=h;A<=b;A++)l.skipRow(A)}else Bn(r,s,d.getPositionBefore())}})}removeRows(t,e){let n=this.editor.model,o=e.rows||1,r=this.getRows(t),s=e.at,a=s+o-1;if(a>r-1)throw new w("tableutils-removerows-row-index-out-of-range",this,{table:t,options:e});n.change(c=>{let{cellsToMove:l,cellsToTrim:d}=function(h,u,g){let m=new Map,p=[];for(let{row:k,column:b,cellHeight:A,cell:y}of new Z(h,{endRow:g})){let N=k+A-1;if(k>=u&&k<=g&&N>g){let z=A-(g-k+1);m.set(b,{cell:y,rowspan:z})}if(k<u&&N>=u){let z;z=N>=g?g-u+1:N-u+1,p.push({cell:y,rowspan:A-z})}}return{cellsToMove:m,cellsToTrim:p}}(t,s,a);l.size&&function(h,u,g,m){let p=new Z(h,{includeAllSlots:!0,row:u}),k=[...p],b=h.getChild(u),A;for(let{column:y,cell:N,isAnchor:z}of k)if(g.has(y)){let{cell:q,rowspan:K}=g.get(y),yt=A?m.createPositionAfter(A):m.createPositionAt(b,0);m.move(m.createRangeOn(q),yt),At("rowspan",K,q,m),A=q}else z&&(A=N)}(t,a+1,l,c);for(let h=a;h>=s;h--)c.remove(t.getChild(h));for(let{rowspan:h,cell:u}of d)At("rowspan",h,u,c);(function(h,u,g,m){let p=h.getAttribute("headingRows")||0;u<p&&At("headingRows",g<p?p-(g-u+1):u,h,m,0)})(t,s,a,c),is(t,this)||rs(t,this)})}removeColumns(t,e){let n=this.editor.model,o=e.at,r=e.columns||1,s=e.at+r-1;n.change(a=>{(function(c,l,d){let h=c.getAttribute("headingColumns")||0;if(h&&l.first<h){let u=Math.min(h-1,l.last)-l.first+1;d.setAttribute("headingColumns",h-u,c)}})(t,{first:o,last:s},a);for(let c=s;c>=o;c--)for(let{cell:l,column:d,cellWidth:h}of[...new Z(t)])d<=c&&h>1&&d+h>c?At("colspan",h-1,l,a):d===c&&a.remove(l);rs(t,this)||is(t,this)})}splitCellVertically(t,e=2){let n=this.editor.model,o=t.parent.parent,r=parseInt(t.getAttribute("rowspan")||1),s=parseInt(t.getAttribute("colspan")||1);n.change(a=>{if(s>1){let{newCellsSpan:c,updatedSpan:l}=fg(s,e);At("colspan",l,t,a);let d={};c>1&&(d.colspan=c),r>1&&(d.rowspan=r),Bn(s>e?e-1:s-1,a,a.createPositionAfter(t),d)}if(s<e){let c=e-s,l=[...new Z(o)],{column:d}=l.find(({cell:m})=>m===t),h=l.filter(({cell:m,cellWidth:p,column:k})=>m!==t&&k===d||k<d&&k+p>d);for(let{cell:m,cellWidth:p}of h)a.setAttribute("colspan",p+c,m);let u={};r>1&&(u.rowspan=r),Bn(c,a,a.createPositionAfter(t),u);let g=o.getAttribute("headingColumns")||0;g>d&&At("headingColumns",g+c,o,a)}})}splitCellHorizontally(t,e=2){let n=this.editor.model,o=t.parent,r=o.parent,s=r.getChildIndex(o),a=parseInt(t.getAttribute("rowspan")||1),c=parseInt(t.getAttribute("colspan")||1);n.change(l=>{if(a>1){let d=[...new Z(r,{startRow:s,endRow:s+a-1,includeAllSlots:!0})],{newCellsSpan:h,updatedSpan:u}=fg(a,e);At("rowspan",u,t,l);let{column:g}=d.find(({cell:p})=>p===t),m={};h>1&&(m.rowspan=h),c>1&&(m.colspan=c);for(let p of d){let{column:k,row:b}=p;b>=s+u&&k===g&&(b+s+u)%h==0&&Bn(1,l,p.getPositionBefore(),m)}}if(a<e){let d=e-a,h=[...new Z(r,{startRow:0,endRow:s})];for(let{cell:m,cellHeight:p,row:k}of h)if(m!==t&&k+p>s){let b=p+d;l.setAttribute("rowspan",b,m)}let u={};c>1&&(u.colspan=c),as(l,r,s+1,d,1,u);let g=r.getAttribute("headingRows")||0;g>s&&At("headingRows",g+d,r,l)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((e,n)=>e+parseInt(n.getAttribute("colspan")||1),0)}getRows(t){return Array.from(t.getChildren()).reduce((e,n)=>n.is("element","tableRow")?e+1:e,0)}createTableWalker(t,e={}){return new Z(t,e)}getSelectedTableCells(t){let e=[];for(let n of this.sortRanges(t.getRanges())){let o=n.getContainedElement();o&&o.is("element","tableCell")&&e.push(o)}return e}getTableCellsContainingSelection(t){let e=[];for(let n of t.getRanges()){let o=n.start.findAncestor("tableCell");o&&e.push(o)}return e}getSelectionAffectedTableCells(t){let e=this.getSelectedTableCells(t);return e.length?e:this.getTableCellsContainingSelection(t)}getRowIndexes(t){let e=t.map(n=>n.parent.index);return this._getFirstLastIndexesObject(e)}getColumnIndexes(t){let e=t[0].findAncestor("table"),n=[...new Z(e)].filter(o=>t.includes(o.cell)).map(o=>o.column);return this._getFirstLastIndexesObject(n)}isSelectionRectangular(t){if(t.length<2||!this._areCellInTheSameTableSection(t))return!1;let e=new Set,n=new Set,o=0;for(let s of t){let{row:a,column:c}=this.getCellLocation(s),l=parseInt(s.getAttribute("rowspan")||1),d=parseInt(s.getAttribute("colspan")||1);e.add(a),n.add(c),l>1&&e.add(a+l-1),d>1&&n.add(c+d-1),o+=l*d}return function(s,a){let c=Array.from(s.values()),l=Array.from(a.values()),d=Math.max(...c),h=Math.min(...c),u=Math.max(...l),g=Math.min(...l);return(d-h+1)*(u-g+1)}(e,n)==o}sortRanges(t){return Array.from(t).sort(kC)}_getFirstLastIndexesObject(t){let e=t.sort((n,o)=>n-o);return{first:e[0],last:e[e.length-1]}}_areCellInTheSameTableSection(t){let e=t[0].findAncestor("table"),n=this.getRowIndexes(t),o=parseInt(e.getAttribute("headingRows")||0);if(!this._areIndexesInSameSection(n,o))return!1;let r=parseInt(e.getAttribute("headingColumns")||0),s=this.getColumnIndexes(t);return this._areIndexesInSameSection(s,r)}_areIndexesInSameSection({first:t,last:e},n){return t<n==e<n}}function as(i,t,e,n,o,r={}){for(let s=0;s<n;s++){let a=i.createElement("tableRow");i.insert(a,t,e),Bn(o,i,i.createPositionAt(a,"end"),r)}}function Bn(i,t,e,n={}){for(let o=0;o<i;o++)en(t,e,n)}function fg(i,t){if(i<t)return{newCellsSpan:1,updatedSpan:1};let e=Math.floor(i/t);return{newCellsSpan:e,updatedSpan:i-e*t+e}}function kC(i,t){let e=i.start,n=t.start;return e.isBefore(n)?-1:1}class bC extends U{refresh(){let t=this.editor.plugins.get(St),e=t.getSelectedTableCells(this.editor.model.document.selection);this.isEnabled=t.isSelectionRectangular(e,this.editor.plugins.get(St))}execute(){let t=this.editor.model,e=this.editor.plugins.get(St);t.change(n=>{let o=e.getSelectedTableCells(t.document.selection),r=o.shift(),{mergeWidth:s,mergeHeight:a}=function(c,l,d){let h=0,u=0;for(let b of l){let{row:A,column:y}=d.getCellLocation(b);h=bg(b,y,h,"colspan"),u=bg(b,A,u,"rowspan")}let{row:g,column:m}=d.getCellLocation(c),p=h-m,k=u-g;return{mergeWidth:p,mergeHeight:k}}(r,o,e);At("colspan",s,r,n),At("rowspan",a,r,n);for(let c of o)wC(c,r,n);ss(r.findAncestor("table"),e),n.setSelection(r,"in")})}}function wC(i,t,e){kg(i)||(kg(t)&&e.remove(e.createRangeIn(t)),e.move(e.createRangeIn(i),e.createPositionAt(t,"end"))),e.remove(i)}function kg(i){return i.childCount==1&&i.getChild(0).is("element","paragraph")&&i.getChild(0).isEmpty}function bg(i,t,e,n){let o=parseInt(i.getAttribute(n)||1);return Math.max(e,t+o)}class AC extends U{constructor(t){super(t),this.affectsData=!1}refresh(){let t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){let t=this.editor.model,e=this.editor.plugins.get("TableUtils"),n=e.getSelectionAffectedTableCells(t.document.selection),o=e.getRowIndexes(n),r=n[0].findAncestor("table"),s=[];for(let a=o.first;a<=o.last;a++)for(let c of r.getChild(a).getChildren())s.push(t.createRangeOn(c));t.change(a=>{a.setSelection(s)})}}class _C extends U{constructor(t){super(t),this.affectsData=!1}refresh(){let t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){let t=this.editor.plugins.get("TableUtils"),e=this.editor.model,n=t.getSelectionAffectedTableCells(e.document.selection),o=n[0],r=n.pop(),s=o.findAncestor("table"),a=t.getCellLocation(o),c=t.getCellLocation(r),l=Math.min(a.column,c.column),d=Math.max(a.column,c.column),h=[];for(let u of new Z(s,{startColumn:l,endColumn:d}))h.push(e.createRangeOn(u.cell));e.change(u=>{u.setSelection(h)})}}function CC(i){i.document.registerPostFixer(t=>function(e,n){let o=n.document.differ.getChanges(),r=!1,s=new Set;for(let a of o){let c;a.name=="table"&&a.type=="insert"&&(c=a.position.nodeAfter),a.name!="tableRow"&&a.name!="tableCell"||(c=a.position.findAncestor("table")),xC(a)&&(c=a.range.start.findAncestor("table")),c&&!s.has(c)&&(r=vC(c,e)||r,r=yC(c,e)||r,s.add(c))}return r}(t,i))}function vC(i,t){let e=!1,n=function(o){let r=parseInt(o.getAttribute("headingRows")||0),s=Array.from(o.getChildren()).reduce((c,l)=>l.is("element","tableRow")?c+1:c,0),a=[];for(let{row:c,cell:l,cellHeight:d}of new Z(o)){if(d<2)continue;let h=c<r?r:s;if(c+d>h){let u=h-c;a.push({cell:l,rowspan:u})}}return a}(i);if(n.length){e=!0;for(let o of n)At("rowspan",o.rowspan,o.cell,t,1)}return e}function yC(i,t){let e=!1,n=function(a){let c=new Array(a.childCount).fill(0);for(let{rowIndex:l}of new Z(a,{includeAllSlots:!0}))c[l]++;return c}(i),o=[];for(let[a,c]of n.entries())!c&&i.getChild(a).is("element","tableRow")&&o.push(a);if(o.length){e=!0;for(let a of o.reverse())t.remove(i.getChild(a)),n.splice(a,1)}let r=n.filter((a,c)=>i.getChild(c).is("element","tableRow")),s=r[0];if(!r.every(a=>a===s)){let a=r.reduce((c,l)=>l>c?l:c,0);for(let[c,l]of r.entries()){let d=a-l;if(d){for(let h=0;h<d;h++)en(t,t.createPositionAt(i.getChild(c),"end"));e=!0}}}return e}function xC(i){let t=i.type==="attribute",e=i.attributeKey;return t&&(e==="headingRows"||e==="colspan"||e==="rowspan")}function EC(i){i.document.registerPostFixer(t=>function(e,n){let o=n.document.differ.getChanges(),r=!1;for(let s of o)s.type=="insert"&&s.name=="table"&&(r=DC(s.position.nodeAfter,e)||r),s.type=="insert"&&s.name=="tableRow"&&(r=wg(s.position.nodeAfter,e)||r),s.type=="insert"&&s.name=="tableCell"&&(r=cs(s.position.nodeAfter,e)||r),IC(s)&&(r=cs(s.position.parent,e)||r);return r}(t,i))}function DC(i,t){let e=!1;for(let n of i.getChildren())n.is("element","tableRow")&&(e=wg(n,t)||e);return e}function wg(i,t){let e=!1;for(let n of i.getChildren())e=cs(n,t)||e;return e}function cs(i,t){if(i.childCount==0)return t.insertElement("paragraph",i),!0;let e=Array.from(i.getChildren()).filter(n=>n.is("$text"));for(let n of e)t.wrap(t.createRangeOn(n),"paragraph");return!!e.length}function IC(i){return!(!i.position||!i.position.parent.is("element","tableCell"))&&(i.type=="insert"&&i.name=="$text"||i.type=="remove")}function TC(i,t){if(!i.is("element","paragraph"))return!1;let e=t.toViewElement(i);return!!e&&og(i)!==e.is("element","span")}var Ag=P(3881),MC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Ag.Z,MC),Ag.Z.locals;class SC extends S{static get pluginName(){return"TableEditing"}static get requires(){return[St]}init(){let t=this.editor,e=t.model,n=e.schema,o=t.conversion,r=t.plugins.get(St);n.register("table",{inheritAllFrom:"$blockObject",allowAttributes:["headingRows","headingColumns"]}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowContentOf:"$container",allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),o.for("upcast").add(s=>{s.on("element:figure",(a,c,l)=>{if(!l.consumable.test(c.viewItem,{name:!0,classes:"table"}))return;let d=function(u){for(let g of u.getChildren())if(g.is("element","table"))return g}(c.viewItem);if(!d||!l.consumable.test(d,{name:!0}))return;l.consumable.consume(c.viewItem,{name:!0,classes:"table"});let h=vt(l.convertItem(d,c.modelCursor).modelRange.getItems());h?(l.convertChildren(c.viewItem,l.writer.createPositionAt(h,"end")),l.updateConversionResult(h,c)):l.consumable.revert(c.viewItem,{name:!0,classes:"table"})})}),o.for("upcast").add(lC()),o.for("editingDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:tg(r,{asWidget:!0})}),o.for("dataDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:tg(r)}),o.for("upcast").elementToElement({model:"tableRow",view:"tr"}),o.for("upcast").add(s=>{s.on("element:tr",(a,c)=>{c.viewItem.isEmpty&&c.modelCursor.index==0&&a.stop()},{priority:"high"})}),o.for("downcast").elementToElement({model:"tableRow",view:(s,{writer:a})=>s.isEmpty?a.createEmptyElement("tr"):a.createContainerElement("tr")}),o.for("upcast").elementToElement({model:"tableCell",view:"td"}),o.for("upcast").elementToElement({model:"tableCell",view:"th"}),o.for("upcast").add(Xu("td")),o.for("upcast").add(Xu("th")),o.for("editingDowncast").elementToElement({model:"tableCell",view:eg({asWidget:!0})}),o.for("dataDowncast").elementToElement({model:"tableCell",view:eg()}),o.for("editingDowncast").elementToElement({model:"paragraph",view:ng({asWidget:!0}),converterPriority:"high"}),o.for("dataDowncast").elementToElement({model:"paragraph",view:ng(),converterPriority:"high"}),o.for("downcast").attributeToAttribute({model:"colspan",view:"colspan"}),o.for("upcast").attributeToAttribute({model:{key:"colspan",value:_g("colspan")},view:"colspan"}),o.for("downcast").attributeToAttribute({model:"rowspan",view:"rowspan"}),o.for("upcast").attributeToAttribute({model:{key:"rowspan",value:_g("rowspan")},view:"rowspan"}),t.data.mapper.on("modelToViewPosition",(s,a)=>{let c=a.modelPosition.parent,l=a.modelPosition.nodeBefore;if(!c.is("element","tableCell")||!l||!l.is("element","paragraph"))return;let d=a.mapper.toViewElement(l),h=a.mapper.toViewElement(c);d===h&&(a.viewPosition=a.mapper.findPositionIn(h,l.maxOffset))}),t.config.define("table.defaultHeadings.rows",0),t.config.define("table.defaultHeadings.columns",0),t.commands.add("insertTable",new uC(t)),t.commands.add("insertTableRowAbove",new ig(t,{order:"above"})),t.commands.add("insertTableRowBelow",new ig(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new rg(t,{order:"left"})),t.commands.add("insertTableColumnRight",new rg(t,{order:"right"})),t.commands.add("removeTableRow",new gC(t)),t.commands.add("removeTableColumn",new mC(t)),t.commands.add("splitTableCellVertically",new sg(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new sg(t,{direction:"horizontally"})),t.commands.add("mergeTableCells",new bC(t)),t.commands.add("mergeTableCellRight",new ai(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new ai(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new ai(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new ai(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new fC(t)),t.commands.add("setTableRowHeader",new pC(t)),t.commands.add("selectTableRow",new AC(t)),t.commands.add("selectTableColumn",new _C(t)),CC(e),EC(e),this.listenTo(e.document,"change:data",()=>{(function(s,a){let c=s.document.differ;for(let l of c.getChanges()){let d,h=!1;if(l.type=="attribute"){let p=l.range.start.nodeAfter;if(!p||!p.is("element","table")||l.attributeKey!="headingRows"&&l.attributeKey!="headingColumns")continue;d=p,h=l.attributeKey=="headingRows"}else l.name!="tableRow"&&l.name!="tableCell"||(d=l.position.findAncestor("table"),h=l.name=="tableRow");if(!d)continue;let u=d.getAttribute("headingRows")||0,g=d.getAttribute("headingColumns")||0,m=new Z(d);for(let p of m){let k=p.row<u||p.column<g?"th":"td",b=a.mapper.toViewElement(p.cell);b&&b.is("element")&&b.name!=k&&a.reconvertItem(h?p.cell.parent:p.cell)}}})(e,t.editing),function(s,a){let c=s.document.differ,l=new Set;for(let d of c.getChanges()){let h=d.type=="attribute"?d.range.start.parent:d.position.parent;h.is("element","tableCell")&&l.add(h)}for(let d of l.values()){let h=Array.from(d.getChildren()).filter(u=>TC(u,a.mapper));for(let u of h)a.reconvertItem(u)}}(e,t.editing)})}}function _g(i){return t=>{let e=parseInt(t.getAttribute(i));return Number.isNaN(e)||e<=0?null:e}}var Cg=P(1613),NC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Cg.Z,NC),Cg.Z.locals;class BC extends H{constructor(t){super(t);let e=this.bindTemplate;this.items=this._createGridCollection(),this.keystrokes=new de,this.focusTracker=new Kt,this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(n,o)=>`${o} \xD7 ${n}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":e.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck","ck-insert-table-dropdown__label"],"aria-hidden":!0},children:[{text:e.to("label")}]}],on:{mousedown:e.to(n=>{n.preventDefault()}),click:e.to(()=>{this.fire("execute")})}}),this.on("boxover",(n,o)=>{let{row:r,column:s}=o.target.dataset;this.items.get(10*(parseInt(r,10)-1)+(parseInt(s,10)-1)).focus()}),this.focusTracker.on("change:focusedElement",(n,o,r)=>{if(!r)return;let{row:s,column:a}=r.dataset;this.set({rows:parseInt(s),columns:parseInt(a)})}),this.on("change:columns",()=>this._highlightGridBoxes()),this.on("change:rows",()=>this._highlightGridBoxes())}render(){super.render(),function({keystrokeHandler:t,focusTracker:e,gridItems:n,numberOfColumns:o,uiLanguageDirection:r}){let s=typeof o=="number"?()=>o:o;function a(d){return h=>{let u=n.find(p=>p.element===e.focusedElement),g=n.getIndex(u),m=d(g,n);n.get(m).focus(),h.stopPropagation(),h.preventDefault()}}function c(d,h){return d===h-1?0:d+1}function l(d,h){return d===0?h-1:d-1}t.set("arrowright",a((d,h)=>r==="rtl"?l(d,h.length):c(d,h.length))),t.set("arrowleft",a((d,h)=>r==="rtl"?c(d,h.length):l(d,h.length))),t.set("arrowup",a((d,h)=>{let u=d-s();return u<0&&(u=d+s()*Math.floor(h.length/s()),u>h.length-1&&(u-=s())),u})),t.set("arrowdown",a((d,h)=>{let u=d+s();return u>h.length-1&&(u=d%s()),u}))}({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:10,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection});for(let t of this.items)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element)}focus(){this.items.get(0).focus()}focusLast(){this.items.get(0).focus()}_highlightGridBoxes(){let t=this.rows,e=this.columns;this.items.map((n,o)=>{let r=Math.floor(o/10)<t&&o%10<e;n.set("isOn",r)})}_createGridButton(t,e,n,o){let r=new st(t);return r.set({label:o,class:"ck-insert-table-dropdown-grid-box"}),r.extendTemplate({attributes:{"data-row":e,"data-column":n}}),r}_createGridCollection(){let t=[];for(let e=0;e<100;e++){let n=Math.floor(e/10),o=e%10,r=`${n+1} \xD7 ${o+1}`;t.push(this._createGridButton(this.locale,n+1,o+1,r))}return this.createCollection(t)}}class PC extends S{static get pluginName(){return"TableUI"}init(){let t=this.editor,e=this.editor.t,n=t.locale.contentLanguageDirection==="ltr";t.ui.componentFactory.add("insertTable",o=>{let r=t.commands.get("insertTable"),s=Se(o),a;return s.bind("isEnabled").to(r),s.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:e("Insert table"),tooltip:!0}),s.on("change:isOpen",()=>{a||(a=new BC(o),s.panelView.children.add(a),a.delegate("execute").to(s),s.on("execute",()=>{t.execute("insertTable",{rows:a.rows,columns:a.columns}),t.editing.view.focus()}))}),s}),t.ui.componentFactory.add("tableColumn",o=>{let r=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:n?"insertTableColumnLeft":"insertTableColumnRight",label:e("Insert column left")}},{type:"button",model:{commandName:n?"insertTableColumnRight":"insertTableColumnLeft",label:e("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:e("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:e("Select column")}}];return this._prepareDropdown(e("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',r,o)}),t.ui.componentFactory.add("tableRow",o=>{let r=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:e("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:e("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:e("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:e("Select row")}}];return this._prepareDropdown(e("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',r,o)}),t.ui.componentFactory.add("mergeTableCells",o=>{let r=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("Merge cell up")}},{type:"button",model:{commandName:n?"mergeTableCellRight":"mergeTableCellLeft",label:e("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("Merge cell down")}},{type:"button",model:{commandName:n?"mergeTableCellLeft":"mergeTableCellRight",label:e("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(e("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',r,o)})}_prepareDropdown(t,e,n,o){let r=this.editor,s=Se(o),a=this._fillDropdownWithListOptions(s,n);return s.buttonView.set({label:t,icon:e,tooltip:!0}),s.bind("isEnabled").toMany(a,"isEnabled",(...c)=>c.some(l=>l)),this.listenTo(s,"execute",c=>{r.execute(c.source.commandName),c.source instanceof $o||r.editing.view.focus()}),s}_prepareMergeSplitButtonDropdown(t,e,n,o){let r=this.editor,s=Se(o,Er),a="mergeTableCells",c=r.commands.get(a),l=this._fillDropdownWithListOptions(s,n);return s.buttonView.set({label:t,icon:e,tooltip:!0,isEnabled:!0}),s.bind("isEnabled").toMany([c,...l],"isEnabled",(...d)=>d.some(h=>h)),this.listenTo(s.buttonView,"execute",()=>{r.execute(a),r.editing.view.focus()}),this.listenTo(s,"execute",d=>{r.execute(d.source.commandName),r.editing.view.focus()}),s}_fillDropdownWithListOptions(t,e){let n=this.editor,o=[],r=new ee;for(let s of e)zC(s,n,o,r);return od(t,r,n.ui.componentFactory),o}}function zC(i,t,e,n){let o=i.model=new hd(i.model),{commandName:r,bindIsOn:s}=i.model;if(i.type==="button"||i.type==="switchbutton"){let a=t.commands.get(r);e.push(a),o.set({commandName:r}),o.bind("isEnabled").to(a),s&&o.bind("isOn").to(a,"value")}o.set({withText:!0}),n.add(i)}var vg=P(6945),LC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(vg.Z,LC),vg.Z.locals;class nn extends S{static get pluginName(){return"TableSelection"}static get requires(){return[St,St]}init(){let t=this.editor,e=t.model,n=t.editing.view;this.listenTo(e,"deleteContent",(o,r)=>this._handleDeleteContent(o,r),{priority:"high"}),this.listenTo(n.document,"insertText",(o,r)=>this._handleInsertTextEvent(o,r),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){let t=this.editor.plugins.get(St),e=this.editor.model.document.selection,n=t.getSelectedTableCells(e);return n.length==0?null:n}getSelectionAsFragment(){let t=this.editor.plugins.get(St),e=this.getSelectedTableCells();return e?this.editor.model.change(n=>{let o=n.createDocumentFragment(),{first:r,last:s}=t.getColumnIndexes(e),{first:a,last:c}=t.getRowIndexes(e),l=e[0].findAncestor("table"),d=c,h=s;if(t.isSelectionRectangular(e)){let g={firstColumn:r,lastColumn:s,firstRow:a,lastRow:c};d=gg(l,g),h=mg(l,g)}let u=ag(l,{startRow:a,startColumn:r,endRow:d,endColumn:h},n);return n.insert(u,o,0),o}):null}setCellSelection(t,e){let n=this._getCellsToSelect(t,e);this.editor.model.change(o=>{o.setSelection(n.cells.map(r=>o.createRangeOn(r)),{backward:n.backward})})}getFocusCell(){let t=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return t&&t.is("element","tableCell")?t:null}getAnchorCell(){let t=vt(this.editor.model.document.selection.getRanges()).getContainedElement();return t&&t.is("element","tableCell")?t:null}_defineSelectionConverter(){let t=this.editor,e=new Set;t.conversion.for("editingDowncast").add(n=>n.on("selection",(o,r,s)=>{let a=s.writer;(function(d){for(let h of e)d.removeClass("ck-editor__editable_selected",h);e.clear()})(a);let c=this.getSelectedTableCells();if(!c)return;for(let d of c){let h=s.mapper.toViewElement(d);a.addClass("ck-editor__editable_selected",h),e.add(h)}let l=s.mapper.toViewElement(c[c.length-1]);a.setSelection(l,0)},{priority:"lowest"}))}_enablePluginDisabling(){let t=this.editor;this.on("change:isEnabled",()=>{if(!this.isEnabled){let e=this.getSelectedTableCells();if(!e)return;t.model.change(n=>{let o=n.createPositionAt(e[0],0),r=t.model.schema.getNearestSelectionRange(o);n.setSelection(r)})}})}_handleDeleteContent(t,e){let n=this.editor.plugins.get(St),[o,r]=e,s=this.editor.model,a=!r||r.direction=="backward",c=n.getSelectedTableCells(o);c.length&&(t.stop(),s.change(l=>{let d=c[a?c.length-1:0];s.change(u=>{for(let g of c)s.deleteContent(u.createSelection(g,"in"))});let h=s.schema.getNearestSelectionRange(l.createPositionAt(d,0));o.is("documentSelection")?l.setSelection(h):o.setTo(h)}))}_handleInsertTextEvent(t,e){let n=this.editor,o=n.model.document.selection,r=this.getSelectedTableCells(o);if(!r)return;let s=n.editing.view,a=n.editing.mapper,c=r.map(l=>s.createRangeOn(a.toViewElement(l)));e.selection=s.createSelection(c)}_getCellsToSelect(t,e){let n=this.editor.plugins.get("TableUtils"),o=n.getCellLocation(t),r=n.getCellLocation(e),s=Math.min(o.row,r.row),a=Math.max(o.row,r.row),c=Math.min(o.column,r.column),l=Math.max(o.column,r.column),d=new Array(a-s+1).fill(null).map(()=>[]),h={startRow:s,endRow:a,startColumn:c,endColumn:l};for(let{row:m,cell:p}of new Z(t.findAncestor("table"),h))d[m-s].push(p);let u=r.row<o.row,g=r.column<o.column;return u&&d.reverse(),g&&d.forEach(m=>m.reverse()),{cells:d.flat(),backward:u||g}}}class OC extends S{static get pluginName(){return"TableClipboard"}static get requires(){return[nn,St]}init(){let t=this.editor,e=t.editing.view.document;this.listenTo(e,"copy",(n,o)=>this._onCopyCut(n,o)),this.listenTo(e,"cut",(n,o)=>this._onCopyCut(n,o)),this.listenTo(t.model,"insertContent",(n,o)=>this._onInsertContent(n,...o),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(t,e){let n=this.editor.plugins.get(nn);if(!n.getSelectedTableCells()||t.name=="cut"&&this.editor.isReadOnly)return;e.preventDefault(),t.stop();let o=this.editor.data,r=this.editor.editing.view.document,s=o.toView(n.getSelectionAsFragment());r.fire("clipboardOutput",{dataTransfer:e.dataTransfer,content:s,method:t.name})}_onInsertContent(t,e,n){if(n&&!n.is("documentSelection"))return;let o=this.editor.model,r=this.editor.plugins.get(St),s=yg(e,o);if(!s)return;let a=r.getSelectionAffectedTableCells(o.document.selection);a.length?(t.stop(),o.change(c=>{let l={width:r.getColumns(s),height:r.getRows(s)},d=function(k,b,A,y){let N=k[0].findAncestor("table"),z=y.getColumnIndexes(k),q=y.getRowIndexes(k),K={firstColumn:z.first,lastColumn:z.last,firstRow:q.first,lastRow:q.last},yt=k.length===1;return yt&&(K.lastRow+=b.height-1,K.lastColumn+=b.width-1,function(Tt,Pn,Ae,Xt){let ye=Xt.getColumns(Tt),xe=Xt.getRows(Tt);Ae>ye&&Xt.insertColumns(Tt,{at:ye,columns:Ae-ye}),Pn>xe&&Xt.insertRows(Tt,{at:xe,rows:Pn-xe})}(N,K.lastRow+1,K.lastColumn+1,y)),yt||!y.isSelectionRectangular(k)?function(Tt,Pn,Ae){let{firstRow:Xt,lastRow:ye,firstColumn:xe,lastColumn:zn}=Pn,Sg={first:Xt,last:ye},Ng={first:xe,last:zn};ds(Tt,xe,Sg,Ae),ds(Tt,zn+1,Sg,Ae),ls(Tt,Xt,Ng,Ae),ls(Tt,ye+1,Ng,Ae,Xt)}(N,K,A):(K.lastRow=gg(N,K),K.lastColumn=mg(N,K)),K}(a,l,c,r),h=d.lastRow-d.firstRow+1,u=d.lastColumn-d.firstColumn+1,g={startRow:0,startColumn:0,endRow:Math.min(h,l.height)-1,endColumn:Math.min(u,l.width)-1};s=ag(s,g,c);let m=a[0].findAncestor("table"),p=this._replaceSelectedCellsWithPasted(s,l,m,d,c);if(this.editor.plugins.get("TableSelection").isEnabled){let k=r.sortRanges(p.map(b=>c.createRangeOn(b)));c.setSelection(k)}else c.setSelection(p[0],0)})):ss(s,r)}_replaceSelectedCellsWithPasted(t,e,n,o,r){let{width:s,height:a}=e,c=function(k,b,A){let y=new Array(A).fill(null).map(()=>new Array(b).fill(null));for(let{column:N,row:z,cell:q}of new Z(k))y[z][N]=q;return y}(t,s,a),l=[...new Z(n,{startRow:o.firstRow,endRow:o.lastRow,startColumn:o.firstColumn,endColumn:o.lastColumn,includeAllSlots:!0})],d=[],h;for(let k of l){let{row:b,column:A}=k;A===o.firstColumn&&(h=k.getPositionBefore());let y=b-o.firstRow,N=A-o.firstColumn,z=c[y%a][N%s],q=z?r.cloneElement(z):null,K=this._replaceTableSlotCell(k,q,h,r);K&&(ug(K,b,A,o.lastRow,o.lastColumn,r),d.push(K),h=r.createPositionAfter(K))}let u=parseInt(n.getAttribute("headingRows")||0),g=parseInt(n.getAttribute("headingColumns")||0),m=o.firstRow<u&&u<=o.lastRow,p=o.firstColumn<g&&g<=o.lastColumn;if(m){let k=ls(n,u,{first:o.firstColumn,last:o.lastColumn},r,o.firstRow);d.push(...k)}if(p){let k=ds(n,g,{first:o.firstRow,last:o.lastRow},r);d.push(...k)}return d}_replaceTableSlotCell(t,e,n,o){let{cell:r,isAnchor:s}=t;return s&&o.remove(r),e?(o.insert(e,n),e):null}getTableIfOnlyTableInContent(t,e){return yg(t,e)}}function yg(i,t){if(!i.is("documentFragment")&&!i.is("element"))return null;if(i.is("element","table"))return i;if(i.childCount==1&&i.getChild(0).is("element","table"))return i.getChild(0);let e=t.createRangeIn(i);for(let n of e.getItems())if(n.is("element","table")){let o=t.createRange(e.start,t.createPositionBefore(n));if(t.hasContent(o,{ignoreWhitespaces:!0}))return null;let r=t.createRange(t.createPositionAfter(n),e.end);return t.hasContent(r,{ignoreWhitespaces:!0})?null:n}return null}function ls(i,t,e,n,o=0){if(!(t<1))return cg(i,t,o).filter(({column:r,cellWidth:s})=>xg(r,s,e)).map(({cell:r})=>lg(r,t,n))}function ds(i,t,e,n){if(!(t<1))return dg(i,t).filter(({row:o,cellHeight:r})=>xg(o,r,e)).map(({cell:o,column:r})=>hg(o,r,t,n))}function xg(i,t,e){let n=i+t-1,{first:o,last:r}=e;return i>=o&&i<=r||i<o&&n>=o}class RC extends S{static get pluginName(){return"TableKeyboard"}static get requires(){return[nn,St]}init(){let t=this.editor.editing.view.document;this.listenTo(t,"arrowKey",(...e)=>this._onArrowKey(...e),{context:"table"}),this.listenTo(t,"tab",(...e)=>this._handleTabOnSelectedTable(...e),{context:"figure"}),this.listenTo(t,"tab",(...e)=>this._handleTab(...e),{context:["th","td"]})}_handleTabOnSelectedTable(t,e){let n=this.editor,o=n.model.document.selection.getSelectedElement();o&&o.is("element","table")&&(e.preventDefault(),e.stopPropagation(),t.stop(),n.model.change(r=>{r.setSelection(r.createRangeIn(o.getChild(0).getChild(0)))}))}_handleTab(t,e){let n=this.editor,o=this.editor.plugins.get(St),r=n.model.document.selection,s=!e.shiftKey,a=o.getTableCellsContainingSelection(r)[0];if(a||(a=this.editor.plugins.get("TableSelection").getFocusCell()),!a)return;e.preventDefault(),e.stopPropagation(),t.stop();let c=a.parent,l=c.parent,d=l.getChildIndex(c),h=c.getChildIndex(a),u=h===0;if(!s&&u&&d===0)return void n.model.change(k=>{k.setSelection(k.createRangeOn(l))});let g=h===c.childCount-1,m=d===o.getRows(l)-1;if(s&&m&&g&&(n.execute("insertTableRowBelow"),d===o.getRows(l)-1))return void n.model.change(k=>{k.setSelection(k.createRangeOn(l))});let p;if(s&&g)p=l.getChild(d+1).getChild(0);else if(!s&&u){let k=l.getChild(d-1);p=k.getChild(k.childCount-1)}else p=c.getChild(h+(s?1:-1));n.model.change(k=>{k.setSelection(k.createRangeIn(p))})}_onArrowKey(t,e){let n=this.editor,o=Oi(e.keyCode,n.locale.contentLanguageDirection);this._handleArrowKeys(o,e.shiftKey)&&(e.preventDefault(),e.stopPropagation(),t.stop())}_handleArrowKeys(t,e){let n=this.editor.plugins.get(St),o=this.editor.model,r=o.document.selection,s=["right","down"].includes(t),a=n.getSelectedTableCells(r);if(a.length){let l;return l=e?this.editor.plugins.get("TableSelection").getFocusCell():s?a[a.length-1]:a[0],this._navigateFromCellInDirection(l,t,e),!0}let c=r.focus.findAncestor("tableCell");if(!c)return!1;if(!r.isCollapsed)if(e){if(r.isBackward==s&&!r.containsEntireContent(c))return!1}else{let l=r.getSelectedElement();if(!l||!o.schema.isObject(l))return!1}return!!this._isSelectionAtCellEdge(r,c,s)&&(this._navigateFromCellInDirection(c,t,e),!0)}_isSelectionAtCellEdge(t,e,n){let o=this.editor.model,r=this.editor.model.schema,s=n?t.getLastPosition():t.getFirstPosition();if(!r.getLimitElement(s).is("element","tableCell"))return o.createPositionAt(e,n?"end":0).isTouching(s);let a=o.createSelection(s);return o.modifySelection(a,{direction:n?"forward":"backward"}),s.isEqual(a.focus)}_navigateFromCellInDirection(t,e,n=!1){let o=this.editor.model,r=t.findAncestor("table"),s=[...new Z(r,{includeAllSlots:!0})],{row:a,column:c}=s[s.length-1],l=s.find(({cell:p})=>p==t),{row:d,column:h}=l;switch(e){case"left":h--;break;case"up":d--;break;case"right":h+=l.cellWidth;break;case"down":d+=l.cellHeight}if(d<0||d>a||h<0&&d<=0||h>c&&d>=a)return void o.change(p=>{p.setSelection(p.createRangeOn(r))});h<0?(h=n?0:c,d--):h>c&&(h=n?c:0,d++);let u=s.find(p=>p.row==d&&p.column==h).cell,g=["right","down"].includes(e),m=this.editor.plugins.get("TableSelection");if(n&&m.isEnabled){let p=m.getAnchorCell()||t;m.setCellSelection(p,u)}else{let p=o.createPositionAt(u,g?0:"end");o.change(k=>{k.setSelection(p)})}}}class jC extends Ie{constructor(t){super(t),this.domEventType=["mousemove","mouseleave"]}onDomEvent(t){this.fire(t.type,t)}}class FC extends S{static get pluginName(){return"TableMouse"}static get requires(){return[nn,St]}init(){this.editor.editing.view.addObserver(jC),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){let t=this.editor,e=t.plugins.get(St),n=!1,o=t.plugins.get(nn);this.listenTo(t.editing.view.document,"mousedown",(r,s)=>{let a=t.model.document.selection;if(!this.isEnabled||!o.isEnabled||!s.domEvent.shiftKey)return;let c=o.getAnchorCell()||e.getTableCellsContainingSelection(a)[0];if(!c)return;let l=this._getModelTableCellFromDomEvent(s);l&&Eg(c,l)&&(n=!0,o.setCellSelection(c,l),s.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{n=!1}),this.listenTo(t.editing.view.document,"selectionChange",r=>{n&&r.stop()},{priority:"highest"})}_enableMouseDragSelection(){let t=this.editor,e,n,o=!1,r=!1,s=t.plugins.get(nn);this.listenTo(t.editing.view.document,"mousedown",(a,c)=>{this.isEnabled&&s.isEnabled&&(c.domEvent.shiftKey||c.domEvent.ctrlKey||c.domEvent.altKey||(e=this._getModelTableCellFromDomEvent(c)))}),this.listenTo(t.editing.view.document,"mousemove",(a,c)=>{if(!c.domEvent.buttons||!e)return;let l=this._getModelTableCellFromDomEvent(c);l&&Eg(e,l)&&(n=l,o||n==e||(o=!0)),o&&(r=!0,s.setCellSelection(e,n),c.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{o=!1,r=!1,e=null,n=null}),this.listenTo(t.editing.view.document,"selectionChange",a=>{r&&a.stop()},{priority:"highest"})}_getModelTableCellFromDomEvent(t){let e=t.target,n=this.editor.editing.view.createPositionAt(e,0);return this.editor.editing.mapper.toModelPosition(n).parent.findAncestor("tableCell",{includeSelf:!0})}}function Eg(i,t){return i.parent.parent==t.parent.parent}var Dg=P(6306),VC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(Dg.Z,VC),Dg.Z.locals;function UC(i){let t=i.getSelectedElement();return t&&Ig(t)?t:null}function HC(i){let t=i.getFirstPosition();if(!t)return null;let e=t.parent;for(;e;){if(e.is("element")&&Ig(e))return e;e=e.parent}return null}function Ig(i){return!!i.getCustomProperty("table")&&pt(i)}let hs={autoRefresh:!0},Tg=36e5;class ci{constructor(t,e=hs){if(!t)throw new w("token-missing-token-url",this);e.initValue&&this._validateTokenValue(e.initValue),this.set("value",e.initValue),this._refresh=typeof t=="function"?t:()=>{return n=t,new Promise((o,r)=>{let s=new XMLHttpRequest;s.open("GET",n),s.addEventListener("load",()=>{let a=s.status,c=s.response;return a<200||a>299?r(new w("token-cannot-download-new-token",null)):o(c)}),s.addEventListener("error",()=>r(new Error("Network Error"))),s.addEventListener("abort",()=>r(new Error("Abort"))),s.send()});var n},this._options=Object.assign({},hs,e)}init(){return new Promise((t,e)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),t(this)):this.refreshToken().then(t).catch(e)})}refreshToken(){return this._refresh().then(t=>{this._validateTokenValue(t),this.set("value",t),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(t){let e=typeof t=="string",n=!/^".*"$/.test(t),o=e&&t.split(".").length===3;if(!n||!o)throw new w("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){let t=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},t)}_getTokenRefreshTimeoutTime(){try{let[,t]=this.value.split("."),{exp:e}=JSON.parse(atob(t));return e?Math.floor((1e3*e-Date.now())/2):Tg}catch{return Tg}}static create(t,e=hs){return new ci(t,e).init()}}jt(ci,J);let WC=ci,us=/^data:(\S*?);base64,/;class Mg{constructor(t,e,n){if(!t)throw new w("fileuploader-missing-file",null);if(!e)throw new w("fileuploader-missing-token",null);if(!n)throw new w("fileuploader-missing-api-address",null);this.file=function(o){if(typeof o!="string")return!1;let r=o.match(us);return!(!r||!r.length)}(t)?function(o,r=512){try{let s=o.match(us)[1],a=atob(o.replace(us,"")),c=[];for(let l=0;l<a.length;l+=r){let d=a.slice(l,l+r),h=new Array(d.length);for(let u=0;u<d.length;u++)h[u]=d.charCodeAt(u);c.push(new Uint8Array(h))}return new Blob(c,{type:s})}catch{throw new w("fileuploader-decoding-image-data-error",null)}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){let t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){let t=this,e=this.xhr;function n(o){return()=>t.fire("error",o)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",o=>{o.lengthComputable&&this.fire("progress",{total:o.total,uploaded:o.loaded})}),e.addEventListener("load",()=>{let o=e.status,r=e.response;if(o<200||o>299)return this.fire("error",r.message||r.error)})}_sendRequest(){let t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,o)=>{e.addEventListener("load",()=>{let r=e.status,s=e.response;return r<200||r>299?s.message?o(new w("fileuploader-uploading-data-failed",this,{message:s.message})):o(s.error):n(s)}),e.addEventListener("error",()=>o(new Error("Network Error"))),e.addEventListener("abort",()=>o(new Error("Abort"))),e.send(t)})}}jt(Mg,$);class qC{constructor(t,e){if(!t)throw new w("uploadgateway-missing-token",null);if(!e)throw new w("uploadgateway-missing-api-address",null);this._token=t,this._apiAddress=e}upload(t){return new Mg(t,this._token,this._apiAddress)}}class GC extends Do{static get pluginName(){return"CloudServicesCore"}createToken(t,e){return new WC(t,e)}createUploadGateway(t,e){return new qC(t,e)}}class gs extends iw{}gs.builtinPlugins=[class extends S{static get requires(){return[eh,Xo,Fw,bw,cw,sh]}static get pluginName(){return"Essentials"}},class extends S{static get requires(){return[se]}static get pluginName(){return"CKFinderUploadAdapter"}init(){let i=this.editor.config.get("ckfinder.uploadUrl");i&&(this.editor.plugins.get(se).createUploadAdapter=t=>new Zw(t,i,this.editor.t))}},class extends S{static get requires(){return[Be]}static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){let i=this.editor.commands;i.get("bulletedList")&&ze(this.editor,this,/^[*-]\s$/,"bulletedList"),i.get("numberedList")&&ze(this.editor,this,/^1[.|)]\s$/,"numberedList"),i.get("todoList")&&ze(this.editor,this,/^\[\s?\]\s$/,"todoList"),i.get("checkTodoList")&&ze(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){let i=this.editor.commands;if(i.get("bold")){let t=ni(this.editor,"bold");Tn(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,t),Tn(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,t)}if(i.get("italic")){let t=ni(this.editor,"italic");Tn(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,t),Tn(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,t)}if(i.get("code")){let t=ni(this.editor,"code");Tn(this.editor,this,/(`)([^`]+)(`)$/g,t)}if(i.get("strikethrough")){let t=ni(this.editor,"strikethrough");Tn(this.editor,this,/(~~)([^~]+)(~~)$/g,t)}}_addHeadingAutoformats(){let i=this.editor.commands.get("heading");i&&i.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{let e=t[7],n=new RegExp(`^(#{${e}})\\s$`);ze(this.editor,this,n,()=>{if(!i.isEnabled||i.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&ze(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){let i=this.editor,t=i.model.document.selection;i.commands.get("codeBlock")&&ze(i,this,/^```$/,()=>{if(t.getFirstPosition().parent.is("element","listItem"))return!1;this.editor.execute("codeBlock",{usePreviousLanguageChoice:!0})})}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&ze(this.editor,this,/^---$/,"horizontalLine")}},class extends S{static get requires(){return[Jw,Xw]}static get pluginName(){return"Bold"}},class extends S{static get requires(){return[tA,eA]}static get pluginName(){return"Italic"}},class extends S{static get requires(){return[oA,rA]}static get pluginName(){return"BlockQuote"}},class extends S{static get pluginName(){return"CKBox"}static get requires(){return[Vr,sA]}},class extends S{static get pluginName(){return"CKFinder"}static get requires(){return["Link","CKFinderUploadAdapter",fA,mA]}},class extends Do{static get pluginName(){return"CloudServices"}static get requires(){return[GC]}init(){let i=this.context.config.get("cloudServices")||{};for(let t in i)this[t]=i[t];if(this._tokens=new Map,this.tokenUrl)return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init();this.token=null}registerTokenUrl(i){if(this._tokens.has(i))return Promise.resolve(this.getTokenFor(i));let t=this.context.plugins.get("CloudServicesCore").createToken(i);return this._tokens.set(i,t),t.init()}getTokenFor(i){let t=this._tokens.get(i);if(!t)throw new w("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(let i of this._tokens.values())i.destroy()}},class extends S{static get requires(){return[kA,"ImageUpload"]}init(){let i=this.editor;i.plugins.has("ImageBlockEditing")||i.plugins.has("ImageInlineEditing")||at("easy-image-image-feature-missing",i)}static get pluginName(){return"EasyImage"}},class extends S{static get requires(){return[CA,yA]}static get pluginName(){return"Heading"}},class extends S{static get requires(){return[PA,LA]}static get pluginName(){return"Image"}},class extends S{static get requires(){return[RA,jA]}static get pluginName(){return"ImageCaption"}},class extends S{static get requires(){return[Gh,WA]}static get pluginName(){return"ImageStyle"}},class extends S{static get requires(){return[ei,ae]}static get pluginName(){return"ImageToolbar"}afterInit(){let i=this.editor,t=i.t,e=i.plugins.get(ei),n=i.plugins.get("ImageUtils");var o;e.register("image",{ariaLabel:t("Image toolbar"),items:(o=i.config.get("image.toolbar")||[],o.map(r=>gt(r)?r.name:r)),getRelatedElement:r=>n.getClosestSelectedImageWidget(r)})}},class extends S{static get pluginName(){return"ImageUpload"}static get requires(){return[JA,GA,QA]}},class extends S{static get pluginName(){return"Indent"}static get requires(){return[t_,e_]}},class extends S{static get requires(){return[__,E_,I_]}static get pluginName(){return"Link"}},class extends S{static get requires(){return[V_,U_]}static get pluginName(){return"List"}},class extends S{static get requires(){return[si,Q_,$_,ho]}static get pluginName(){return"MediaEmbed"}},uo,class extends S{static get pluginName(){return"PasteFromOffice"}static get requires(){return[be]}init(){let i=this.editor,t=i.editing.view.document,e=[];e.push(new aC(t)),e.push(new nC(t)),i.plugins.get("ClipboardPipeline").on("inputTransformation",(n,o)=>{if(o._isTransformedWithPasteFromOffice||i.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;let r=o.dataTransfer.getData("text/html"),s=e.find(a=>a.isActive(r));s&&(o._parsedData=cC(r,t.stylesProcessor),s.execute(o),o._isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends S{static get requires(){return[Wr,ae]}static get pluginName(){return"PictureEditing"}afterInit(){let i=this.editor;i.plugins.has("ImageBlockEditing")&&i.model.schema.extend("imageBlock",{allowAttributes:["sources"]}),i.plugins.has("ImageInlineEditing")&&i.model.schema.extend("imageInline",{allowAttributes:["sources"]}),this._setupConversion(),this._setupImageUploadEditingIntegration()}_setupConversion(){let i=this.editor,t=i.conversion,e=i.plugins.get("ImageUtils");t.for("upcast").add(function(n){let o=["srcset","media","type","sizes"];return s=>{s.on("element:picture",r)};function r(s,a,c){let l=a.viewItem;if(!c.consumable.test(l,{name:!0}))return;let d=new Map;for(let g of l.getChildren())if(g.is("element","source")){let m={};for(let p of o)g.hasAttribute(p)&&c.consumable.test(g,{attributes:p})&&(m[p]=g.getAttribute(p));Object.keys(m).length&&d.set(g,m)}let h=n.findViewImgElement(l);if(!h)return;let u=a.modelCursor.parent;if(!u.is("element","imageBlock")){let g=c.convertItem(h,a.modelCursor);a.modelRange=g.modelRange,a.modelCursor=g.modelCursor,u=vt(g.modelRange.getItems())}c.consumable.consume(l,{name:!0});for(let[g,m]of d)c.consumable.consume(g,{attributes:Object.keys(m)});d.size&&c.writer.setAttribute("sources",Array.from(d.values()),u),c.convertChildren(l,u)}}(e)),t.for("downcast").add(function(n){return r=>{r.on("attribute:sources:imageBlock",o),r.on("attribute:sources:imageInline",o)};function o(r,s,a){if(!a.consumable.consume(s.item,r.name))return;let c=a.writer,l=a.mapper.toViewElement(s.item),d=n.findViewImgElement(l);if(s.attributeNewValue&&s.attributeNewValue.length){let h=c.createContainerElement("picture",null,s.attributeNewValue.map(m=>c.createEmptyElement("source",m))),u=[],g=d.parent;for(;g&&g.is("attributeElement");){let m=g.parent;c.unwrap(c.createRangeOn(d),g),u.unshift(g),g=m}c.insert(c.createPositionBefore(d),h),c.move(c.createRangeOn(d),c.createPositionAt(h,"end"));for(let m of u)c.wrap(c.createRangeOn(h),m)}else if(d.parent.is("element","picture")){let h=d.parent;c.move(c.createRangeOn(d),c.createPositionBefore(h)),c.remove(h)}}}(e))}_setupImageUploadEditingIntegration(){let i=this.editor;i.plugins.has("ImageUploadEditing")&&this.listenTo(i.plugins.get("ImageUploadEditing"),"uploadComplete",(t,{imageElement:e,data:n})=>{let o=n.sources;o&&i.model.change(r=>{r.setAttributes({sources:o},e)})})}},class extends S{static get requires(){return[SC,PC,nn,FC,RC,OC,ho]}static get pluginName(){return"Table"}},class extends S{static get requires(){return[ei]}static get pluginName(){return"TableToolbar"}afterInit(){let i=this.editor,t=i.t,e=i.plugins.get(ei),n=i.config.get("table.contentToolbar"),o=i.config.get("table.tableToolbar");n&&e.register("tableContent",{ariaLabel:t("Table toolbar"),items:n,getRelatedElement:HC}),o&&e.register("table",{ariaLabel:t("Table toolbar"),items:o,getRelatedElement:UC})}},class extends S{static get requires(){return["Delete","Input"]}static get pluginName(){return"TextTransformation"}constructor(i){super(i),i.config.define("typing",{transformations:{include:hw}})}init(){let i=this.editor.model.document.selection;i.on("change:range",()=>{this.isEnabled=!i.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){let i=this.editor,t=i.model,e=i.plugins.get("Delete"),n=function(r){let s=r.extra||[],a=r.remove||[],c=l=>!a.includes(l);return function(l){let d=new Set;for(let h of l)if(typeof h=="string"&&Sd[h])for(let u of Sd[h])d.add(u);else d.add(h);return Array.from(d)}(r.include.concat(s).filter(c)).filter(c).map(l=>typeof l=="string"&&Md[l]?Md[l]:l).filter(l=>typeof l=="object").map(l=>({from:uw(l.from),to:gw(l.to)}))}(i.config.get("typing.transformations")),o=new Dd(i.model,r=>{for(let s of n)if(s.from.test(r))return{normalizedTransformation:s}});o.on("matched:data",(r,s)=>{if(!s.batch.isTyping)return;let{from:a,to:c}=s.normalizedTransformation,l=a.exec(s.text),d=c(l.slice(1)),h=s.range,u=l.index;t.enqueueChange(g=>{for(let m=1;m<l.length;m++){let p=l[m],k=d[m-1];if(k==null){u+=p.length;continue}let b=h.start.getShiftedBy(u),A=t.createRange(b,b.getShiftedBy(p.length)),y=mw(b);t.insertContent(g.createText(k,y),A),u+=k.length}t.enqueueChange(()=>{e.requestUndoOnBackspace()})})}),o.bind("isEnabled").to(this)}}],gs.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","outdent","indent","|","uploadImage","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}})(),on=on.default})())});var zg=t0(Pg());window.ClassicEditor=zg.default;})();
