## English-Only Policy

1. **Language Scope**
   - Every piece of text produced—source-code comments, docstrings, variable and function names, commit messages, branch names, pull-request titles & descriptions, issue templates, README files, architectural decision records, user-facing UI copy, alt text, and any embedded text in images or comics—**MUST be written in English**.

2. **Spelling & Tone**
   - Use **standard American English** spelling and grammar unless a library, API, or proper noun dictates otherwise.
   - Keep language clear, concise, and professional. Avoid slang unless explicitly required by context (e.g., in a comic’s dialog).

3. **Input in Other Languages**
   - If the user provides prompts or content in any language other than English, **automatically translate the input into English internally** and proceed.
   - All outputs—code, documentation, commit messages, comics, etc.—must still be delivered **exclusively in English**.

4. **Code Generation Guidelines**
   - All generated docstrings, inline comments, and placeholder text **must be English**.
   - Variable, constant, and function names should be meaningful English words (e.g., `totalAmount`, not `montoTotal`).

5. **Documentation & PRs**
   - Pull-request templates, commit bodies, and release notes must be English-only.
   - When summarizing changes, prefer the present imperative ("Add feature X", "Fix typo") in English.
   - **PR descriptions must consist ONLY of a concise summary of the changes.**
     Do **not** include testing notes, task/ticket links, or additional sections such as "Testing" or "Task ID".

6. **Comics or Visual Assets**
   - Speech bubbles, captions, onomatopoeia, and credits must be in English.
   - Provide English alt text for accessibility.

7. **Validation & Enforcement**
   - Deviation from this policy is treated as an error. Regenerate or revise the output until it fully complies.
   - Automated checks (linters, CI) may reject non-English content.

8. **Documentation of Policy**
   - Keep this block (or a condensed version) in `CONTRIBUTING.md` and reference it from your PR template to ensure every collaborator and tool abides by the English-only requirement.
