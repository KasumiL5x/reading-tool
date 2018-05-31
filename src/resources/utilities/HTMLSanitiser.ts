import {autoinject} from "aurelia-framework";
import {Config} from "../../config/Config";

import * as sanitizeHtml from "sanitize-html";

@autoinject()
export class HTMLSanitiser {

    private allowedTags;
    private allowedAttributes;

    constructor(private config: Config) {
        this.allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'];
        this.allowedAttributes = {'a': ['href', 'target']};
    }

    public sanitisePageContent(body: string): string {
        if (body === undefined) {
            return;
        }

        return body;
    }

    public sanitiseStoryDescription(description: string): string {
        if (description === undefined) {
            return;
        }

        return sanitizeHtml(
            description,
            {
                allowedTags: this.allowedTags,
                allowedAttributes: this.allowedAttributes,
            });
    }

    public sanitiseCollectionDescription(description: string): string {
        if (description === undefined) {
            return;
        }

        return sanitizeHtml(
            description,
            {
                allowedTags: this.allowedTags,
                allowedAttributes: this.allowedAttributes,
            });
    }
}